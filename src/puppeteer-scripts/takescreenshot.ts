import {
  Browser,
  chromium,
  LaunchOptions,
  Page,
  PageScreenshotOptions,
} from "playwright";

const defaultLunchOptions: LaunchOptions = {
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
};

const getBrowser = async (options: LaunchOptions = defaultLunchOptions) =>
  chromium.launch(options);

const getPage = async (browser: Browser) => browser.newPage();

const goto = async (page: Page, url: string) =>
  page.goto(url, { waitUntil: "networkidle" });

const takeScreenShot = async (
  page: Page,
  options: PageScreenshotOptions = { fullPage: true, quality: 100 }
) => page.screenshot(options);

export const takeScreenShotAndClose = async (url: string) => {
  const browser = await getBrowser();
  const page = await getPage(browser);
  await goto(page, url);
  const pic = await takeScreenShot(page);
  await browser.close();
  return pic;
};
