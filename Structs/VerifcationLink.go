package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var VerifcationLinksTable = table.New(table.Metadata{
	Name:    "verifcationlinks",
	Columns: []string{"code", "id", "user_id", "created_date", "expire_date", "ip", "flags", "int_tbl_ver"},
	PartKey: []string{"code", "id"},
	SortKey: []string{"user_id"},
})

type VerifcationLink struct {
	Code        string    `db:"code"`
	ID          string    `db:"id"`
	UserID      string    `db:"user_id"`
	CreatedDate time.Time `db:"created_date"`
	ExpireDate  time.Time `db:"expire_date"`
	IP          string    `db:"ip"`
	Flags       int       `db:"flags"`
}
