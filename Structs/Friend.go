package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
	"github.com/scylladb/gocqlx/v2"
)

var FriendsTable = table.New(table.Metadata{
	Name:    "friends",
	Columns: []string{"friend_id", "interactions"},
	PartKey: []string{"friend_id"},
	SortKey: []string{},
})

type Friend struct {
	FriendID      string `db:"friend_id"`
	Interactions  []FriendInteraction `db:"interactions"`
}

type FriendInteraction struct {
	gocqlx.UDT
	UserID         string `db:"user_id"`
	TargetID       string `db:"target_id"`
	TargetNickname string `db:"target_nickname"`
	Flags          int    `db:"flags"`
}