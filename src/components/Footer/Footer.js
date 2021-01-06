import React from 'react'
import footer from '../../assets/img/indicator.png'
import { FooterWrapper } from '../Footer/Footer.styled'

const Footer = () => {
  return (
    <FooterWrapper>
      <img src={footer} alt="footer" />
    </FooterWrapper>
  )
}

export default Footer
