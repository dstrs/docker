import { test, expect } from "@playwright/test";
import knex from "../../sql/lib/knex";
import { CarItem } from "../../sql/types";

test("db hello", async ({ page, context }) => {
  let insertRes = await knex<CarItem>("cars").insert([
    {
      autoru_id: 333,
      title: "2222",
      probeg: 10000000,
      price: 34000,
    },
  ]);
  console.log("insertRes:", insertRes);

  let items = await knex<CarItem>("cars").select("*");
  console.log("items:", items);
  expect(1).toBe(1);
});
