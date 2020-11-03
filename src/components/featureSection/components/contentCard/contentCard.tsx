import * as React from 'react'
import './content.scss'
import { IContentCard } from 'model'
import { PrimaryButton } from 'components/baseComponents'

export const ContentCard = ({ content, title, className }: IContentCard) => {
  return (
    <div className={className ? className : 'main-card'}>
      <h2 className="main-card__title">{title}</h2>
      <p className="main-card__content">{content}</p>
      <PrimaryButton text="More Info" variant="primary" className="main-card__btn" />
    </div>
  )
}
