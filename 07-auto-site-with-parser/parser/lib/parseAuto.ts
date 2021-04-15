import { BrowserContext, Page } from "playwright";

interface ParseOneAutoOptions {
  context: BrowserContext;
  page: Page;
  props: {
    url: string;
  };
}

interface ParseOneAutoResult {
  title: string;
  price: number;
  probeg: number;
  autoru_id: number;
}

export default async function parseOneAuto(
  options: ParseOneAutoOptions
): Promise<ParseOneAutoResult> {
  const { context, page } = options;
  const { url } = options.props;

  console.log("PARSE_AUTO url:", url);
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  let title = await page.innerText(".LayoutSidebar h1");

  await page.waitForSelector(".CardInfoRow_kmAge span:last-child");
  let probegRaw = await page.innerText(".CardInfoRow_kmAge span:last-child");
  let probeg = parseInt(probegRaw.replace(/\s/g, ""));

  let priceRaw = await page.innerText(".OfferPriceCaption__price");
  let price = parseInt(priceRaw.replace(/\s/g, ""));

  let idRaw = await page.innerText(`[title="Идентификатор объявления"]`);
  let id = parseInt(idRaw.replace("№", ""));

  return {
    title,
    price,
    probeg,
    autoru_id: id,
  };
}
