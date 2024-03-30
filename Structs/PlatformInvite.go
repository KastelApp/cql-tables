package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var PlatformInvitesTable = table.New(table.Metadata{
	Name:    "platform_invite",
	Columns: []string{"code", "creator_id", "expires_at", "used_by_id", "used_at"},
	PartKey: []string{"code"},
	SortKey: []string{},
})

type PlatformInvite struct {
	Code      string     `db:"code"`
	CreatorID string     `db:"creator_id"`
	ExpiresAt time.Time  `db:"expires_at"`
	UsedByID  *string    `db:"used_by_id"`
	UsedAt    *time.Time `db:"used_at"`
}
