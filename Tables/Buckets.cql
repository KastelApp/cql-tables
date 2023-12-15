CREATE TABLE IF NOT EXISTS empty_buckets (
    channel_id text,
    buckets list<text>,
    PRIMARY KEY (channel_id)
);
