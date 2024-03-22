package structs

import (
	"github.com/scylladb/gocqlx/v2"
	"github.com/scylladb/gocqlx/v2/table"
)

var RolesTable = table.New(table.Metadata{
	Name:    "roles",
	Columns: []string{"role_id", "guild_id", "name", "allowed_age_restricted", "deleteable", "mentionable", "hoisted", "color", "permissions", "position"},
	PartKey: []string{"guild_id", "role_id"},
	SortKey: []string{},
})

type Role struct {
	RoleID               string       `db:"role_id"`
	GuildID              string       `db:"guild_id"`
	Name                 string       `db:"name"`
	AllowedAgeRestricted bool         `db:"allowed_age_restricted"`
	Deleteable           bool         `db:"deleteable"`
	Mentionable          bool         `db:"mentionable"`
	Hoisted              bool         `db:"hoisted"`
	Color                int          `db:"color"`
	Permissions          []BigintPair `db:"permissions"`
	Position             int          `db:"position"`
}

type BigintPair struct {
	gocqlx.UDT
	First  int64 `db:"first"`
	Second int64 `db:"second"`
}
