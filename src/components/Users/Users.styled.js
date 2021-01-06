import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 32px;
`

export const UserWrapper = styled.div`
  flex: 0 0 32%;
  height: 115px;
  margin: 5px 2px 15px 2px;
  opacity: 0.7;
  border-radius: 8px;
  background-color: #10161c;
  box-shadow: inset -2px -2px 4px 0 #040b11, inset 2px 2px 4px 0 #1c232a, 0 13px 9px 0 #000000;

  .user-image {
    margin-top: -10px;
  }

  .user-name {
    height: 15px;
    font-family: Avenir-heavy;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 16px;
    margin-top: 4px;
    margin-bottom: 15px;
  }

  .user-mic {
    margin-top: 15px;
  }
`
