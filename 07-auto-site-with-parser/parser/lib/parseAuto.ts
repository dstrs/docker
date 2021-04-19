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
  images: string | string[];
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
  let isSold = await page.evaluate(() => {
    return document.querySelectorAll(".CardSold").length;
  });
  console.log("isSold:", isSold);

  if (isSold === 1) {
    throw new Error("Машина продана");
  }

  let title = await page.innerText(".LayoutSidebar h1");

  await page.waitForSelector(".CardInfoRow_kmAge span:last-child");

  let imagesRaw = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".ImageGalleryDesktop__image")
    ).map((el) => el.getAttribute("src"));
  });
  let images = JSON.stringify(imagesRaw);

  let priceRaw = await page.innerText(".OfferPriceCaption__price");
  let price = parseInt(priceRaw.replace(/\s/g, ""));

  let idRaw = await page.innerText(`[title="Идентификатор объявления"]`);
  let id = parseInt(idRaw.replace("№", ""));

  return {
    title,
    price,
    images,
    autoru_id: id,
  };
}
