DO
$do$
BEGIN
  SET client_encoding = 'UTF8';

  DROP TABLE IF EXISTS public.todo;
  CREATE TABLE public.todo(
    id SERIAL PRIMARY KEY
  , "name" text
  , "createdAt" timestamp with time zone NOT NULL default now()
  , "updatedAt" timestamp with time zone NOT NULL default now()
  )
  WITH (
    OIDS=FALSE
  );
  ALTER TABLE public.todo
    OWNER TO "dbuser";

END
$do$;
