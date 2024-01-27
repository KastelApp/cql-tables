CREATE TYPE IF NOT EXISTS bigint_pair (
  first bigint,
  second bigint
);

CREATE TABLE IF NOT EXISTS roles (
	role_id text,
	guild_id text,
	name text,
	allowed_age_restricted boolean,
	deleteable boolean,
	mentionable boolean,
	hoisted boolean,
	color int,
	permissions list<frozen<bigint_pair>>,
	position int,
	PRIMARY KEY (guild_id, role_id)
)  WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': '10'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'sstable_compression': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 21600
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
