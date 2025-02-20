import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Comment {
  id: string;
  author: string;
  body: string;
}

interface CommentsState {
  comments: Comment[];
  status: "idle" | "loading" | "failed";
}

const initialState: CommentsState = {
  comments: [],
  status: "idle",
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId: string) => {
    const response = await axios.get(`https://www.reddit.com/comments/${postId}.json`);
    return response.data[1].data.children.map((comment: { data: Comment }) => comment.data);
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "idle";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default commentsSlice.reducer;
