CREATE TABLE IF NOT EXISTS bots (
    user_id text PRIMARY KEY,
    name text,
    description text,
    avatar text,
    summary text,
    owner_id text
)
WITH bloom_filter_fp_chance = 0.01
    AND caching = {'keys': 'ALL', 'rows_per_partition': 'NONE'}
    AND compaction = {'class': 'org.apache.cassandra.db.compaction.LeveledCompactionStrategy'}
    AND compression = {'sstable_compression': 'org.apache.cassandra.io.compress.LZ4Compressor'}
    AND crc_check_chance = 1.0
    AND dclocal_read_repair_chance = 0.1
    AND default_time_to_live = 0
    AND gc_grace_seconds = 86400
    AND memtable_flush_period_in_ms = 0
    AND speculative_retry = '99PERCENTILE';
