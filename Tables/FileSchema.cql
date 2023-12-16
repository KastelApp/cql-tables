CREATE TABLE IF NOT EXISTS files (
	file_id text PRIMARY KEY,
	name text,
	type text,
	deleted boolean,
	uploaded boolean,
	uploaded_at timestamp,
	uploaded_by text,
);
