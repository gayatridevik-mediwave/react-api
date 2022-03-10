import Nav from "./Nav";
import { useEffect } from "react";

const Page = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = `${props.title} | ${process.env.REACT_APP_NAME}`;
    }
  }, [props.title]);
  return (
    <div className="HomeContainer">
      <Nav />
      {props.children}
    </div>
  );
};

export default Page;
