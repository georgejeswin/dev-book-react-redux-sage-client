import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import { Post } from "../../interfaces/post";
import { ResponseGenerator } from "../../interfaces/Response";
import Api from "../../services/api";
import postsSlice from "../slices/posts.slice";

function* createPost(
  action: PayloadAction<{ title: string; description: string; image: any }>
) {
  const { title, description, image } = action.payload;
  try {
    const response: ResponseGenerator = yield Api.post.createPost({
      title,
      description,
      image,
    });
    if (response.status === 201) {
      toast.success("Successfully created new Post!");
      const response: ResponseGenerator = yield Api.post.getPosts();
      yield put(postsSlice.actions.setPosts(response.data));
    }
  } catch (error) {
    toast.error("Create Post failed");
    console.error("Create post error: " + error);
  }
}

function* getPosts(action: PayloadAction<Post[]>) {
  const response: ResponseGenerator = yield Api.post.getPosts();
  yield put(postsSlice.actions.setPosts(response.data));
}

function* postsSaga() {
  yield takeEvery(postsSlice.actions.createPost.type, createPost);
  yield takeEvery(postsSlice.actions.getAllPosts.type, getPosts);
}

export default postsSaga;
