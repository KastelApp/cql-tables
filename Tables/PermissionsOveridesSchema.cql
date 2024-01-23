CREATE TYPE IF NOT EXISTS bigint_pair (
  first bigint,
  second bigint
);

CREATE TABLE IF NOT EXISTS permissionsoverides (
	permission_id text PRIMARY KEY,
	id text,
	allow_ list<frozen<bigint_pair>>,
	deny list<frozen<bigint_pair>>,
	type int,
	editable boolean,
	slowmode int,
);

CREATE INDEX IF NOT EXISTS permissionsoverides_id_index ON permissionsoverides (id);
