import React from "react";
import "./Post.scss";

interface PostProps {
  title: string;
  author: string;
  subreddit: string;
  url: string;
  ups: number;
  num_comments: number;
}

const Post: React.FC<PostProps> = ({ title, author, subreddit, url, ups, num_comments }) => {
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
    </div>
  );
};

export default Post;
