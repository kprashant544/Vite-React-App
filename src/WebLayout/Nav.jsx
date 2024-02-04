/* eslint-disable react/prop-types */
import { useState } from "react";
import "../WebLayout/nav.css";
import Home from "../Contents/Home";
import About from "../Contents/About";
import Contact from "../Contents/Contact";

function Nav(props) {
  const [content, setContent] = useState(<Home />);

  function changeAll(contentType) {
    switch (contentType) {
      case "Home":
        setContent(<Home />);
        break;
      case "About":
        setContent(<About />);
        break;
      case "Contact":
        setContent(<Contact />);
        break;
    }
  }
  return (
    <>
      <div>
        <div className="head">
          <nav>
            <ul>
              <li>
                {" "}
                <img
                  src="./logo.png"
                  style={{ height: "50px", width: "50px" }}
                />
                <a onClick={() => changeAll("Home")}>{props.meet.home_name}</a>
                <a onClick={() => changeAll("About")}>
                  {props.meet.about_name}
                </a>
                <a onClick={() => changeAll("Contact")}>
                  {props.meet.contact_name}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {content}
      </div>
    </>
  );
}

export default Nav;
