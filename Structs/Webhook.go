package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var WebhooksTable = table.New(table.Metadata{
	Name:    "webhooks",
	Columns: []string{"webhook_id", "guild_id", "channel_id", "username", "token_", "allowed_mentions"},
	PartKey: []string{"guild_id", "webhook_id"},
	SortKey: []string{},
})

type Webhook struct {
	WebhookID       string `db:"webhook_id"`
	GuildID         string `db:"guild_id"`
	ChannelID       string `db:"channel_id"`
	Username        string `db:"username"`
	Token           string `db:"token_"`
	AllowedMentions int    `db:"allowed_mentions"`
}
