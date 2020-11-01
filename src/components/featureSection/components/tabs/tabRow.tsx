import * as React from 'react'
import './tabRow.scss'
import { ITab } from 'model'
import Tab from './tab/tab'

interface ITabRowProps {
  tabs: ITab[]
  handleClick: (index: number) => void
  activeIndex: number
}

export const TabRow = ({ tabs, handleClick, activeIndex }: ITabRowProps) => {
  return (
    <div className="select-card">
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
