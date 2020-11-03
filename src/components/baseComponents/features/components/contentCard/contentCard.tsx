import * as React from 'react'
import './content.scss'
import { PrimaryButton } from 'components/baseComponents'

interface IContentCardProps {
  isModal?: boolean
  content: string
  title: string
}

export const ContentCard = ({ content, title, isModal }: IContentCardProps) => {
  return (
    <div className={isModal ? 'modal-content-card' : 'main-card'}>
      <h2 className="main-card__title">{title}</h2>
      <p className="main-card__content">{content}</p>
      <PrimaryButton text="More Info" variant="primary" className="main-card__btn" />
    </div>
  )
}
