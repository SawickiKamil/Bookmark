import * as React from 'react'

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false)

  React.useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return

      setIsModalVisible(true)
    }

    document.addEventListener('mouseout', onMouseLeave)

    return () => {
      document.removeEventListener('mouseout', onMouseLeave)
    }
  }, [])

  React.useEffect(() => {
    const timeModal = setTimeout(() => {
      setIsModalVisible(true)
    }, 30 * 1000)

    return () => {
      clearTimeout(timeModal)
    }
  }, [])

  const closeModal = () => setIsModalVisible(false)

  return { isModalVisible, closeModal }
}
