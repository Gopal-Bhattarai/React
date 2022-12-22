import React from "react";
import { NavLink } from "react-router-dom";
import LISTS from './PageLists'
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const StyledDiv = styled.div`
  font-size: 14px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 20px 15px 0px 15px;
`;

const StyledCopyright = styled.p`
  font-size: 14px;
  color: #ddd;
  text-align: center;
  border-top: 1px solid #ddd;
`;

function Footer() {
  return (
    <>
    <FooterDiv className="footer">
      {LISTS.map(list=>(
        <NavLink key={list.name}
        className="link"
        to={list.path} >
        <StyledDiv>
          {list.title}
        </StyledDiv>
         </NavLink>
      ))}
    </FooterDiv>
      
      <StyledCopyright>
        &copy; copyright 2022 - My Corporation Ltd.
      </StyledCopyright>
    </>
  );
}

export default Footer;
