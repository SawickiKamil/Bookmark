import * as React from 'react'
import { useIconStyles } from './styles'
import classnames from 'classnames'

interface IArrowIconProps extends JSX.IntrinsicAttributes {
  width?: string
  height?: string
  className?: string
  fill?: string
  stroke?: string
}
const ArrowIcon = ({ className, fill, width, height, stroke }: IArrowIconProps) => {
  const classes = useIconStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '8'} height={height ? height : '12'}>
        <path fill={fill} stroke={stroke ? stroke : '#5267DF'} strokeWidth="3" d="M1 1l8 8 8-8" />
      </svg>
    </div>
  )
}
export default ArrowIcon
