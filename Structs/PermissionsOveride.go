package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var PermissionsOveridesTable = table.New(table.Metadata{
	Name:    "permissions_overides",
	Columns: []string{"permission_id", "id", "allow_", "deny", "type", "editable", "slowmode"},
	PartKey: []string{"permission_id"},
	SortKey: []string{},
})

type PermissionsOveride struct {
	PermissionID string `db:"permission_id"`
	ID           string `db:"id"`
	Allow        []BigintPair `db:"allow_"`
	Deny         []BigintPair `db:"deny"`
	Type         int `db:"type"`
	Editable     bool `db:"editable"`
	Slowmode     int `db:"slowmode"`
}