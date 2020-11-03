import * as React from 'react'
import './modal.scss'
import CloseIcon from 'icons/close'
import { useModal } from './useModal'
import { ActiveCard, ContentCard, TabRow } from 'components/featureSection/components'
import { CardsData } from '../featureSection/data'

const Modal: React.FC = () => {
  const { isModalVisible, closeModal } = useModal()

  return (
    <>
      {isModalVisible && (
        <div className="modal">
          <div className="modal__wrapper">
            <TabRow tabs={CardsData} activeIndex={1} handleClick={() => {}} className="tab-row" />
            <div onClick={closeModal}>
              <CloseIcon fill="black" className="modal__wrapper__close-icon" />
            </div>
            <div className="feature__container">
              <div className="feature__container__left-container">
                <ActiveCard
                  fullSizeImage={CardsData[1].fullSizeImage}
                  smallImage={CardsData[1].smallImage}
                  className="background"
                />
              </div>
              <div className="feature__container__right-container">
                <ContentCard className="content-card" content={CardsData[0].content} title={CardsData[1].title} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
