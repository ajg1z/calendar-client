import React from 'react'
import {Container,Logo,Copyright} from './footer.styled'
 const Footer = () => {
  return (
    <Container>
        <Logo>itoday</Logo>
        <Copyright>Copyright@ {2022}-{new Date().getFullYear()}</Copyright>
    </Container>
  )
}
export default Footer;