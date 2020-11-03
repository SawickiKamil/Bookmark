import * as React from 'react'
import './tabRow.scss'
import { ITab } from 'model'
import Tab from './tab/tab'

interface ITabRowProps {
  tabs: ITab[]
  handleClick: (index: number) => void
  activeIndex: number
  isModal?: boolean
}

export const TabRow = ({ tabs, handleClick, activeIndex, isModal }: ITabRowProps) => {
  return (
    <div className={isModal ? 'modal-select-card' : 'select-card'}>
      {tabs.map((item, index) => (
        <Tab
          key={`item-${index}`}
          singleTab={item}
          handleClick={handleClick}
          index={index}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  )
}
