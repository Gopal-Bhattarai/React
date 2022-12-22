import React from 'react'
import LISTS from './PageLists'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

const StyledDiv = styled.div`
font-size: 18px;
display: flex;
align-items: center;
justify-content: right;
margin: 5px 30px;
padding: 10px;
border-bottom: 1px solid #ddd;
.link {
  //border: 1px solid #ddd;
  background-color  : white;
  padding: 5px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition-duration: 0.2s;
}
.link:hover{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
span{
  margin-left: 10px;
}
`;

const Header = () => {
  return (
    <>
    <StyledDiv>
        {LISTS.map(list => (
        <NavLink
        key={list.name} 
        className="link" to={list.path}
        >
        <Tippy content={list.toolTip}>
          {/* {list.icon} */}
          <span id={list.name}>{list.icon}</span>
        </Tippy>
        </NavLink>
        ))}
    </StyledDiv>
    </>
  )
}

export default Header
