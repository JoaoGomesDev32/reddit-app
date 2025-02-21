import React from "react";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const subreddits = ["popular", "gaming", "movies", "news", "sports", "technology"];

  return (
    <aside className="sidebar">
      <h3>Subreddits Populares</h3>
      <ul>
        {subreddits.map((sub) => (
          <li key={sub}>
            <a href={`/r/${sub}`}>r/{sub}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
