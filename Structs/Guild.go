package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var GuildsTable = table.New(table.Metadata{
	Name:    "guilds",
	Columns: []string{"guild_id", "icon", "name", "description", "flags", "owner_id", "co_owners", "max_members", "features", "int_tbl_ver"},
	PartKey: []string{"guild_id"},
	SortKey: []string{},
})

type Guild struct {
	GuildID     string   `db:"guild_id"`
	Icon        *string  `db:"icon"`
	Name        string   `db:"name"`
	Description *string  `db:"description"`
	Flags       int      `db:"flags"`
	OwnerID     string   `db:"owner_id"`
	CoOwners    []string `db:"co_owners"`
	MaxMembers  int      `db:"max_members"`
	Features    []string `db:"features"`
	IntTblVer   int      `db:"int_tbl_ver"`
}
