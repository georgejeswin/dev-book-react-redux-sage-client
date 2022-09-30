import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../interfaces/post";

type InitialState = {
  posts: Post[] | [];
};

export const initialPostsState: InitialState = {
  posts: [],
};

export const createPost = (
  state: InitialState,
  action: PayloadAction<{
    title: string;
    description: string;
    image: string;
  }>
) => state;

export const getAllPosts = (state: InitialState) => state;

export const setPosts = (
  state: InitialState,
  action: PayloadAction<Post[]>
) => {
  state.posts = action.payload;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    createPost,
    getAllPosts,
    setPosts,
  },
});

export default postsSlice;
