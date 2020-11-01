import * as React from 'react'
import './navbar.scss'
import HamburgerIcon from 'icons/hamburger'
import BookmarksLogoIcon from 'icons/logo/bookmarkLogo'
import CloseIcon from 'icons/close'
import { Link } from 'react-router-dom'
import NavbarList from './navbarList'

const NavBar: React.FC = () => {
  const [click, setClick] = React.useState(false)

  const hideMobileMenu = React.useCallback(() => {
    if (window.innerWidth <= 960) {
      setClick(false)
    }
  }, [setClick])

  React.useEffect(() => {
    window.addEventListener('resize', hideMobileMenu)
  }, [hideMobileMenu])

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className={click ? 'navbar--active' : 'navbar'}>
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo" onClick={closeMobileMenu}>
          {click ? <BookmarksLogoIcon fill="white" fillCircle="white" fillPath="black" /> : <BookmarksLogoIcon />}
        </Link>
        <div className="navbar__container__menu-icon" onClick={handleClick}>
          {click ? <CloseIcon /> : <HamburgerIcon />}
        </div>
        <NavbarList handleClick={closeMobileMenu} click={click} />
      </div>
    </nav>
  )
}

export default NavBar
