CREATE TABLE IF NOT EXISTS users (
    user_id text,
    email text,
    username text,
    tag text,
    avatar text,
    password text,
    phone_number text,
    two_fa_secret text,
    ips list<text>,
    public_flags text,
    flags text,
    guilds list<text>,
    global_nickname text,
    PRIMARY KEY (user_id)
) 
WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'ALL'}
    AND comment = ''
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.LeveledCompactionStrategy', 'sstable_size_in_mb': '160'}
    AND compression = {'sstable_compression': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 86400
    AND max_index_interval = 2048
    AND memtable_flush_period_in_ms = 0
    AND min_index_interval = 128
    AND read_repair_chance = 0.0
    AND speculative_retry = '99PERCENTILE';

CREATE INDEX IF NOT EXISTS users_email_idx ON users (email);

CREATE INDEX IF NOT EXISTS users_username_idx ON users (username);

CREATE INDEX IF NOT EXISTS users_tag_idx ON users (tag);
