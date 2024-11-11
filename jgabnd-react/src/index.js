import React from "react";
import ReactDOM from "react-dom/client";

function DisplayNavMenu(props) {
  return <li>{props.navLinks}</li>;
}
function NavMenu() {
  const menuItems = ["Home", "About", "Contact"];
  return (
    <>
      <h1>My navigation menu</h1>
      <ul>
        {menuItems.map((item) => (
          <DisplayNavMenu navLinks={item} />
        ))}
      </ul>
    </>
  );
}
const container = document.querySelector("#navRoot");
const root = ReactDOM.createRoot(container);
root.render(<NavMenu />);
