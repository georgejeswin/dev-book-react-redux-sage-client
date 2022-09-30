import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../components/create-post-card";
import FeedCard from "../../components/feed-card";
import UsersCard from "../../components/users-card";
import postsSlice from "../../redux/slices/posts.slice";
import usersSlice from "../../redux/slices/users.slice";
import { RootState } from "../../redux/store/rootReducer";

const Home = () => {
  // const user = useSelector((state: RootState) => state.auth);
  const posts = useSelector((state: RootState) => state.posts.posts);
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsSlice.actions.getAllPosts());
    dispatch(usersSlice.actions.getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="h-auto flex justify-start  gap-4 w-[100%] p-5 xs:flex-col-reverse sm:flex-wrap">
      <div className="flex-1 xs:mt-5">
        <h1 className="text-indigo-500 font-bold mb-5">Our Active Users</h1>
        <div className="flex flex-col overflow-y-scroll h-[80vh]">
          {users.map((user) => (
            <UsersCard key={user.id} content={user} />
          ))}
        </div>
      </div>
      <div className="min-w-2/5 xs:mt-5">
        <h1 className="text-indigo-500 font-bold mb-5">Feed</h1>
        <div className="flex flex-col overflow-y-scroll h-[80vh]">
          {posts.map((post) => (
            <FeedCard key={post.id} content={post} />
          ))}
        </div>
      </div>
      <div>
        <CreatePost />
      </div>
    </div>
  );
};

export default Home;
