  BEGIN;

  SET client_encoding = '',

  CREATE TABLE attractions (
    id integer NOT NULL,
    name text NOT NULL,
    city text NOT NULL,
    cost integer NOT NULL,
    duration text NOT NULL,
    activitylevel text NOT NULL
  );
