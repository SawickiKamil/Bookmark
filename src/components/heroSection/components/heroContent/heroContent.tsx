import * as React from 'react'
import './heroContent.scss'
import { PrimaryButton, SecondaryButton } from 'components/baseComponents'

export const HeroContent: React.FC = () => {
  return (
    <div className="hero-content">
      <h1 className="hero-content__title">
        A Simple Bookmark <br className="title-break" /> Manager
      </h1>
      <p className="hero-content__content">
        A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load
        instantly. Try it for free
      </p>
      <div className="hero-content__buttons">
        <PrimaryButton text="Get in on Chrome" variant="primary" className="button" />
        <SecondaryButton text="Get in on Firefox" className="button" />
      </div>
    </div>
  )
}
