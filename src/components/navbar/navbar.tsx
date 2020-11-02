import * as React from 'react'
import './navbar.scss'
import HamburgerIcon from 'icons/hamburger'
import BookmarksLogoIcon from 'icons/logo/bookmarkLogo'
import CloseIcon from 'icons/close'
import { Link } from 'react-router-dom'
import NavbarList from './navbarList'
import { useNavbar } from './useNavbar'

const NavBar: React.FC = () => {
  const { isMobileMenu, closeMobileMenu, handleClick } = useNavbar()

  return (
    <nav className={isMobileMenu ? 'navbar--active' : 'navbar'}>
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo" onClick={closeMobileMenu}>
          {isMobileMenu ? (
            <BookmarksLogoIcon fill="white" fillCircle="white" fillPath="black" />
          ) : (
            <BookmarksLogoIcon />
          )}
        </Link>
        <div className="navbar__container__menu-icon" onClick={handleClick}>
          {isMobileMenu ? <CloseIcon /> : <HamburgerIcon />}
        </div>
        <NavbarList handleClick={closeMobileMenu} isMobileMenu={isMobileMenu} />
      </div>
    </nav>
  )
}

export default NavBar
