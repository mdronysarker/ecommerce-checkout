import React, { useContext } from "react";
import { NavLink, redirect } from "react-router-dom";

const ListItem = ({ itemname, className, href, click = false }) => {
  return (
    <li className={className}>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : "font-regular")}
        to={href}
      >
        {itemname}
      </NavLink>
    </li>
  );
};

export default ListItem;
