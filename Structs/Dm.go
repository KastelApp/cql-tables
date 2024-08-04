package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var DmsTable = table.New(table.Metadata{
	Name:    "dms",
	Columns: []string{"recipients", "channel_id", "flags", "int_tbl_ver"},
	PartKey: []string{"channel_id"},
	SortKey: []string{},
})

type Dm struct {
	Recipients []DmRecipient `db:"recipients"`
	ChannelID  string        `db:"channel_id"`
	Flags      int           `db:"flags"`
	IntTblVer  int           `db:"int_tbl_ver"`
}

type DmRecipient struct {
	UserID string `cql:"user_id"`
	Flags  int    `cql:"flags"`
}
