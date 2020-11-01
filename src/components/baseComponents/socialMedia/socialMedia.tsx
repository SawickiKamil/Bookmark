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
      <FacebookIcon className="socialMedia__icon" />
      <TwitterIcon className="socialMedia__icon" />
    </div>
  )
}
