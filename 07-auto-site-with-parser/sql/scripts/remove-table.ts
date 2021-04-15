import knex from "../lib/knex";

async function main() {
  console.log("Start");

  let res = await knex.schema.dropTable("cars");
  console.log("res:", res);
  await knex.destroy();
}

main();
