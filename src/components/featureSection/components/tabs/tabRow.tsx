import * as React from 'react'
import './tabRow.scss'
import { ITab } from 'model'
import Tab from './tab/tab'

interface ITabRowProps {
  tabs: ITab[]
  handleClick: (index: number) => void
  activeIndex: number
  className?: string
}

export const TabRow = ({ tabs, handleClick, activeIndex, className }: ITabRowProps) => {
  return (
    <div className={className ? className : 'select-card'}>
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
