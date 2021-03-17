const { Client } = require("pg");
const client = new Client({ user: "alex", password: "123" });

async function main() {
  await client.connect();
  const res = await client.query("SELECT $1::text as message", [
    "Hello world!",
  ]);
  console.log(res.rows);
  await client.end();
}

main();
