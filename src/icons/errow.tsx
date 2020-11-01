import * as React from 'react'
import { useIconStyles } from './styles'
import classnames from 'classnames'

interface IErrorIconProps extends JSX.IntrinsicAttributes {
  width?: string
  height?: string
  className?: string
}
const ErrorIcon = ({ className, width, height }: IErrorIconProps) => {
  const classes = useIconStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '20'} height={height ? height : '20'}>
        <g fill="none" fillRule="evenodd">
          <circle cx="10" cy="10" r="10" fill="#FA5959" />
          <g fill="#FFF" transform="translate(9 5)">
            <rect width="2" height="7" rx="1" />
            <rect width="2" height="2" y="8" rx="1" />
          </g>
        </g>
      </svg>
    </div>
  )
}
export default ErrorIcon
