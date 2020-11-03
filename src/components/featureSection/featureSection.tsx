import * as React from 'react'
import { BaseSection, Features } from 'components/baseComponents'
import './featureSection.scss'
import { FeatureData } from 'constant'

const FeatureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0)

  const handleClick = React.useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const title = 'Features'
  const content =
    'Out aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go'

  return (
    <BaseSection title={title} content={content}>
      <div className="feature">
        <Features
          activeIndex={activeIndex}
          handleClick={handleClick}
          tabData={FeatureData[activeIndex]}
          tabsData={FeatureData}
        />
      </div>
    </BaseSection>
  )
}

export default FeatureSection
