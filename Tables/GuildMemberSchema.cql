CREATE TYPE IF NOT EXISTS member_timeouts (
	channel_id text,
	timeout_until timestamp,
);

CREATE TYPE IF NOT EXISTS channel_acks (
    channel_id text,
    message_id text
)

CREATE TABLE IF NOT EXISTS guild_members (
	guild_id text,
	user_id text,
	roles list<text>,
	nickname text,
	joined_at timestamp,
	flags int,
	timeouts list<frozen<member_timeouts>>,
    channel_acks list<frozen<channel_acks>>,
    guild_member_id bigint,
	PRIMARY KEY (guild_id, guild_member_id)
) WITH CLUSTERING ORDER BY (guild_member_id ASC)
    AND bloom_filter_fp_chance = 0.01
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

CREATE INDEX IF NOT EXISTS guild_members_member_id_idx ON guild_members (user_id);
