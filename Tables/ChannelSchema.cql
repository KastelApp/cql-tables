CREATE TABLE IF NOT EXISTS channels (
	channel_id text PRIMARY KEY,
	guild_id text,
	name text,
	description text,
	type int,
	age_restricted boolean,
	allowed_mentions int,
	parent_id text,
	children list<text>,
	position int,
	permission_overrides list<text>,
	slowmode int,
);

CREATE INDEX IF NOT EXISTS channels_guild_id ON channels (guild_id);
