import * as React from 'react'
import './footerList.scss'

interface IFooterListProps {
  elements: string[]
}

const FooterList = ({ elements }: IFooterListProps) => {
  return (
    <div className="footer-list">
      {elements.map((item) => (
        <p className="footer-list__element" key={item}>
          {item}
        </p>
      ))}
    </div>
  )
}

export default FooterList
