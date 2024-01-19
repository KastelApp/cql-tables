CREATE TABLE IF NOT EXISTS roles (
	role_id text PRIMARY KEY,
	guild_id text,
	name text,
	allowed_nsfw boolean,
	deleteable boolean,
	mentionable boolean,
	hoisted boolean,
	color int,
	permissions bigint,
	position int,
);

CREATE INDEX IF NOT EXISTS roles_guild_id ON roles (guild_id);
