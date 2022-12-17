import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { FancyButton, SubmitButton } from './Styled/Button'
import StyledButton from './Styled/Button'
import { AnimatedLogo, DarkButton } from './Styled/Button.styles'
import GB from './img/GB.jpg'


const theme = {
    dark: {
        primary: '#000',
        text: '#fff',
    },
    light: {
        primary: '#fff',
        text: '#000',
    }
}

const GlobalStyle = createGlobalStyle`
    button {
        font-family: "Roboto";
    }
`

const Styled = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
    <div>
        {/* <AnimatedLogo src = {GB} /> */}
      <StyledButton type='submit'>Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as='a'>Fancy</FancyButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Outline</StyledButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit Button</SubmitButton>
      <div>
        <br />
      </div>
      <DarkButton>Dark Mode</DarkButton>
    </div>
    </ThemeProvider>
    
    
  )
}

export default Styled
