CREATE TABLE IF NOT EXISTS bans (
	guild_id text,
	user_id text,
	banner_id text,
	reason text,
	banned_date timestamp,
	unban_date timestamp,
	PRIMARY KEY (guild_id, user_id)
);
