import { PopupButton } from "react-calendly";

interface ICalendlyWidgetProps {
  url: string;
}

const CalendlyWidget = ({ url }: ICalendlyWidgetProps) => {
  return (
    <PopupButton
      url={url}
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
       */
      rootElement={document.getElementById("root")!}
      text="Connect"
      styles={{ fontWeight: "bold" }}
      className="text-indigo-500"
    />
  );
};

export default CalendlyWidget;
