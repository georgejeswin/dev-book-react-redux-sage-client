interface IUserProps {
  content: {
    username: string;
  };
}
const UsersCard = ({ content }: IUserProps) => {
  return (
    <div className="flex gap-3 shadow-lbutton_shadow dark:shadow-button_shadow p-3 rounded-lg m-4 min-w-[200px]">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwinaero.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F08%2FWindows-10-user-icon-big.png&f=1&nofb=1&ipt=7e7b8390d79cf4917309e90250df12505ee0cd097c818d8c579744a64f99cc62&ipo=images"
        alt=""
        width={30}
        height={30}
        className="rounded-full"
      />
      <p className="dark:text-dtext_color">{content.username}</p>
    </div>
  );
};

export default UsersCard;
