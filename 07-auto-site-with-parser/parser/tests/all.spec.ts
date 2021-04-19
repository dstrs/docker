import { test, expect } from "@playwright/test";
import knex from "../../sql/lib/knex";
import { CarItem } from "../../sql/types";
import { autoUrlsFixture } from "../constants/fixtures";
import parseOneAuto from "../lib/parseAuto";

test("all", async ({ page, context }) => {
  for (const iterator of autoUrlsFixture) {
    // console.log("ALL: start", iterator);
    try {
      let oneAutoRes = await parseOneAuto({
        page,
        context,
        props: { url: iterator },
      });
      let insertRes = await knex<CarItem>("cars").insert(oneAutoRes);
      console.log("insertRes:", insertRes);
      console.log("ALL: one res", JSON.stringify(oneAutoRes, null, 2));
    } catch (e) {
      console.log("error:", e);
      continue;
    }
  }

  expect(1).toBe(1);
});
