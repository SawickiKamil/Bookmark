import * as React from 'react'
import './footer.scss'
import BookmarksLogoIcon from 'icons/logo/bookmarkLogo'
import { SocialMedia } from 'components/baseComponents'
import { FooterListElements } from 'constant'
import FooterList from './footerList/footerList'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <BookmarksLogoIcon className="footer__wrapper__logo" fill="white" />
        <FooterList elements={FooterListElements} />
        <SocialMedia className="footer__wrapper__icons" />
      </div>
    </footer>
  )
}

export default Footer
