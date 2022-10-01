import { Post } from "../../interfaces/post";
import dayjs from "dayjs";

interface IPostProps {
  content: Post;
}

const FeedCard = ({ content }: IPostProps) => {
  const createdDate = dayjs(content?.created_at).format(
    "dddd, MMMM D, YYYY h:mm A"
  );
  return (
    <div className="round-lg flex flex-col shadow-lbutton_shadow dark:shadow-button_shadow p-5 rounded-lg mb-5 w-full">
      <div className="gap-3 flex items-center mb-2">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwinaero.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F08%2FWindows-10-user-icon-big.png&f=1&nofb=1&ipt=7e7b8390d79cf4917309e90250df12505ee0cd097c818d8c579744a64f99cc62&ipo=images"
          alt=""
          width={40}
          className="rounded-full"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-dtext_color text-sm">{content.user?.username}</p>
          <span className="text-dtext_color text-xs">{createdDate}</span>
        </div>
      </div>
      <div className="flex flex-col w-full flex-auto">
        <img
          src={content?.image}
          alt="Feed"
          className="rounded-lg w-full max-w-xl"
        />
        <p className="text-dtext_color mt-5">{content.description}</p>
      </div>
    </div>
  );
};

export default FeedCard;
