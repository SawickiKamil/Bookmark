import * as React from 'react'
import './contactUsSection.scss'
import { BaseSection, PrimaryButton } from '../baseComponents'
import Input from 'components/baseComponents/input/input'
import ErrorIcon from 'icons/errow'
import { useContact } from './useContact'
import { formatNumber } from 'utils'

const ContactUsSection: React.FC = () => {
  const { countingNumber, value, handleValue, handleClick, alert } = useContact()

  return (
    <BaseSection className="contactUsSection">
      <p className="contactUsSection__activeUsers">{formatNumber(countingNumber)}+ ALREADY JOINED</p>
      <h2 className="contactUsSection__title">
        Stay up-to-date with what <br /> we're doing
      </h2>
      <div className="contactUsSection__wrapper">
        <div className={!alert ? 'contactUsSection__wrapper__input' : ''}>
          <Input
            placeholder="Enter your email address"
            type="text"
            value={value}
            className="input-wrapper"
            onChange={handleValue}
          />
          {!alert && <ErrorIcon className="contactUsSection__wrapper__icon" />}
          {!alert && (
            <div className="contactUsSection__wrapper__input__alert">
              <p className="contactUsSection__wrapper__input__alert__text">Whoops, make sure it's an email</p>
            </div>
          )}
        </div>
        <PrimaryButton
          variant="secondary"
          text="Contact Us"
          onClick={handleClick}
          className={alert ? 'contact-button' : 'contact-button--active'}
        />
      </div>
    </BaseSection>
  )
}

export default ContactUsSection
