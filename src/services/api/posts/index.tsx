import { Post } from "../../../interfaces/post";
import { ResponseGenerator } from "../../../interfaces/Response";
import request from "../../request";

function* createPost(params: Post) {
  const response: ResponseGenerator = yield request.post(
    `${process.env.REACT_APP_ENTRYPOINT}posts/create`,
    params
  );
  return response;
}

function* getPosts() {
  const response: ResponseGenerator = yield request.get(
    `${process.env.REACT_APP_ENTRYPOINT}posts`
  );
  return response;
}
const post = {
  createPost,
  getPosts,
};

export default post;
