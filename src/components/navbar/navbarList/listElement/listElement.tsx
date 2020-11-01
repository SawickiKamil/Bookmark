import * as React from 'react'
import './listElements.scss'
import { Link } from 'react-router-dom'

interface IListElementProps {
  to: string
  name: string
  handleClick: () => void
}

export const ListElement = ({ to, name, handleClick }: IListElementProps) => {
  return (
    <li className="list-element">
      <Link to={to} className="list-element__nav-link" onClick={handleClick}>
        {name}
      </Link>
    </li>
  )
}
