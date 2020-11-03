import * as React from 'react'
import './heroImg.scss'

export const HeroImg: React.FC = () => {
  return (
    <div className="hero-img">
      <div className="hero-img__bg" />
      <div>
        <img src={require('../../../../images/illustration-hero.svg')} alt="hero" className="hero-section-img" />
      </div>
    </div>
  )
}
