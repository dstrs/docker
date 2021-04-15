import knex from "../lib/knex";

async function main() {
  console.log("Start");

  let res = await knex.schema.createTable("cars", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.integer("price").notNullable();
    table.integer("probeg");
    table.integer("autoru_id").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
  console.log("res:", res);
  await knex.destroy();
}

main();
