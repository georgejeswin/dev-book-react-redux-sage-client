import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../../utils/bigHeads";
import CalendlyWidget from "../calendly";
interface IUserProps {
  content: {
    username: string;
  };
}
const UsersCard = ({ content }: IUserProps) => {
  return (
    <div className="flex items-center justify-between gap-3 shadow-lbutton_shadow dark:shadow-button_shadow p-3 rounded-lg m-4 min-w-[200px]">
      <div className="flex items-center justify-center">
        <div className="w-[40px]">
          <BigHead {...getRandomOptions()} />
        </div>
        <p className="dark:text-dtext_color">{content.username}</p>
      </div>
      <div>
        <CalendlyWidget url="https://calendly.com/jeswing-dev/30min" />
      </div>
    </div>
  );
};

export default UsersCard;
