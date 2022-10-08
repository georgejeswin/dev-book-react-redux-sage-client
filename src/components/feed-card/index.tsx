import { Post } from "../../interfaces/post";
import dayjs from "dayjs";
import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../../utils/bigHeads";

interface IPostProps {
  content: Post;
}

const FeedCard = ({ content }: IPostProps) => {
  const createdDate = dayjs(content?.created_at).format(
    "dddd, MMMM D, YYYY h:mm A"
  );
  return (
    <div className="round-lg flex flex-col shadow-lbutton_shadow dark:shadow-button_shadow p-5 rounded-lg mb-5 w-full">
      <div className="flex mb-2">
        <div className="w-[50px]">
          <BigHead {...getRandomOptions()} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-dtext_color text-sm">{content.user?.username}</p>
          <span className="text-dtext_color text-xs">{createdDate}</span>
        </div>
      </div>
      <div className="flex flex-col w-full flex-auto">
        <img src={content?.image} alt="Feed" className="rounded-lg w-full" />
        <p className="text-dtext_color mt-5 w-full">{content.description}</p>
      </div>
    </div>
  );
};

export default FeedCard;
