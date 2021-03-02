import { Client } from "pg";
import fastify from "fastify";
import pointOfView from "point-of-view";

const sql = new Client({});

const server = fastify({
  // logger: true,
});

server.register(pointOfView, {
  engine: {
    nunjucks: require("nunjucks"),
  },
});

interface IMagicDbRequest {
  msg: string;
}

server.get("/", async (req, reply) => {
  const res = await sql.query("SELECT * from todos ORDER BY id DESC");
  reply.view("./templates/index.njk", {
    size: res.rowCount,
    items: res.rows,
  });
});

server.get<{ Querystring: IMagicDbRequest }>(
  "/magic_db_ednpoint",
  async (request, reply) => {
    let msg = request.query.msg;
    if (!msg || msg === "") {
      reply.code(422).send({ error: `msg is required` });
    }
    await sql.query(`INSERT INTO todos(text) VALUES($1) RETURNING *`, [msg]);
    reply.code(200).send({ message: `ok!` });
  }
);

// READ
server.get("/news", async (req, reply) => {
  reply.code(200).send([
    { tile: "123", text: "text" },
    { tile: "2000", text: "text 2" },
  ]);
});

// CREATE
server.post("/news", async (req, reply) => {
  console.log("create with params", req.body);
  reply.code(200).send({ message: "create ok!", body: req.body });
});

// UPDATE
server.put<{ Params: { id: string } }>("/news/:id", async (req, reply) => {
  console.log("update where id=", req.params.id);
  reply
    .code(200)
    .send({ message: "update ok!", id: req.params.id, body: req.body });
});

// DELETE
server.delete<{ Params: { id: string } }>("/news/:id", async (req, reply) => {
  console.log("delete where id=", req.params.id);
  reply.code(200).send({ message: "delete where ok!", id: req.params.id });
});

server.listen(3000, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  await sql.connect();
  await sql.query(`
  CREATE TABLE IF NOT EXISTS todos (
    id SERIAL NOT NULL PRIMARY KEY,
    text varchar(200) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
  `);
  console.log(`Server listening at ${address}`);
});
