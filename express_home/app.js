const express = require("express");
const { Client } = require("pg");
const path = require("path");
const app = express();
const port = 3000;
const client = new Client({
  user: "alex",
  password: "123",
});

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  "/another_page",
  express.static(path.join(__dirname, "public"), {
    index: "another_page.html",
  })
);

app.get("/test", (req, res) => {
  res.send({ text: "json_stringggggg" });
});

app.get("/messages", async (req, res) => {
  const result = await client.query("SELECT * FROM messages");
  res.send(result.rows);
});

app.delete("/messages/:id", async (req, res) => {
  console.log(`DELETE_PARAMS: ${req.params.id}`);
  const deleted = await client.query(
    `DELETE FROM messages WHERE id = ${req.params.id} `
  );
  console.log(deleted);
  res.send({ id: req.params.id, deleted });
});

app.post("/messages", async (req, res) => {
  console.log(req.body);
  // sql INSERT INTO
  res.send(req.body);
});

app.listen(port, async () => {
  await client.connect();
  console.log(`Example app listening at http://localhost:${port}`);
  const res = await client.query("SELECT * FROM messages");
  console.log(res.rows); // Hello world!
  // await client.end();
});
