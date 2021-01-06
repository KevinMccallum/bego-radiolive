import React from 'react'
import Menu from '../Menu/Menu'
import MainContent from '../MainContent/MainContent'
import {
  MenuContainer,
  Heading,
  BottomMenuContainer,
  HeaderContainer,
} from '../Header/Header.styled'
import image from '../../assets/svg/Profile pic user.svg'

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <MenuContainer>
          <Heading>Radio</Heading>
          <Menu />
        </MenuContainer>
        <BottomMenuContainer>
          <div className="recurso-1">
            <img src={image} alt="profile picture" />
          </div>
          <MainContent />
        </BottomMenuContainer>
      </HeaderContainer>
    </div>
  )
}

export default Header
