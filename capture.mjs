import puppeteer from 'puppeteer';

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const targets = [
    { name: 'projekty', url: 'http://localhost:5173/builder-copy/projekty' },
    { name: 'detail-projektu', url: 'http://localhost:5173/builder-copy/projekty/vltava-residence' }
  ];

  for (const target of targets) {
    console.log(`Processing ${target.name}...`);
    for (const width of [1920, 430]) {
      console.log(`  Capturing ${width}px...`);
      // Use 1080 as a base height, wait for load
      await page.setViewport({ width, height: 1080 });
      await page.goto(target.url, { waitUntil: 'load', timeout: 60000 });

      
      // Scroll down gradually to trigger all v-reveal animations
      await page.evaluate(async () => {
        const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const distance = 400;
        while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
          document.scrollingElement.scrollBy(0, distance);
          await wait(150);
        }
        // Scroll back to top
        window.scrollTo(0, 0);
        await wait(2000); // Allow top elements to settle
      });

      await page.screenshot({ path: `${target.name}-${width}.png`, fullPage: true });
    }
  }

  await browser.close();
  console.log('Screenshots completed!');
})();
