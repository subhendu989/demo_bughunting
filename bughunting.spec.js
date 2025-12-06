const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch({ headless: false });//headless মানে হলো, আপনি ভিজুয়ালি দেকখতে পারবেন না। এটা false রেখেছি, অর্থাৎ দেখতে পারবেন
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://newsletter-bughunt-1.netlify.app/");
    //await loginPage.login("standard_user", "secret_sauce"); //এটা POM ফর্ম্যাটের জন্য
    await page.click('.btn.subscribe-btn');

    await page.fill('#username', 'iamaproudqa@yopmail.com');
    await page.waitForTimeout(1000);

    await page.fill('#password', '89ikjns#6^');
    await page.waitForTimeout(1000);

    await page.click('.login-btn');
    await page.waitForTimeout(1000);

    await page.click('#back-to-main');
    await page.waitForTimeout(1000);

})();