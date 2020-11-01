import * as React from 'react'
import { useIconStyles } from './styles'
import classnames from 'classnames'

interface IHamburgerIconProps extends JSX.IntrinsicAttributes {
  width?: string
  height?: string
  className?: string
  fill?: string
  stroke?: string
}
const HamburgerIcon = ({ className, fill, width, height }: IHamburgerIconProps) => {
  const classes = useIconStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '18'} height={height ? height : '15'}>
        <path fill={fill ? fill : '#242A45'} fillRule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z" />
      </svg>
    </div>
  )
}
export default HamburgerIcon
