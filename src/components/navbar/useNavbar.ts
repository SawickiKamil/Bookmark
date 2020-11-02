import * as React from 'react'

export const useNavbar = () => {
  const [isMobileMenu, setIsMobileMenu] = React.useState(false)

  const hideMobileMenu = React.useCallback(() => {
    if (window.innerWidth <= 960) return
    setIsMobileMenu(false)
  }, [setIsMobileMenu])

  React.useEffect(() => {
    window.addEventListener('resize', hideMobileMenu)
  }, [hideMobileMenu])

  const handleClick = () => setIsMobileMenu(!isMobileMenu)
  const closeMobileMenu = () => setIsMobileMenu(false)

  return { isMobileMenu, closeMobileMenu, handleClick }
}
