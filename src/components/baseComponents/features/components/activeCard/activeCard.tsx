import * as React from 'react'
import './active.scss'

interface IActiveCardProps {
  isModal?: boolean
  fullSizeImage?: React.ReactFragment
  smallImage?: React.ReactFragment
}

export const ActiveCard = ({ fullSizeImage, smallImage, isModal }: IActiveCardProps) => {
  return (
    <div className="active-card">
      <div className="active-card__full-size-img">{fullSizeImage}</div>
      <div className="active-card__small-img">{smallImage}</div>
      <div className={isModal ? 'modal-background' : 'active-card__bg'} />
    </div>
  )
}
