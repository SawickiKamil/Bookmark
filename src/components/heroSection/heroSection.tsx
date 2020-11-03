import * as React from 'react'
import './heroSection.scss'
import { BaseSection } from 'components/baseComponents'
import { HeroContent, HeroImg } from './components'

const HeroSection: React.FC = () => {
  return (
    <BaseSection>
      <div className="hero-section">
        <HeroImg />
        <HeroContent />
      </div>
    </BaseSection>
  )
}

export default HeroSection
