package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var EmptyBucketsTable = table.New(table.Metadata{
	Name:    "empty_buckets",
	Columns: []string{"channel_id", "buckets"},
	PartKey: []string{"channel_id"},
	SortKey: []string{},
})

type EmptyBucket struct {
	ChannelID string   `db:"channel_id"`
	Buckets   []string `db:"buckets"`
}
