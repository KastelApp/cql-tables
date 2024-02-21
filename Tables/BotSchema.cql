CREATE TABLE IF NOT EXISTS bots (
	user_id text,
    name text,
    description text,
    avatar text,
    summary text,
    owner_id text,
    PRIMARY KEY (user_id)
);
