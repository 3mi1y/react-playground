import React from 'react'
import DATA from './DATA'
import './styles.css'

const Chats = ({chats}) => {
  const mappedChats = chats.map((chat) => {
    return (
      <div className='chatSection'>
        <h3>{chat.username}</h3>
        <p>{chat.chat}</p>
      </div>
    )
  })

  return (
    <div>
      {
        mappedChats
      }
    </div>
  )
}

const ChatterApp = () => {
  return (
    <div>
      <h1>Hello from Chatter App</h1>
      <Chats chats={DATA.chats} />
    </div>
  )
}

export default ChatterApp