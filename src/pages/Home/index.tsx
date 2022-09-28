import { useEffect } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/create-post-card";
import FeedCard from "../../components/feed-card";
import UsersCard from "../../components/users-card";
import { RootState } from "../../redux/store/rootReducer";

const Home = () => {
  const user = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    console.log("user", user.user);
  }, [user]);
  return (
    <div className="h-auto flex justify-start  gap-4 w-[100%] p-5 xs:flex-col-reverse sm:flex-wrap">
      <div className="flex-1 xs:mt-5">
        <h1 className="text-indigo-500 font-bold mb-5">Our Active Users</h1>
        <div className="flex flex-col overflow-y-scroll h-[80vh]">
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
          <UsersCard />
        </div>
      </div>
      <div className="min-w-2/5 xs:mt-5">
        <h1 className="text-indigo-500 font-bold mb-5">Feed</h1>
        <div className="flex flex-col overflow-y-scroll h-[80vh]">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
      </div>
      <div>
        <CreatePost />
      </div>
    </div>
  );
};

export default Home;
