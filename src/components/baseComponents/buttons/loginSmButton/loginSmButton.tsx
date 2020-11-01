import * as React from 'react'
import './loginSmButton.scss'

interface ILoginButtonProps {
  text: string
}

export const LoginSmButton = ({ text }: ILoginButtonProps) => {
  return <button className="login-button">{text}</button>
}
