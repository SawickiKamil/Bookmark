import * as React from 'react'
import './footerList.scss'
import { Link } from 'react-router-dom'
import { IFooter } from 'model'

interface IFooterListProps {
  elements: IFooter[]
}

const FooterList = ({ elements }: IFooterListProps) => {
  return (
    <div className="footer-list">
      {elements.map(({ name, navigateTo }) => (
        <Link to={navigateTo} className="footer-list__element" key={name}>
          {name}
        </Link>
      ))}
    </div>
  )
}

export default FooterList
