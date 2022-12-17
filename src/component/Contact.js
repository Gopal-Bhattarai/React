import React from 'react'
import styled from 'styled-components'

const Contact = () => {
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
        text-align: left;
        // text-decoration: underline;
        font-variant-caps: small-caps;
        width: 100%;
        border-bottom: 2px solid black;
    `;

  return (
    <StyledDiv>
      <StyledContact>Contact Me</StyledContact>
      <span>bhattarai_g@hotmail.com</span>
      <span>9843-891333</span>
      <span>9803-996555</span>
    </StyledDiv>
  )
}

export default Contact
