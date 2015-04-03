Readme
======
Very simple http server with node.js, Bookshelf.js, PostgreSQL.

Idea is to save name and age to database when making a POST request to the server with url parameters name and age. Data is saved to PostgreSQL database with Bookshelf.js ORM.

Example POST request: http://127.0.0.1:4747/write?name=Fran&age=47

* Database: postgres
* Username: postgres
* Password: postgres
* Tablename: user
* Schema: node

CREATE SQL for user-table
```sql
CREATE TABLE node."user"
(
  id bigserial NOT NULL,
  "name" character varying(40) NOT NULL,
  age bigint NOT NULL
)
WITH (
  OIDS=FALSE
);
```
