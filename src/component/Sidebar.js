import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineCar,AiOutlineOrderedList} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'
import {FcAbout, FcContacts} from 'react-icons/fc'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiCollapse} from 'react-icons/bi'

// import BillingList from './BillingList'
// import CarsList from './CarsList'


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || 280}px;
  padding: 30px 10px;
  border-right: 1px solid #cccccc;
  transition: width 0.1s;

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
      font-size: 24;
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
  .end-flexed {
    justify-content: space-between;
  }

  `;

const Sidebar = () => {
    const LISTS = [{
        name: 'carslist',
        title: 'Cars List',
        // component: (key) => <CarsList key={key} />,
        path: '/cars',
        icon: <AiOutlineCar  size={30} />
      },
      {
        name: 'bilinglist',
        title: 'Billing List',
        // component: (key) => <BillingList key={key} />,
        path: '/billing',
        icon: <RiBillLine  size={30} />
      },
      {
        name: 'todolist',
        title: 'Todo List',
        // component: (key) => <h2 key={key}>Not yet created</h2>,
        path: '/cars/tesla',
        icon: <AiOutlineOrderedList  size={30} />
      },
      {
        name: 'about',
        title: 'About',
        // component: (key) => <h2 key={key}>About Me Page</h2>,
        path: '/about',
        icon: <FcAbout  size={30} />
      },
      {
        name: 'contact',
        title: 'Contact Us',
        // component: (key) => <h2 key={key}>Contact us</h2>,
        path: '/contact',
        icon: <FcContacts  size={30} />
      },
    ]

    const [expanded, setExpanded] = useState(true)

  return (
    <StyledDiv width={expanded ? 280 : 70}>
      <div className="link end-flexed">
        {expanded && <span>My App</span> }
        {expanded && <GiHamburgerMenu size={30} onClick={e=>setExpanded(!expanded)} /> }
        {!expanded && <BiCollapse size={30} onClick={e=>setExpanded(!expanded)} /> }
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
