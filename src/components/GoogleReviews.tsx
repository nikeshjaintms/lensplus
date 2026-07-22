"use client";

import Script from "next/script";
import { useEffect } from "react";

export function GoogleReviews() {
  useEffect(() => {
    // Force Elfsight widget to initialize on component mount (useful for client-side navigation)
    // We use a small timeout to ensure the DOM element is ready
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (win.eapps && typeof win.eapps.init === "function") {
        try {
          win.eapps.init();
        } catch (e) {
          // Ignore
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
      <div
        className="elfsight-app-6e805205-fe9f-4079-955b-4139eb8ac3e5"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
