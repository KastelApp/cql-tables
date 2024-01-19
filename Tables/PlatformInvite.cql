CREATE TABLE IF NOT EXISTS platform_invite (
	code text PRIMARY KEY,
	creator_id text,
    expires_at timestamp,
    used_by_id text,
);

CREATE INDEX IF NOT EXISTS platform_invite_creator_id_idx ON platform_invite (creator_id);
