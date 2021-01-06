import React from 'react'
import { ButtonsWrapper } from '../Buttons/Buttons.styled'
import { ReactComponent as Comment } from '../../assets/svg/Copia de chat.svg'
import { ReactComponent as LeftArrow } from '../../assets/svg/Copia de play-1.svg'
import { ReactComponent as RightArrow } from '../../assets/svg/Copia de play.svg'
import { ReactComponent as Pause } from '../../assets/svg/pause.svg'
import { ReactComponent as Like } from '../../assets/svg/heart.svg'
import { ReactComponent as Volume } from '../../assets/svg/Group.svg'

const Buttons = () => {
  return (
    <>
      <ButtonsWrapper>
        <Comment />
        <LeftArrow />
        <Pause />
        <RightArrow />
        <Like />
      </ButtonsWrapper>
      <div className="volume-bar">
        <Volume />
      </div>
    </>
  )
}

export default Buttons
