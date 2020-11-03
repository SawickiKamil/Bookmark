import * as React from 'react'
import './tab.scss'
import classNames from 'classnames'
import { ITab } from 'model'

interface ITabProps {
  handleClick: (index: number) => void
  singleTab: ITab
  index: number
  isActive: boolean
}

const Tab = ({ singleTab: { tabName }, index, isActive, handleClick }: ITabProps) => {
  const handleOnChange = React.useCallback(() => {
    handleClick(index)
  }, [handleClick, index])

  const classes = classNames({ 'card-element': true, 'card-element--active': isActive })

  return (
    <div onClick={handleOnChange} className={classes}>
      <div className="card-element__wrapper">{tabName}</div>
    </div>
  )
}

export default Tab
