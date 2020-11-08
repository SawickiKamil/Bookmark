import * as React from 'react'
import './input.scss'

interface IInputProps {
  placeholder: string
  type: string
  value: string
  className?: string
  onChange: (value: string) => void
}

export const Input = ({ placeholder, type, value, className, onChange }: IInputProps) => {
  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    },
    [onChange]
  )

  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={handleOnChange}
      className={['input-style', className].join(' ')}
    />
  )
}
