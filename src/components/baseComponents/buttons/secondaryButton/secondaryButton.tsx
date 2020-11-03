import * as React from 'react'
import './secondaryButton.scss'

interface ISecondaryButtonProps {
  text: string
  className: string
}

export const SecondaryButton = ({ text, className }: ISecondaryButtonProps) => {
  return <button className={['secondary-button', className].join(' ')}>{text}</button>
}
