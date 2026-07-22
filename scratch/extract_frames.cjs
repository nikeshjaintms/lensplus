const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');

const videoDir = path.join(__dirname, '..', 'public', 'videos');
const outputDir = path.join(__dirname, 'video_frames');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Simple HTTP server to serve video files
const server = http.createServer((req, res) => {
  const filePath = path.join(videoDir, req.url);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(9876, async () => {
  console.log('Server listening on port 9876');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 1000 });

  const files = fs.readdirSync(videoDir).filter(f => f.endsWith('.mp4'));

  for (const file of files) {
    const videoUrl = `http://localhost:9876/${encodeURIComponent(file)}`;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <body style="margin:0; background:black; display:flex; justify-content:center; align-items:center; height:100vh;">
        <video id="v" src="${videoUrl}" style="max-width:100%; max-height:100%;" muted preload="auto"></video>
        <script>
          const v = document.getElementById('v');
          v.onloadeddata = () => {
            v.currentTime = Math.min(2.0, (v.duration || 1) / 2);
          };
        </script>
      </body>
      </html>
    `;
    await page.setContent(htmlContent);
    await new Promise(r => setTimeout(r, 1500));
    const outPath = path.join(outputDir, `${file}.jpg`);
    await page.screenshot({ path: outPath });
    console.log(`Saved screenshot for ${file} -> ${outPath}`);
  }

  await browser.close();
  server.close();
  console.log('Done!');
});
