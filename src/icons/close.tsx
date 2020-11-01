import * as React from 'react'
import { useIconStyles } from './styles'
import classnames from 'classnames'

interface ICloseIconProps extends JSX.IntrinsicAttributes {
  width?: string
  height?: string
  className?: string
  fill?: string
  stroke?: string
}
const CloseIcon = ({ className, fill, width, height, stroke }: ICloseIconProps) => {
  const classes = useIconStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width ? width : '16'} height={height ? height : '15'}>
        <path
          fill={fill ? fill : '#FFF'}
          fillRule="evenodd"
          d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
        />
      </svg>
    </div>
  )
}
export default CloseIcon
