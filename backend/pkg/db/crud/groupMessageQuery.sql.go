// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.17.2
// source: groupMessageQuery.sql

package crud

import (
	"context"
	"time"
)

const createGroupMessage = `-- name: CreateGroupMessage :one
INSERT INTO group_message (
  source_id, group_id, message_, created_at
) VALUES (
  ?, ?, ?, ?
)
RETURNING id, source_id, group_id, message_, created_at
`

type CreateGroupMessageParams struct {
	SourceID  int64
	GroupID   int64
	Message   string
	CreatedAt time.Time
}

func (q *Queries) CreateGroupMessage(ctx context.Context, arg CreateGroupMessageParams) (GroupMessage, error) {
	row := q.db.QueryRowContext(ctx, createGroupMessage,
		arg.SourceID,
		arg.GroupID,
		arg.Message,
		arg.CreatedAt,
	)
	var i GroupMessage
	err := row.Scan(
		&i.ID,
		&i.SourceID,
		&i.GroupID,
		&i.Message,
		&i.CreatedAt,
	)
	return i, err
}

const deleteGroupMessage = `-- name: DeleteGroupMessage :exec
DELETE FROM group_message
WHERE group_id = ? AND source_id = ? AND id = ?
`

type DeleteGroupMessageParams struct {
	GroupID  int64
	SourceID int64
	ID       int64
}

func (q *Queries) DeleteGroupMessage(ctx context.Context, arg DeleteGroupMessageParams) error {
	_, err := q.db.ExecContext(ctx, deleteGroupMessage, arg.GroupID, arg.SourceID, arg.ID)
	return err
}

const getGroupMemberMessages = `-- name: GetGroupMemberMessages :many
SELECT id, source_id, group_id, message_, created_at FROM group_message
WHERE group_id = ? AND source_id = ?
ORDER BY created_at
`

type GetGroupMemberMessagesParams struct {
	GroupID  int64
	SourceID int64
}

func (q *Queries) GetGroupMemberMessages(ctx context.Context, arg GetGroupMemberMessagesParams) ([]GroupMessage, error) {
	rows, err := q.db.QueryContext(ctx, getGroupMemberMessages, arg.GroupID, arg.SourceID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GroupMessage
	for rows.Next() {
		var i GroupMessage
		if err := rows.Scan(
			&i.ID,
			&i.SourceID,
			&i.GroupID,
			&i.Message,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getGroupMessages = `-- name: GetGroupMessages :many
SELECT id, source_id, group_id, message_, created_at FROM group_message
WHERE group_id = ?
ORDER BY created_at
`

func (q *Queries) GetGroupMessages(ctx context.Context, groupID int64) ([]GroupMessage, error) {
	rows, err := q.db.QueryContext(ctx, getGroupMessages, groupID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []GroupMessage
	for rows.Next() {
		var i GroupMessage
		if err := rows.Scan(
			&i.ID,
			&i.SourceID,
			&i.GroupID,
			&i.Message,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}