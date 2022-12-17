import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiCollapse} from 'react-icons/bi'

import LISTS from './PageLists'


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || 300}px;
  padding: 30px 10px;
  border-right: 1px solid #cccccc;
  transition: width 0.1s;
  min-height: 100vh;

  .link {
    text-decoration: none;
    padding: 15px 15px;
    border: none;
    outline: none;
    border-radius: 10px;
    margin: 15px 5px;
    // background-color: aqua;
    text-transform: uppercase;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    span {
      font-size: 24px;
      margin-left: 10px;
    }
    &:hover {
      text-decoration: none;
      background-color: blue;
      color: white;
    }
  }
  .active {
    text-decoration: none;
    background-color: navy;
    color: white;
  }
  .flexed {
    justify-content: space-between;
  }

  `;

const Sidebar = () => {
    const [expanded, setExpanded] = useState(true)

  return (
    <StyledDiv width={expanded ? 300 : 100}>
      <div className="link flexed" onClick={e=>setExpanded(!expanded)} >
        {expanded && <span>My App</span> }
        {expanded && <GiHamburgerMenu size={30} /> }
        {!expanded && <BiCollapse size={30} /> }
      </div>
        {LISTS.map(list => (
        <NavLink
        key={list.name} 
        className="link" to={list.path}>
        {list.icon}
        {expanded && <span>{list.title}</span> }
        </NavLink>
        ))}

    </StyledDiv>
  )
}

export default Sidebar
