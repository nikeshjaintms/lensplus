const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('Navigating to pricing page...');
  await page.goto('https://n24pilatesstudio.com/pricing-and-memberships', { waitUntil: 'networkidle2' });
  
  console.log('Finding buttons...');
  // Find all elements that look like buttons
  const buttons = await page.$$('a, button, [role="button"]');
  
  const results = [];
  
  for (let i = 0; i < buttons.length; i++) {
    const text = await page.evaluate(el => el.innerText, buttons[i]);
    if (!text || text.trim() === '') continue;
    const lowerText = text.toLowerCase();
    
    // Only care about pricing buttons
    if (lowerText.includes('buy') || lowerText.includes('jump in') || lowerText.includes('start') || lowerText.includes('gift') || lowerText.includes('connect')) {
      
      console.log(`Clicking button: ${text.trim().substring(0, 30)}`);
      
      // Setup listener for new target
      const targetPromise = new Promise(resolve => {
        browser.once('targetcreated', async target => {
          resolve(target);
        });
      });
      
      try {
        await buttons[i].click();
        
        // Wait for new tab or navigation
        const newTarget = await Promise.race([
          targetPromise,
          new Promise(r => setTimeout(r, 3000))
        ]);
        
        if (newTarget && newTarget.url) {
          results.push({
            button: text.trim(),
            url: newTarget.url()
          });
          console.log(' -> Found URL:', newTarget.url());
          
          if (newTarget.type() === 'page') {
             const newPage = await newTarget.page();
             if (newPage) await newPage.close();
          }
        }
      } catch (e) {
        console.log(' -> Error clicking:', e.message);
      }
    }
  }
  
  fs.writeFileSync('links.json', JSON.stringify(results, null, 2));
  console.log('Done!');
  await browser.close();
})();
