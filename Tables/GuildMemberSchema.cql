CREATE TYPE IF NOT EXISTS member_timeouts (
	channel_id text,
	timeout_until timestamp,
);

CREATE TABLE IF NOT EXISTS guild_members (
	guild_id text,
	user_id text,
	roles list<text>,
	nickname text,
	joined_at timestamp,
	flags int,
	timeouts list<frozen<member_timeouts>>,
	PRIMARY KEY (guild_id, user_id)
);
