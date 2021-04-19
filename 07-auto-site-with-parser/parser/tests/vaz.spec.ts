import { test, expect } from "@playwright/test";
import { firstAutoUrl } from "../constants/fixtures";
import parseOneAuto from "../lib/parseAuto";

test("Страница авто", async ({ page, context }) => {
  let oneAutoRes = await parseOneAuto({
    page,
    context,
    props: {
      url: firstAutoUrl,
    },
  });
  console.log("VAZ.SPEC.TS: one res", JSON.stringify(oneAutoRes, null, 2));
  expect(1).toBe(1);
});
