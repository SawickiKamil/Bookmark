import * as React from 'react'
import { BaseSection } from 'components/baseComponents'
import './featureSection.scss'
import { ActiveCard, TabRow, ContentCard } from './components'
import { CardsData } from './data'

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
        <TabRow tabs={CardsData} handleClick={handleClick} activeIndex={activeIndex} />
        <div className="feature__container">
          <div className="feature__container__left-container">
            <ActiveCard
              fullSizeImage={CardsData[activeIndex].fullSizeImage}
              smallImage={CardsData[activeIndex].smallImage}
            />
          </div>
          <div className="feature__container__right-container">
            <ContentCard content={CardsData[activeIndex].content} title={CardsData[activeIndex].title} />
          </div>
        </div>
      </div>
    </BaseSection>
  )
}

export default FeatureSection
