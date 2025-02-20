import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import { RootState, AppDispatch } from "../store";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, status } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts("popular"));
  }, [dispatch]);

  return (
    <div>
      <h1>Reddit App</h1>
      <SearchBar />
      {status === "loading" && <p>Carregando...</p>}
      {status === "failed" && <p>Erro ao carregar posts.</p>}
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;
