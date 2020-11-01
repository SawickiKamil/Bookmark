import * as React from 'react'
import { useIconStyles } from '../styles'
import classnames from 'classnames'

interface IOperaIconProps extends JSX.IntrinsicAttributes {
  width?: string
  height?: string
  className?: string
}
const OperaIcon = ({ className, width, height }: IOperaIconProps) => {
  const classes = useIconStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '96'} height={height ? height : '100'}>
        <path
          fill="#EB6060"
          fillRule="evenodd"
          d="M48 100C21.49 100 0 77.614 0 50S21.49 0 48 0s48 22.386 48 50-21.49 50-48 50zm0-10c13.807 0 25-17.909 25-40S61.807 10 48 10 23 27.909 23 50s11.193 40 25 40z"
        />
      </svg>
    </div>
  )
}
export default OperaIcon
