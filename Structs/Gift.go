package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var GiftsTable = table.New(table.Metadata{
	Name:    "gifts",
	Columns: []string{"gift_id", "user_id", "type", "max_age", "gift_length", "used_by", "int_tbl_ver"},
	PartKey: []string{"gift_id"},
	SortKey: []string{},
})

type Gift struct {
	GiftID     string    `db:"gift_id"`
	UserID     string    `db:"user_id"`
	Type       int       `db:"type"`
	MaxAge     time.Time `db:"max_age"`
	GiftLength time.Time `db:"gift_length"`
	UsedBy     string    `db:"used_by"`
	IntTblVer  int       `db:"int_tbl_ver"`
}
