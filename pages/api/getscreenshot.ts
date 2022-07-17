// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { takeScreenShotAndClose } from "../../src/puppeteer-scripts/takescreenshot";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const queryParams = req.query;
  const url = queryParams.url as string;
  const screenshot = await takeScreenShotAndClose(url);

  res.setHeader("Content-Type", "image/webp");
  res.setHeader("Content-Length", screenshot.length);
  res.write(screenshot);
  res.end();
}
