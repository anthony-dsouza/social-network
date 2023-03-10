// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.17.2
// source: postCommentQuery.sql

package crud

import (
	"context"
	"time"
)

const createPostComment = `-- name: CreatePostComment :one
INSERT INTO post_comment (
  user_id, post_id, created_at, message_
) VALUES (
  ?, ?, ?, ?
)
RETURNING id, user_id, post_id, created_at, message_
`

type CreatePostCommentParams struct {
	UserID    int64
	PostID    int64
	CreatedAt time.Time
	Message   string
}

func (q *Queries) CreatePostComment(ctx context.Context, arg CreatePostCommentParams) (PostComment, error) {
	row := q.db.QueryRowContext(ctx, createPostComment,
		arg.UserID,
		arg.PostID,
		arg.CreatedAt,
		arg.Message,
	)
	var i PostComment
	err := row.Scan(
		&i.ID,
		&i.UserID,
		&i.PostID,
		&i.CreatedAt,
		&i.Message,
	)
	return i, err
}

const deletePostComment = `-- name: DeletePostComment :exec
DELETE FROM post_comment
WHERE user_id = ? AND post_id = ?
`

type DeletePostCommentParams struct {
	UserID int64
	PostID int64
}

func (q *Queries) DeletePostComment(ctx context.Context, arg DeletePostCommentParams) error {
	_, err := q.db.ExecContext(ctx, deletePostComment, arg.UserID, arg.PostID)
	return err
}

const getPostComments = `-- name: GetPostComments :many
SELECT id, user_id, post_id, created_at, message_ FROM post_comment
WHERE post_id = ?
ORDER BY created_at
`

func (q *Queries) GetPostComments(ctx context.Context, postID int64) ([]PostComment, error) {
	rows, err := q.db.QueryContext(ctx, getPostComments, postID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []PostComment
	for rows.Next() {
		var i PostComment
		if err := rows.Scan(
			&i.ID,
			&i.UserID,
			&i.PostID,
			&i.CreatedAt,
			&i.Message,
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
