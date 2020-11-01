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
        width="235pt"
        height="152pt"
        viewBox="0 0 235 152"
      >
        <defs>
          <filter id="alpha" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
            <feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          </filter>
          <image
            id="image19"
            width="235"
            height="152"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAACYCAYAAAAFvB66AAAABmJLR0QA/wD/AP+gvaeTAAABPUlEQVR4nO3ToU1EURBA0Zn5gg5I8HRAaAJCDSjUWixmHQXQAQkaRQkkKIKmAjyChOyjgp8lmMck51Rwzc2IiE3V2VXmzWaM4wD+jbvM94cxtre73VNeVp3fRzzOjgLWXUdc5OuyPJ+McTo7Blj3lvmSR1WfHxEHs2OAdYcRX7lUfc8OAfar2QHA75gVmjArNGFWaMKs0IRZoQmzQhNmhSbMCk2YFZowKzRhVmjCrNCEWaEJs0ITZoUmzApNmBWaMCs0YVZowqwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Cc/WXcYqtmV6nIAAAAASUVORK5CYII="
          ></image>
          <mask id="mask0">
            <g filter="url(#alpha)">
              <use xlinkHref="#image19"></use>
            </g>
          </mask>
          <mask id="mask1">
            <g filter="url(#alpha)">
              <path fillOpacity="0.243" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip2">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface7" clipPath="url(#clip2)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M23.883 13.266c0 3.882-3.14 7.027-7.016 7.027-3.875 0-7.015-3.145-7.015-7.027 0-3.883 3.14-7.028 7.015-7.028 3.875 0 7.016 3.145 7.016 7.028zm0 0"
            ></path>
          </g>
          <mask id="mask2">
            <g filter="url(#alpha)">
              <path fillOpacity="0.106" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip3">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface10" clipPath="url(#clip3)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M226 13.266c0 3.882-3.14 7.027-7.016 7.027-3.875 0-7.015-3.145-7.015-7.027 0-3.883 3.14-7.028 7.015-7.028 3.875 0 7.016 3.145 7.016 7.028zm0 0"
            ></path>
          </g>
          <mask id="mask3">
            <g filter="url(#alpha)">
              <path fillOpacity="0.749" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip4">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface13" clipPath="url(#clip4)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M31.773 8.871h49.98a1.318 1.318 0 010 2.637h-49.98a1.318 1.318 0 010-2.637zm0 0"
            ></path>
          </g>
          <mask id="mask4">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip5">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface16" clipPath="url(#clip5)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M31.773 15.023h25.43a1.318 1.318 0 010 2.637h-25.43a1.318 1.318 0 010-2.637zm0 0"
            ></path>
          </g>
          <clipPath id="clip1">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface21" clipPath="url(#clip1)">
            <path fill="#242A45" fillRule="evenodd" d="M-1.547.086h239.82v25.918H-1.547zm0 0"></path>
            <use mask="url(#mask1)" xlinkHref="#surface7"></use>
            <use mask="url(#mask2)" xlinkHref="#surface10"></use>
            <use mask="url(#mask3)" xlinkHref="#surface13"></use>
            <use mask="url(#mask4)" xlinkHref="#surface16"></use>
          </g>
          <image
            id="image28"
            width="235"
            height="152"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAACYCAYAAAAFvB66AAAABmJLR0QA/wD/AP+gvaeTAAABuklEQVR4nO3Tyw1BUQBFUV6ERBcKUwYtGOpCd/ISU59owiU71irgnNFeLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgHy2+cXDab3Td+4Ff22+31Oc+3kR/DY12/XsvnanUf/QO/dJymw+nxOI/8mEaOA58jVogQK0SIFSLEChFihQixQoRYIUKsECFWiBArRIgVIsQKEWKFCLFChFghQqwQIVaIECtEiBUixAoRYoUIsUKEWCFCrBAhVogQK0SIFSLEChFihQixQoRYIUKsECFWiBArRIgVIsQKEWKFCLFChFghQqwQIVaIECtEiBUixAoRYoUIsUKEWCFCrBAhVogQK0SIFSLEChFihQixQoRYIUKsECFWiBArRIgVIsQKEWKFCLFChFghQqwQIVaIECtEiBUixAoRYoUIsUKEWCFCrBAhVogQK0SIFSLEChFihQixQoRYIUKsECFWiBArRIgVIsQKEWKFCLFChFghQqwQIVaIECtEiBUixAoRYoUIsUKEWCFCrBAhVogQK0SIFSLEChFihQixQoRYIUKsECFWiBArRIgVIsQKEWKFiDceeQ7f6+Va4QAAAABJRU5ErkJggg=="
          ></image>
          <mask id="mask5">
            <g filter="url(#alpha)">
              <use xlinkHref="#image28"></use>
            </g>
          </mask>
          <mask id="mask6">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip7">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface25" clipPath="url(#clip7)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 57.637h49.981c.727 0 1.317.59 1.317 1.316 0 .727-.59 1.32-1.317 1.32h-49.98a1.32 1.32 0 01-1.316-1.32c0-.726.59-1.316 1.316-1.316zm0 0"
            ></path>
          </g>
          <clipPath id="clip6">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface30" clipPath="url(#clip6)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M28.5 40.855h107.414a3.512 3.512 0 013.508 3.516v131.79a3.512 3.512 0 01-3.508 3.515H28.5a3.512 3.512 0 01-3.508-3.516V44.371a3.512 3.512 0 013.508-3.516zm0 0M157.836 40.855h49.105a3.512 3.512 0 013.508 3.516v131.79a3.512 3.512 0 01-3.508 3.515h-49.105a3.512 3.512 0 01-3.508-3.516V44.371a3.512 3.512 0 013.508-3.516zm0 0"
            ></path>
            <use mask="url(#mask6)" xlinkHref="#surface25"></use>
          </g>
          <mask id="mask7">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip8">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface33" clipPath="url(#clip8)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M164.617 50.605h35.953a1.318 1.318 0 010 2.637h-35.953c-.726 0-1.312-.59-1.312-1.316 0-.73.586-1.32 1.312-1.32zm0 0"
            ></path>
          </g>
          <mask id="mask8">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip9">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface36" clipPath="url(#clip9)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M164.617 59.395h35.953a1.317 1.317 0 010 2.632h-35.953c-.726 0-1.312-.59-1.312-1.316 0-.727.586-1.316 1.312-1.316zm0 0"
            ></path>
          </g>
          <mask id="mask9">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip10">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface39" clipPath="url(#clip10)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M164.617 68.18h35.953a1.318 1.318 0 010 2.637h-35.953c-.726 0-1.312-.59-1.312-1.32 0-.727.586-1.317 1.312-1.317zm0 0"
            ></path>
          </g>
          <mask id="mask10">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip11">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface42" clipPath="url(#clip11)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M164.617 76.965h35.953a1.318 1.318 0 010 2.637h-35.953c-.726 0-1.312-.59-1.312-1.32 0-.727.586-1.317 1.312-1.317zm0 0"
            ></path>
          </g>
          <mask id="mask11">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip12">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface45" clipPath="url(#clip12)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M164.617 91.902h35.953a1.318 1.318 0 010 2.637h-35.953c-.726 0-1.312-.59-1.312-1.32 0-.727.586-1.317 1.312-1.317zm0 0"
            ></path>
          </g>
          <mask id="mask12">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip13">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface48" clipPath="url(#clip13)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M164.617 100.688h35.953a1.318 1.318 0 010 2.637h-35.953c-.726 0-1.312-.59-1.312-1.321 0-.727.586-1.317 1.312-1.317zm0 0"
            ></path>
          </g>
          <mask id="mask13">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip14">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface51" clipPath="url(#clip14)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M164.617 109.473h35.953a1.318 1.318 0 010 2.636h-35.953c-.726 0-1.312-.59-1.312-1.316 0-.73.586-1.32 1.312-1.32zm0 0"
            ></path>
          </g>
          <mask id="mask14">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip15">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface54" clipPath="url(#clip15)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 63.785h25.43c.727 0 1.313.59 1.313 1.32 0 .727-.586 1.317-1.312 1.317H60.71a1.318 1.318 0 010-2.637zm0 0"
            ></path>
          </g>
          <mask id="mask15">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip16">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface57" clipPath="url(#clip16)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 82.238h49.981a1.317 1.317 0 010 2.633h-49.98a1.317 1.317 0 010-2.633zm0 0"
            ></path>
          </g>
          <mask id="mask16">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip17">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface60" clipPath="url(#clip17)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 88.387h25.43c.727 0 1.313.59 1.313 1.316 0 .73-.586 1.32-1.312 1.32H60.71a1.318 1.318 0 010-2.636zm0 0"
            ></path>
          </g>
          <mask id="mask17">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip18">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface63" clipPath="url(#clip18)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 106.84h49.981a1.317 1.317 0 010 2.633h-49.98a1.317 1.317 0 010-2.633zm0 0"
            ></path>
          </g>
          <mask id="mask18">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip19">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface66" clipPath="url(#clip19)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 112.988h25.43c.727 0 1.313.59 1.313 1.317 0 .73-.586 1.32-1.312 1.32H60.71a1.318 1.318 0 010-2.637zm0 0"
            ></path>
          </g>
          <mask id="mask19">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip20">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface69" clipPath="url(#clip20)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 131.438h49.981a1.318 1.318 0 010 2.636h-49.98a1.318 1.318 0 010-2.637zm0 0"
            ></path>
          </g>
          <mask id="mask20">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H235V152H0z"></path>
            </g>
          </mask>
          <clipPath id="clip21">
            <path d="M0 0H235V152H0z"></path>
          </clipPath>
          <g id="surface72" clipPath="url(#clip21)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M60.71 137.59h25.43c.727 0 1.313.59 1.313 1.316 0 .73-.586 1.32-1.312 1.32H60.71a1.318 1.318 0 010-2.636zm0 0"
            ></path>
          </g>
        </defs>
        <g>
          <path
            fill="#E8EAF6"
            d="M3.508 0h227.984A3.512 3.512 0 01235 3.516v144.968a3.512 3.512 0 01-3.508 3.516H3.508A3.512 3.512 0 010 148.484V3.516A3.512 3.512 0 013.508 0zm0 0"
          ></path>
          <use mask="url(#mask0)" xlinkHref="#surface21"></use>
          <use mask="url(#mask5)" xlinkHref="#surface30"></use>
          <path
            fill="#F98E5D"
            fillRule="evenodd"
            d="M52.816 62.027c0 3.883-3.14 7.032-7.011 7.032-3.875 0-7.016-3.149-7.016-7.032 0-3.879 3.14-7.027 7.016-7.027 3.87 0 7.011 3.148 7.011 7.027zm0 0"
          ></path>
          <use mask="url(#mask7)" xlinkHref="#surface33"></use>
          <use mask="url(#mask8)" xlinkHref="#surface36"></use>
          <use mask="url(#mask9)" xlinkHref="#surface39"></use>
          <use mask="url(#mask10)" xlinkHref="#surface42"></use>
          <use mask="url(#mask11)" xlinkHref="#surface45"></use>
          <use mask="url(#mask12)" xlinkHref="#surface48"></use>
          <use mask="url(#mask13)" xlinkHref="#surface51"></use>
          <use mask="url(#mask14)" xlinkHref="#surface54"></use>
          <path
            fill="#6AC6D6"
            fillRule="evenodd"
            d="M52.816 86.629c0 3.883-3.14 7.031-7.011 7.031-3.875 0-7.016-3.148-7.016-7.031 0-3.883 3.14-7.027 7.016-7.027 3.87 0 7.011 3.144 7.011 7.027zm0 0"
          ></path>
          <use mask="url(#mask15)" xlinkHref="#surface57"></use>
          <use mask="url(#mask16)" xlinkHref="#surface60"></use>
          <path
            fill="#A47ED4"
            fillRule="evenodd"
            d="M52.816 111.23c0 3.883-3.14 7.032-7.011 7.032-3.875 0-7.016-3.149-7.016-7.032 0-3.882 3.14-7.027 7.016-7.027 3.87 0 7.011 3.145 7.011 7.027zm0 0"
          ></path>
          <use mask="url(#mask17)" xlinkHref="#surface63"></use>
          <use mask="url(#mask18)" xlinkHref="#surface66"></use>
          <path
            fill="#EC7878"
            fillRule="evenodd"
            d="M52.816 135.832c0 3.883-3.14 7.027-7.011 7.027-3.875 0-7.016-3.144-7.016-7.027s3.14-7.027 7.016-7.027c3.87 0 7.011 3.144 7.011 7.027zm0 0"
          ></path>
          <use mask="url(#mask19)" xlinkHref="#surface69"></use>
          <use mask="url(#mask20)" xlinkHref="#surface72"></use>
        </g>
      </svg>
    </div>
  )
}
export default Illustration1
