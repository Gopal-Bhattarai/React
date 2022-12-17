import React from "react";
import { NavLink } from "react-router-dom";
import LISTS from './PageLists'

function Footer() {
  return (
    <div className="footer">
      {LISTS.map(list=>(
        <NavLink key={list.name}
        className="link"
        to={list.path} >
        {list.icon}
         </NavLink>
      ))}
      <hr />&copy; copyright 2022 - My Corporation Ltd.
    </div>
  );
}

export default Footer;
