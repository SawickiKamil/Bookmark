import * as React from 'react'
import './secondaryButton.scss'

interface ISecondaryButtonProps {
  text: string
}

export const SecondaryButton = ({ text }: ISecondaryButtonProps) => {
  return <button className="secondary-button">{text}</button>
}
