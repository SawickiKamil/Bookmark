import * as React from 'react'
import './navbarList.scss'
import { ListElement } from './listElement'
import { ButtonPicker } from './buttonPicker'
import { SocialMedia } from '../../baseComponents'

interface INavbarListProps {
  click: boolean
  handleClick: () => void
}

const NavbarList = ({ click, handleClick }: INavbarListProps) => {
  return (
    <ul className={click ? 'nav-menu--active' : 'nav-menu'}>
      <ListElement to="/" name="Features" handleClick={handleClick} />
      <ListElement to="/pricing" name="Pricing" handleClick={handleClick} />
      <ListElement to="/contact" name="Contact" handleClick={handleClick} />
      <ButtonPicker click={click} />
      {click && <SocialMedia className="nav-menu__icons" />}
    </ul>
  )
}

export default NavbarList
