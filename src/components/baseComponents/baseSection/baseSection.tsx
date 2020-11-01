import * as React from 'react'
import './baseSection.scss'

interface IBaseSectionProps {
  title?: string
  content?: string
  className?: string
}

export const BaseSection: React.FC<IBaseSectionProps> = ({ children, title, content, className }) => {
  return (
    <section className={['baseSection', className].join(' ')}>
      <h2 className="title">{title}</h2>
      <p className="paragraph">{content}</p>
      <div className="baseSection__children">{children}</div>
    </section>
  )
}
