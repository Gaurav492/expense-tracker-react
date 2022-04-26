import React from "react";
import { MdHome, MdHistory, MdPreview, MdLogout } from "react-icons/md";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Sidebar() {
  return (
    <div className="bg-dark-main md:grow[2] px-3 py-14 flex flex-col justify-between">
      <ul className="">
        <Tippy content="Home" placement="right">
          <li
            data-tip="hello world"
            className="p-3 cursor-pointer text-2xl bg-dark-secondary rounded-xl text-primary-orange transition-all hover:bg-primary-orange hover:text-dark-secondary"
          >
            <MdHome />
          </li>
        </Tippy>
        <Tippy content="History" placement="right">
          <li className="p-3 cursor-pointer mt-4 text-2xl bg-dark-secondary rounded-xl text-primary-orange transition-all hover:bg-primary-orange hover:text-dark-secondary">
            <MdHistory />
          </li>
        </Tippy>
        <Tippy content="Review" placement="right">
          <li className="p-3 cursor-pointer mt-4 4 text-2xl bg-dark-secondary rounded-xl text-primary-orange transition-all hover:bg-primary-orange hover:text-dark-secondary">
            <MdPreview />
          </li>
        </Tippy>
      </ul>
      <Tippy content="Logput" placement="right">
        <div className="p-3 cursor-pointer mt-4 4 text-2xl bg-dark-secondary rounded-xl text-primary-orange transition-all hover:bg-primary-orange hover:text-dark-secondary">
          <MdLogout />
        </div>
      </Tippy>
    </div>
  );
}

export default Sidebar;
