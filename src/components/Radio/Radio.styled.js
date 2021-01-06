import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #0d1319;
  margin-top: -25px;
  opacity: 0.9;
  width: 375px;
  height: 74px;

  .wrapper-numbers {
    display: flex;
    justify-content: center;
  }
  .numbers {
    height: 13px;
    color: #c1c7d0;
    font-family: Avenir;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 14px;
    margin: 0px 13px;
  }

  .active {
    color: #ffbe00;
  }

  .activeLine {
    position: relative;
    left: 32px;
  }
`
