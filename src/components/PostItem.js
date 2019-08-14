import React from 'react';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">

        <div className="post-header">
        <img className="avatar" src={author.avatar} />
        <div className="info">
            <span>{author.username}</span>
            <span>{date}</span>
        </div>
        </div>

        <p className="post-content">{content}</p>

        <div className="post-comments">
        <div className="divider" />
        {comments.map(comment => (
            <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar} />
            <p>
                <span>{comment.author.username}</span>
                {comment.content}
            </p>
            </div>
        ))}
        </div>

    </div>
  );
}

export default PostItem;