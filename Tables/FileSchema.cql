CREATE TABLE IF NOT EXISTS files (
	file_id text PRIMARY KEY,
	for_id text,
	name text,
	type text,
	deleted boolean,
	uploaded boolean,
	uploaded_at timestamp,
	uploaded_by text,
	hash text,
);

CREATE INDEX IF NOT EXISTS file_hash_idx ON files (hash);

CREATE INDEX IF NOT EXISTS file_for_id_idx ON files (for_id);
