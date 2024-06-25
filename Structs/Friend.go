package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var FriendsTable = table.New(table.Metadata{
	Name:    "friends",
	Columns: []string{"created_at", "friend_id", "primary_user_flags", "primary_user_id", "primary_user_nickname", "secondary_user_flags", "secondary_user_id", "secondary_user_nickname"},
	PartKey: []string{"friend_id", "primary_user_id", "secondary_user_id"},
	SortKey: []string{},
})

type Friends struct {
	CreatedAt            time.Time `db:"created_at"`
	FriendID             string `db:"friend_id"`
	PrimaryUserFlags     int `db:"primary_user_flags"`
	PrimaryUserID        string `db:"primary_user_id"`
	PrimaryUserNickname  *string `db:"primary_user_nickname"`
	SecondaryUserFlags   int `db:"secondary_user_flags"`
	SecondaryUserID      string `db:"secondary_user_id"`
	SecondaryUserNickname *string `db:"secondary_user_nickname"`
}
