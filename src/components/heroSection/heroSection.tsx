import * as React from 'react'
import './heroSection.scss'
import { BaseSection, SecondaryButton, PrimaryButton } from 'components/baseComponents'
import './heroSection.scss'

const HeroSection: React.FC = () => {
  return (
    <BaseSection>
      <div className="hero-section">
        <div className="hero-section__right-container">
          <div className="hero-section__bg" />
          <div>
            <img src={require('../../images/illustration-hero.svg')} alt="hero" className="hero-section-img" />
          </div>
        </div>

        <div className="hero-section__left-container">
          <h1 className="hero-section__left-container__title">
            A Simple Bookmark <br className="title-break" /> Manager
          </h1>
          <p className="hero-section__left-container__content">
            A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites
            load instantly. Try it for free
          </p>
          <div className="hero-section__left-container__buttons">
            <PrimaryButton text="Get in on Chrome" variant="primary" className="button" />
            <SecondaryButton text="Get in on Firefox" className="button" />
          </div>
        </div>
      </div>
    </BaseSection>
  )
}

export default HeroSection
