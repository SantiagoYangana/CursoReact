import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMchein',
    name: 'Tomas',
    isFollowing: false
  }
]
export function App () {
  return (
    <section className='App'>
      {/* <TwitterFollowCard isFollowing username="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard isFollowing={false} username="pheralb" name="Pablo Hernandez" />
            <TwitterFollowCard isFollowing username="elonmusk" name="Elon Musk" />
            <TwitterFollowCard isFollowing username="vxnder" name="Vander Hart" /> */}
      {/* <TwitterFollowCard initialIsFollowing={true} username="midudev">Miguel Angel Duran</TwitterFollowCard>
            <TwitterFollowCard username="pheralb">Pablo Hernandez</TwitterFollowCard> */}
      {users.map(user => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            key={userName}
            username={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
