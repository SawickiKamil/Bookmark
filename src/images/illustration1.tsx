import * as React from 'react'
import { useImageStyles } from './styles'
import classnames from 'classnames'

interface IIllustrationProps extends JSX.IntrinsicAttributes {
  width?: string
  height?: string
  className?: string
  fill?: string
  stroke?: string
}
const Illustration1 = ({ className, fill, width, height }: IIllustrationProps) => {
  const classes = useImageStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width ? width : '536'}
        height={height ? height : '346'}
      >
        <defs>
          <rect id="a" width="536" height="346" rx="8"></rect>
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a"></use>
          </mask>
          <use fill="#E8EAF6" fillRule="nonzero" xlinkHref="#a"></use>
          <g mask="url(#b)">
            <path fill="#242A45" d="M-3.53.197h547v59h-547z"></path>
            <g fill="#FFF" transform="translate(22.47 14.197)">
              <circle cx="16" cy="16" r="16" opacity="0.245"></circle>
              <circle cx="477" cy="16" r="16" opacity="0.104"></circle>
              <g transform="translate(47 6)">
                <rect width="120" height="6" opacity="0.75" rx="3"></rect>
                <rect width="64" height="6" y="14" opacity="0.25" rx="3"></rect>
              </g>
            </g>
          </g>
          <g mask="url(#b)">
            <g transform="translate(57 93)">
              <rect width="261" height="316" fill="#FFF" rx="8"></rect>
              <rect width="128" height="316" x="295" fill="#FFF" rx="8"></rect>
              <rect width="120" height="6" x="78.47" y="38.197" fill="#242A45" opacity="0.5" rx="3"></rect>
            </g>
          </g>
          <g transform="translate(88.47 115.197)">
            <circle cx="16" cy="26" r="16" fill="#F98E5D"></circle>
            <rect width="88" height="6" x="284" fill="#242A45" opacity="0.25" rx="3"></rect>
            <rect width="88" height="6" x="284" y="20" fill="#242A45" opacity="0.25" rx="3"></rect>
            <rect width="88" height="6" x="284" y="40" fill="#242A45" opacity="0.25" rx="3"></rect>
            <rect width="88" height="6" x="284" y="60" fill="#242A45" opacity="0.25" rx="3"></rect>
            <rect width="88" height="6" x="284" y="94" fill="#242A45" opacity="0.25" rx="3"></rect>
            <rect width="88" height="6" x="284" y="114" fill="#242A45" opacity="0.25" rx="3"></rect>
            <rect width="88" height="6" x="284" y="134" fill="#242A45" opacity="0.25" rx="3"></rect>
            <rect width="64" height="6" x="47" y="30" fill="#242A45" opacity="0.25" rx="3"></rect>
          </g>
          <g transform="translate(88.47 181.197)">
            <circle cx="16" cy="16" r="16" fill="#6AC6D6"></circle>
            <rect width="120" height="6" x="47" y="6" fill="#242A45" opacity="0.5" rx="3"></rect>
            <rect width="64" height="6" x="47" y="20" fill="#242A45" opacity="0.25" rx="3"></rect>
          </g>
          <g transform="translate(88.47 237.197)">
            <circle cx="16" cy="16" r="16" fill="#A47ED4"></circle>
            <rect width="120" height="6" x="47" y="6" fill="#242A45" opacity="0.5" rx="3"></rect>
            <rect width="64" height="6" x="47" y="20" fill="#242A45" opacity="0.25" rx="3"></rect>
          </g>
          <g transform="translate(88.47 293.197)">
            <circle cx="16" cy="16" r="16" fill="#EC7878"></circle>
            <rect width="120" height="6" x="47" y="6" fill="#242A45" opacity="0.5" rx="3"></rect>
            <rect width="64" height="6" x="47" y="20" fill="#242A45" opacity="0.25" rx="3"></rect>
          </g>
        </g>
      </svg>
    </div>
  )
}
export default Illustration1
