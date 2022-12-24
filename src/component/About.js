import React from 'react'
import styled from 'styled-components'
import GB from './img/GB.jpg'

const StyledDiv = styled.div`
        display: flex;
        flex-direction: column;
        font-size: 30px;
        align-items: center;
        margin: 50px auto;
        min-width: 500px;
        padding: 20px 30px;
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 0 0 10px 2px gray;
    `;

    const StyledContact = styled.p`
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        // text-decoration: underline;
        font-variant-caps: small-caps;
        width: 100%;
        border-bottom: 2px solid black;
    `;

    const StyledImg = styled.img`
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 0 5px 1px gray;
        padding: 5px;
        width: 450px;
    `;

const About = () => {
  return (
    <StyledDiv className='container my-4  '>
        <StyledImg src={GB} />
        <StyledContact>About Me</StyledContact>
      <span>bhattarai_g@hotmail.com</span>
      <span>9843-891333</span>
      <span>9803-996555</span>
    </StyledDiv>
  )
}

export default About
