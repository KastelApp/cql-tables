CREATE TYPE IF NOT EXISTS tokens_type (
	token_ text,
	created_date timestamp,
	ip text,
	flags int,
	token_id text,
);

CREATE TYPE IF NOT EXISTS mentions_type (
	message_id text,
);

CREATE TYPE IF NOT EXISTS guild_oreder_type (
	guild_id text,
	position int,
);

CREATE TABLE IF NOT EXISTS settings (
	user_id text PRIMARY KEY,
	status text,
	bio text,
	presence int,
	tokens list<frozen<tokens_type>>,
	theme text,
	language text,
	privacy int,
	mentions list<frozen<mentions_type>>,
	max_guilds int,
	max_file_upload_size int,
	guild_order list<frozen<guild_oreder_type>>,
	allowed_invites int
);
