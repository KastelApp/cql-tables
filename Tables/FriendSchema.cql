CREATE TABLE IF NOT EXISTS friends (
    friend_id text,
    primary_user_id text,
    secondary_user_id text,
    primary_user_nickname text,
    secondary_user_nickname text,
    primary_user_flags int,
    secondary_user_flags int,
    created_at timestamp,
    PRIMARY KEY ((primary_user_id, secondary_user_id), friend_id)
)
WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'ALL'}
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

CREATE INDEX IF NOT EXISTS friends_primary_user_id ON friends (primary_user_id);

CREATE INDEX IF NOT EXISTS friends_secondary_user_id ON friends (secondary_user_id);

CREATE INDEX IF NOT EXISTS friends_friend_id ON friends (friend_id);
