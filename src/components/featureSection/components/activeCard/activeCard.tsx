import * as React from 'react'
import './active.scss'
import { IActiveCard } from 'model'

export const ActiveCard = ({ fullSizeImage, smallImage }: IActiveCard) => {
  return (
    <div className="active-card">
      <div className="active-card__full-size-img">{fullSizeImage}</div>
      <div className="active-card__small-img">{smallImage}</div>
      <div className="active-card__bg" />
    </div>
  )
}
