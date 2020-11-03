import * as React from 'react'
import './modal.scss'
import CloseIcon from 'icons/close'
import { useModal } from './useModal'
import { FeatureData } from 'constant'
import { Features } from 'components/baseComponents/features'

const activeIndex: number = 1

const Modal: React.FC = () => {
  const { isModalVisible, closeModal } = useModal()

  return (
    <>
      {isModalVisible && (
        <div className="modal">
          <div className="modal__wrapper">
            <div onClick={closeModal}>
              <CloseIcon fill="black" className="modal__wrapper__close-icon" />
            </div>
            <Features
              activeIndex={activeIndex}
              handleClick={() => {}}
              isModal={true}
              tabData={FeatureData[activeIndex]}
              tabsData={FeatureData}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
