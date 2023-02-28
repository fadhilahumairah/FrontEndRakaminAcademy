import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  let menumask;

  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow ">
        The menu
      </div>
    );

    menumask = (
      <div
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={() => setShowMenu(!showMenu)}
      ></div>
    );
  }

  return (
    <nav className="">
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menumask}
      {menu}
    </nav>
  );
}

export default Navigation;
