CREATE TABLE IF NOT EXISTS channels (
    channel_id text,
    guild_id text,
    name text,
    description text,
    type int,
    age_restricted boolean,
    allowed_mentions int,
    parent_id text,
    children list<text>,
    position int,
    permission_overrides list<text>,
    slowmode int,
    PRIMARY KEY (guild_id, channel_id)
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

CREATE INDEX IF NOT EXISTS channel_id_channels ON channels (channel_id);
