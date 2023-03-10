// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.17.2
// source: sessionQuery.sql

package crud

import (
	"context"
)

const createSession = `-- name: CreateSession :one
INSERT INTO session_table (
  session_token, user_id
) VALUES (
  ?, ?
)
RETURNING session_token, user_id
`

type CreateSessionParams struct {
	SessionToken string
	UserID       int64
}

func (q *Queries) CreateSession(ctx context.Context, arg CreateSessionParams) (SessionTable, error) {
	row := q.db.QueryRowContext(ctx, createSession, arg.SessionToken, arg.UserID)
	var i SessionTable
	err := row.Scan(&i.SessionToken, &i.UserID)
	return i, err
}

const deleteSession = `-- name: DeleteSession :exec
DELETE FROM session_table
WHERE session_token = ?
`

func (q *Queries) DeleteSession(ctx context.Context, sessionToken string) error {
	_, err := q.db.ExecContext(ctx, deleteSession, sessionToken)
	return err
}

const getUserId = `-- name: GetUserId :one
SELECT session_token, user_id FROM session_table
WHERE session_token = ? LIMIT 1
`

func (q *Queries) GetUserId(ctx context.Context, sessionToken string) (SessionTable, error) {
	row := q.db.QueryRowContext(ctx, getUserId, sessionToken)
	var i SessionTable
	err := row.Scan(&i.SessionToken, &i.UserID)
	return i, err
}
