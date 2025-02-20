import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Post {
  id: string;
  title: string;
  author: string;
  subreddit: string;
  url: string;
  ups: number;
  num_comments: number;
}

interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "failed";
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
};

// Thunk para buscar posts do Reddit
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit: string) => {
    const response = await axios.get(
      `https://www.reddit.com/r/${subreddit}.json`
    );
    return response.data.data.children.map((post: { data: Post }) => post.data);
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default postsSlice.reducer;
