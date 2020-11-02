import * as React from 'react'
import './navbarList.scss'
import { ListElement } from './listElement'
import { ButtonPicker } from './buttonPicker'
import { SocialMedia } from '../../baseComponents'

interface INavbarListProps {
  isMobileMenu: boolean
  handleClick: () => void
}

const NavbarList = ({ isMobileMenu, handleClick }: INavbarListProps) => {
  return (
    <ul className={isMobileMenu ? 'nav-menu--active' : 'nav-menu'}>
      <ListElement to="/" name="Features" handleClick={handleClick} />
      <ListElement to="/pricing" name="Pricing" handleClick={handleClick} />
      <ListElement to="/contact" name="Contact" handleClick={handleClick} />
      <ButtonPicker isMobileMenu={isMobileMenu} />
      {isMobileMenu && <SocialMedia className="nav-menu__icons" />}
    </ul>
  )
}

export default NavbarList
