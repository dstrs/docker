# install

`cd parser` `npm install`

`cd sql` `npm install`

<!-- `cd server` `npm install` -->


# SQL

Создание БД

```
createdb auto
createuser auto_user
```

Проверка
```
psql -d auto -U auto_user

auto=> \c
You are now connected to database "auto" as user "auto_user".
```

Создание схемы (таблицы)

`cd sql`

```
node --require ts-node/register scripts/create-table.ts
```

Проверка

```
auto=> \d
               List of relations
 Schema |     Name      |   Type   |   Owner
--------+---------------+----------+-----------
 public | cars          | table    | auto_user
 public | cars_id_seq   | sequence | auto_user



auto=> \d cars
                                       Table "public.cars"
   Column   |           Type           | Collation | Nullable |             Default
------------+--------------------------+-----------+----------+----------------------------------
 id         | integer                  |           | not null | nextval('cars_id_seq'::regclass)
 title      | character varying(255)   |           | not null |
 price      | integer                  |           | not null |
 probeg     | integer                  |           |          |
 autoru_id  | integer                  |           | not null |
 created_at | timestamp with time zone |           |          | CURRENT_TIMESTAMP
Indexes:
    "cars_pkey" PRIMARY KEY, btree (id)

```
# Parser

В README в папке parser.


