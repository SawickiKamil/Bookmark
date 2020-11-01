import * as React from 'react'
import './modal.scss'
import CloseIcon from 'icons/close'
import { useModal } from './useModal'

const Modal = () => {
  const { isModalVisible, closeModal } = useModal()

  return (
    <>
      {isModalVisible && (
        <div className="modal">
          <div className="modal__wrapper">
            <div onClick={closeModal}>
              <CloseIcon fill="black" className="modal__wrapper__close-icon" />
            </div>
            <img src={require('../../images/illustration-hero.svg')} alt="hero" className="hero-section-img" />
            <p>Modal pops up whenever mouse leaves object Window.</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
