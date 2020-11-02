import * as React from 'react'
import './primaryButton.scss'
import classNames from 'classnames'

interface IPrimaryButtonProps {
  text: string
  variant?: string
  onClick?: () => void
  className?: string
  navigateTo?: string
}

export const PrimaryButton = ({ text, variant, onClick, className, navigateTo }: IPrimaryButtonProps) => {
  const primary = variant === 'primary'
  const secondary = variant === 'secondary'
  return (
    <a href={navigateTo} target="_blank" rel="noopener noreferrer">
      <button
        className={[classNames('primary-button', { primary: primary, secondary: secondary }), className].join(' ')}
        onClick={onClick}
      >
        {text}
      </button>
    </a>
  )
}
