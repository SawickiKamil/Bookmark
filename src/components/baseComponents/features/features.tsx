import * as React from 'react'
import './features.scss'
import { TabRow, ActiveCard, ContentCard } from './components'
import { IFeatures } from 'model'

interface IFeaturesProps {
  handleClick: (index: number) => void
  activeIndex: number
  isModal?: boolean
  tabsData: IFeatures[]
  tabData: IFeatures
}

export const Features = ({ handleClick, activeIndex, isModal, tabsData, tabData }: IFeaturesProps) => {
  return (
    <>
      <TabRow tabs={tabsData} handleClick={handleClick} activeIndex={activeIndex} isModal={isModal} />
      <div className="container">
        <div className="container__left-container">
          <ActiveCard fullSizeImage={tabData.fullSizeImage} smallImage={tabData.smallImage} isModal={isModal} />
        </div>
        <div className="container__right-container">
          <ContentCard content={tabData.content} title={tabData.title} isModal={isModal} />
        </div>
      </div>
    </>
  )
}
