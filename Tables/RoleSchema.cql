CREATE TYPE IF NOT EXISTS bigint_pair (
  first bigint,
  second bigint
);

CREATE TABLE IF NOT EXISTS roles (
	role_id text PRIMARY KEY,
	guild_id text,
	name text,
	allowed_age_restricted boolean,
	deleteable boolean,
	mentionable boolean,
	hoisted boolean,
	color int,
	permissions list<frozen<bigint_pair>>,
	position int,
);

CREATE INDEX IF NOT EXISTS roles_guild_id ON roles (guild_id);
