import puppeteer, { PuppeteerLaunchOptions, ScreenshotOptions } from 'puppeteer';

const defaultsLunchOptions: PuppeteerLaunchOptions = {
	headless: true,
	args: ["--no-sandbox", "--disable-setuid-sandbox"],
};


const defaultsScreenshotOptions: ScreenshotOptions = {
    fullPage: true,
    quality: 100,
    type: 'webp',
};
    
const getBrowser = async (options: PuppeteerLaunchOptions = defaultsLunchOptions ) => await puppeteer
	.launch(options);

const getPage = async (browser: puppeteer.Browser) => await browser.newPage();

const goto = async (page: puppeteer.Page, url: string) => await page.goto(url, { waitUntil: "networkidle0" });

const takeScreenShot = async (page: puppeteer.Page, options: ScreenshotOptions = defaultsScreenshotOptions) =>
	await page.screenshot(options);

export const takeScreenShotAndClose = async (url: string) => {
    const browser = await getBrowser();
    const page = await getPage(browser);
    await goto(page, url);
    const pic =  await takeScreenShot(page);
    await browser.close();
    return pic;
};

