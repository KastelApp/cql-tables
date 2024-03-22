package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var UsersTable = table.New(table.Metadata{
	Name:    "users",
	Columns: []string{"user_id", "email", "username", "tag", "avatar", "password", "phone_number", "two_fa_secret", "ips", "public_flags", "flags", "guilds", "global_nickname"},
	PartKey: []string{"user_id"},
	SortKey: []string{},
})

type User struct {
	UserID         string   `db:"user_id"`
	Email          string   `db:"email"`
	Username       string   `db:"username"`
	Tag            string   `db:"tag"`
	Avatar         string   `db:"avatar"`
	Password       string   `db:"password"`
	PhoneNumber    string   `db:"phone_number"`
	TwoFaSecret    string   `db:"two_fa_secret"`
	IPs            []string `db:"ips"`
	PublicFlags    string   `db:"public_flags"`
	Flags          string   `db:"flags"`
	Guilds         []string `db:"guilds"`
	GlobalNickname string   `db:"global_nickname"`
}