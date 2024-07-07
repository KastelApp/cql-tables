package structs

import (
	"github.com/scylladb/gocqlx/v2"
	"github.com/scylladb/gocqlx/v2/table"
)

var DmsTable = table.New(table.Metadata{
	Name:    "dms",
	Columns: []string{"recipients", "channel_id", "flags"},
	PartKey: []string{"channel_id"},
	SortKey: []string{},
})

type Dm struct {
	Recipients []DmRecipient `db:"recipients"`
	ChannelID  string        `db:"channel_id"`
	Flags      int           `db:"flags"`
}

type DmRecipient struct {
	gocqlx.UDT
	UserID string `db:"user_id"`
	Flags  int    `db:"flags"`
}
