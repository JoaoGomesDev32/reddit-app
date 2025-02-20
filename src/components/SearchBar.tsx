import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import { AppDispatch } from "../store";
import "./SearchBar.scss";

const SearchBar: React.FC = () => {
  const [subreddit, setSubreddit] = useState("popular");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (subreddit.trim()) {
      dispatch(fetchPosts(subreddit));
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        placeholder="Digite um subreddit..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
