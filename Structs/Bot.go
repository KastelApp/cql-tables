package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var BotsTable = table.New(table.Metadata{
	Name:    "bots",
	Columns: []string{"user_id", "name", "description", "avatar", "summary", "owner_id"},
	PartKey: []string{"user_id"},
	SortKey: []string{},
})

type Bot struct {
	UserID      string `db:"user_id"`
	Name        string `db:"name"`
	Description string `db:"description"`
	Avatar      string `db:"avatar"`
	Summary     string `db:"summary"`
	OwnerID     string `db:"owner_id"`
}