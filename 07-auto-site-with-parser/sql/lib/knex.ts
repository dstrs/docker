import { knex } from "knex";

const knexInstance = knex({
  client: "pg",
  connection: {
    user: "auto_user",
    database: "auto",
  },
});

export default knexInstance;
