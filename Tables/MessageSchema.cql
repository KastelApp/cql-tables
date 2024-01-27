CREATE TYPE IF NOT EXISTS author (
    name text,
    iconurl text
);

CREATE TYPE IF NOT EXISTS footer (
    text text,
    timestamp_ timestamp
);

CREATE TYPE IF NOT EXISTS field (
    title text,
    description text
);

CREATE TYPE IF NOT EXISTS main_object (
    title text,
    description text,
    url text,
    color text,
    author frozen<author>,
    footer frozen<footer>,
    fields list<frozen<field>>,
    thumbnail_url text,
    image_url text
);

CREATE TABLE IF NOT EXISTS messages (
	message_id bigint,
	author_id text,
	content text,
	allowed_mentions int,
	updated_date timestamp,
	channel_id text,
	nonce text,
    bucket text,
	flags int,
	mentions list<text>,
	mention_roles list<text>,
	mention_channels list<text>,
	embeds list<frozen<main_object>>,
	attachments list<text>,
	replying_to text,
    PRIMARY KEY ((channel_id, bucket), message_id)
) WITH CLUSTERING ORDER BY (message_id DESC)
    AND bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': '10'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy', 'max_threshold': '32', 'min_threshold': '4'}
    AND compression = {'chunk_length_in_kb': '64', 'sstable_compression': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 864000
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';
