import { useState } from 'react'

export function TwitterFollowCard ({ children, username, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const imgSource = `https://unavatar.io/${username}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-follow-card-btn is-following'
    : 'tw-follow-card-btn'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className='tw-follow-card'>
      <header className='tw-follow-card-header'>
        <img className='tw-follow-card-avatar' src={imgSource} alt='El avatar de midu' />
        <div className='tw-follow-card-div'>
          <strong>{children}</strong>
          <span>@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-follow-card-btn-text'>{text}</span>
          <span className='tw-follow-card-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
