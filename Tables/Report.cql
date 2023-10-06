CREATE TABLE IF NOT EXISTS report (
    type int,
    reporter text,
    flags int,
    reported_id text,
    report_id text PRIMARY KEY,
    assigned_to text,
    status int,
    created_at timestamp,
    updated_at timestamp
)
