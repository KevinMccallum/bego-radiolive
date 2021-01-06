import styled from 'styled-components'
import image from '../../assets/svg/Profile pic user.svg'

export const MenuContainer = styled.div`
  width: 313px;
  height: 24px;
  margin: 114px 245px 31px 31px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: Avenir;
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 26px;
  position: absolute;
  left: 162px;
  right: 162px;
  top: 50px;
  bottom: 712px;
`

export const BottomMenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 190px;
  width: 375px;

  img {
    padding-top: 30px;
  }

  .recurso-1 {
    height: 190px;
    width: 190px;
    background-image: repeating-radial-gradient(180deg, #494e53 10%, #313131 100%);
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 370px;
  margin-top: -28px;
  border: 1px solid black;
  background: url(${image});
  background-size: cover;
  background-color: rgb(10, 14, 18);
`
