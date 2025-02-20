import React, { useState } from "react";
import Comments from "./Comments";
import "./Post.scss";

interface PostProps {
  id: string;
  title: string;
  author: string;
  subreddit: string;
  url: string;
  ups: number;
  num_comments: number;
}

const Post: React.FC<PostProps> = ({ id, title, author, subreddit, url, ups, num_comments }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>
        <strong>Subreddit:</strong> {subreddit} | <strong>Autor:</strong> {author}
      </p>
      <p>👍 {ups} | 💬 {num_comments}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Ver no Reddit
      </a>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? "Ocultar Comentários" : "Mostrar Comentários"}
      </button>
      {showComments && <Comments postId={id} />}
    </div>
  );
};

export default Post;