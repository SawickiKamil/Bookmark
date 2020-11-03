import * as React from 'react'

const screenResolution: number = 960

export const useNavbar = () => {
  const [isMobileMenu, setIsMobileMenu] = React.useState(false)

  const hideMobileMenu = React.useCallback(() => {
    if (window.innerWidth <= screenResolution) return
    setIsMobileMenu(false)
  }, [])

  React.useEffect(() => {
    window.addEventListener('resize', hideMobileMenu)

    return () => {
      window.removeEventListener('resize', hideMobileMenu)
    }
  }, [hideMobileMenu])

  const handleClick = () => setIsMobileMenu(!isMobileMenu)
  const closeMobileMenu = () => setIsMobileMenu(false)

  return { isMobileMenu, closeMobileMenu, handleClick }
}
