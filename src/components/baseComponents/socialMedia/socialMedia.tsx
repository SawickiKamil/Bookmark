import * as React from 'react'
import './socialMedia.scss'
import FacebookIcon from 'icons/facebook'
import TwitterIcon from 'icons/twitter'

interface ISocialMediaProps {
  className?: string
}

export const SocialMedia = ({ className }: ISocialMediaProps) => {
  return (
    <div className={['socialMedia', className].join(' ')}>
      <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank" className="socialMedia__icon">
        <FacebookIcon />
      </a>
      <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank" className="socialMedia__icon">
        <TwitterIcon />
      </a>
    </div>
  )
}
