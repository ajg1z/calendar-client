import React from 'react'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { StyledEngineProvider } from '@mui/material/styles';
import {Container} from './index.styled'
import { Theme } from '../theme';
import { ThemeProvider } from 'styled-components';
export const Layout:React.FC<{children:React.ReactNode}> = (props) => {
  return (
    <Container>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={Theme}> 
           <Header/>
          {props.children}
            <Footer/>
            </ThemeProvider>
        </StyledEngineProvider>
    </Container>
  )
}
