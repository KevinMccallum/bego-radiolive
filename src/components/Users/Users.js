import React from 'react'
import { ReactComponent as MicOn } from '../../assets/svg/microphone.svg'
import { ReactComponent as MicOff } from '../../assets/svg/Shape-1.svg'
import { UserContainer, UserWrapper } from '../Users/Users.styled'

const Users = ({ users }) => {
  return (
    <UserContainer>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </UserContainer>
  )
}

const UserCard = ({ user }) => (
  <UserWrapper>
    <span className="user-image">{user.img}</span>
    <p
      className="user-name"
      style={user.name === 'Arnold G' ? { color: '#FFBE00 ' } : { color: '#c1c7d0 ' }}
    >
      {user.name}
    </p>
    <span className="user-mic">{user.mic === 'on' ? <MicOn /> : <MicOff />}</span>
  </UserWrapper>
)

export default Users
