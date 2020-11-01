import * as React from 'react'
import './buttonPicker.scss'

import { LoginSmButton, PrimaryButton } from '../../../baseComponents'

interface IButtonPickerProps {
  click: boolean
}

export const ButtonPicker = ({ click }: IButtonPickerProps) => {
  return (
    <>
      {click ? (
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
