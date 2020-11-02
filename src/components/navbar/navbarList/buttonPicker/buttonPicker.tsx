import * as React from 'react'
import './buttonPicker.scss'

import { LoginSmButton, PrimaryButton } from '../../../baseComponents'

interface IButtonPickerProps {
  isMobileMenu: boolean
}

export const ButtonPicker = ({ isMobileMenu }: IButtonPickerProps) => {
  return (
    <>
      {isMobileMenu ? (
        <div className="sm-button">
          <LoginSmButton text="login" />
        </div>
      ) : (
        <div className="full-button">
          <PrimaryButton text="LOGIN" variant="secondary" className="full-button__btn" />
        </div>
      )}
    </>
  )
}
