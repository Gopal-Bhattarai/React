import React from 'react'
import LISTS from './PageLists'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const StyledDiv = styled.div`
font-size: 20px;
display: flex;
justify-content: space-between;
margin: 5px 30px;
padding: 10px;
border-bottom: 1px solid #ddd;
`;

const Header = () => {
  return (
    <StyledDiv>
        {LISTS.map(list => (
        <NavLink
        key={list.name} 
        className="link" to={list.path}>
        {list.icon}
        <span>{list.title}</span>
        </NavLink>
        ))}
    </StyledDiv>
  )
}

export default Header
