import * as React from 'react'
import './primaryButton.scss'
import classNames from 'classnames'

interface IPrimaryButtonProps {
  text: string
  variant?: string
  onClick?: () => void
  className?: string
}

export const PrimaryButton = ({ text, variant, onClick, className }: IPrimaryButtonProps) => {
  const primary = variant === 'primary'
  const secondary = variant === 'secondary'
  return (
    <button
      className={[classNames('primary-button', { primary: primary, secondary: secondary }), className].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
