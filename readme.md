Simple node server. Used bookshelf.js to save username and age to postgres database.
Server is listening 127.0.0.1:4747.

User can be saved by making a POST request to /write -path with parameters name and age.
EXAMPLE: http://127.0.0.1:4747/write?name=Jack&age=47

Database: postgres
Username: postgres
Password: postgres
Tablename: user
Schema: node
user-table sql:

CREATE TABLE node."user"
(
  id bigserial NOT NULL,
  "name" character varying(40) NOT NULL,
  age bigint NOT NULL
)
WITH (
  OIDS=FALSE
);
ALTER TABLE node."user" OWNER TO postgres;