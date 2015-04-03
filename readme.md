Testing out node.js with bookshelf.js

Database: postgres
Schema: node
User table:

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