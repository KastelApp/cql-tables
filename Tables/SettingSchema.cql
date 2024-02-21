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

CREATE TYPE IF NOT EXISTS guild_order_type (
	guild_id text,
	position int,
);

CREATE TABLE IF NOT EXISTS settings (
	user_id text PRIMARY KEY,
	status int,
	custom_status text,
	bio text,
	tokens list<frozen<tokens_type>>,
	theme text,
	language text,
	privacy int,
	mentions list<frozen<mentions_type>>,
	max_guilds int,
	max_file_upload_size int,
	guild_order list<frozen<guild_order_type>>,
	allowed_invites int
)  WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': '10'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'sstable_compression': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 3600
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
