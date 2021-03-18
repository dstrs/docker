```sql
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL NOT NULL PRIMARY KEY,
  author VARCHAR NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
INSERT INTO messages (author, text) VALUES ('alex', 'lorem text'), ('ivan', 'lorem text'), ('Oliver', 'lorem text for Oliver'), ('Sophia', 'naaaaames'), ('William', 'People also ask');
```