import React from 'react'
import frequency from '../../assets/svg/Group 3.svg'
import activeLine from '../../assets/svg/Line.svg'
import { Wrapper } from '../Radio/Radio.styled'

const Radio = () => {
  return (
    <Wrapper>
      <img src={activeLine} alt="active-line" className="activeLine" />
      <img src={frequency} alt="frequency" />
      <p className="wrapper-numbers">
        <span className="numbers">68</span> <span className="numbers active">89</span>
        <span className="numbers">90</span> <span className="numbers">92</span>
        <span className="numbers">93</span> <span className="numbers">99</span>
        <span className="numbers">95</span> <span className="numbers">61</span>
        <span className="numbers">75</span>
      </p>
    </Wrapper>
  )
}

export default Radio
