import path from "path";
import { Client } from "pg";
import fastify from "fastify";
import fastifyStatic from "fastify-static";

const sql = new Client({});

const server = fastify({
  // logger: true,
});

server.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
});

server.get("/", async (req, reply) => {
  return reply.sendFile("index.html");
});

// READ
server.get("/news", async (req, reply) => {
  reply.code(200).send([
    { tile: "123", text: "text" },
    { tile: "2000", text: "text 2" },
  ]);
});

// CREATE
server.post<{ Body: { author: string; text: string } }>(
  "/news",
  async (req, reply) => {
    console.log("create with params", req.body);
    reply.code(200).send({ message: "create ok!", body: req.body });
  }
);

// UPDATE
server.put<{ Params: { id: string } }>("/news/:id", async (req, reply) => {
  console.log("update where id=", req.params.id);
  reply
    .code(200)
    .send({ message: "update ok!", id: req.params.id, body: req.body });
});

// DELETE
server.delete<{ Params: { id: string } }>("/news/:id", async (req, reply) => {
  console.log("delete where id=", req.params);
  reply.code(200).send({ message: "delete where ok!", id: req.params.id });
});

server.listen(3000, async (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  await sql.connect();
  console.log(`Server listening at ${address}`);
});
