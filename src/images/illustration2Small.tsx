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
const Illustration2 = ({ className, fill, width, height }: IIllustrationProps) => {
  const classes = useImageStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="260"
        height="170pt"
        viewBox="0 0 195 170"
      >
        <defs>
          <filter id="alpha" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
            <feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          </filter>
          <image
            id="image16"
            width="195"
            height="170"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACqCAYAAAAQhPs4AAAABmJLR0QA/wD/AP+gvaeTAAABTklEQVR4nO3TvU0DURCF0XmLjYRETEINZET8lEMASC7AFZBDGXQAEUImIKEAImoAByvj52RiArPS01rnVHBHmq/U2CvRf1xHeZpFeTwK+Eu9/4xYzsv08rn1lKGV2r/dRnfx0HoIY3K4ivXrWdk/eW+9ZEhdlJdZ6xGMzfckuqub1iuGVurq4Dei71oPYWTq16JMj89bzxhSJwS2s9y5v9m5g2BbYoAkBkhigCQGSGKAJAZIYoAkBkhigCQGSGKAJAZIYoAkBkhigCQGSGKAJAZIk1jHaesRjFC9+2k9AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4pw0qcSHOfMGyXQAAAABJRU5ErkJggg=="
          ></image>
          <mask id="mask0">
            <g filter="url(#alpha)">
              <use xlinkHref="#image16"></use>
            </g>
          </mask>
          <mask id="mask1">
            <g filter="url(#alpha)">
              <path fillOpacity="0.243" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip2">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface6" clipPath="url(#clip2)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M22.223 12.34c0 3.613-2.926 6.539-6.528 6.539-3.605 0-6.527-2.926-6.527-6.54 0-3.609 2.922-6.538 6.527-6.538 3.602 0 6.528 2.93 6.528 6.539zm0 0"
            ></path>
          </g>
          <mask id="mask2">
            <g filter="url(#alpha)">
              <path fillOpacity="0.749" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip3">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface9" clipPath="url(#clip3)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M29.563 8.254H76.07c.676 0 1.223.547 1.223 1.226 0 .676-.547 1.227-1.223 1.227H29.563c-.676 0-1.223-.55-1.223-1.227 0-.68.547-1.226 1.223-1.226zm0 0"
            ></path>
          </g>
          <mask id="mask3">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip4">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface12" clipPath="url(#clip4)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M29.563 13.977h23.664c.675 0 1.222.546 1.222 1.222 0 .68-.547 1.227-1.222 1.227H29.563a1.223 1.223 0 01-1.223-1.227c0-.676.547-1.222 1.223-1.222zm0 0"
            ></path>
          </g>
          <clipPath id="clip1">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface15" clipPath="url(#clip1)">
            <path fill="#242A45" fillRule="evenodd" d="M-1.441.082h223.148v24.11H-1.441zm0 0"></path>
            <use mask="url(#mask1)" xlinkHref="#surface6"></use>
            <use mask="url(#mask2)" xlinkHref="#surface9"></use>
            <use mask="url(#mask3)" xlinkHref="#surface12"></use>
          </g>
          <image
            id="image24"
            width="195"
            height="170"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAACqCAYAAAAQhPs4AAAABmJLR0QA/wD/AP+gvaeTAAAFH0lEQVR4nO3ZT27bRhSA8fcoUiRNTV0gYFdeaZltLqBL5D46T3MJnyJLrbwjDNQYMfwjitOFni2naGwmrWO6/X4rLmhjQM7HGVIiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF6H/uS/+78Lrz0AfFv8nedbBNtzDB/fE8ZTPn1+FMD2/oAoZmjqRD5HYJN/U5UqIuK9I4YnOOeDiMh1WYVzGNsgBDE7UybyVyFsqlK9d9qud9rtV4TwjHS1DyIi2W4dnPPhHAVBzM3EGE4hfNito/sIrppcuzLVvl0SxBOWWR/Sqgs3eRPS1T6UVTkSxDw9986gj1eEar3Tsioj71y0XN6qiGikIzF8Q5IegoiId24sszRUexmrsoo2VTleE8HsTHqB3lSlVmUV3YfgMh/VWuiwjNVJrCIiw8EThYkTZxM9E78cQta1WtzVo1z+KtVeRu/d6d3r01bspZowZuD5GD6+V6lEuv1KuzLVd3e3evfLZeQk1qH22l6cYigkJYYHvdTJMYiI5PUQGpePtRRR3y7DVZNrtd7ppir1mghmZdLK4L1TyRvp26XWWRG5PtY2aaJCUl00i9PK8LLjfHPSYaFxfAz1hUheN1Hj8tH1PuqylABm6pkYzr8nXDW5Lpe3WmeFDAevhaQ6DAs9ZgtWhG9pRQoRqS9EXB/rICJ9u9RuWOl5q8TqMBfRlJPa9e5hwg8uZvJPdMwWOgznh8WhS7h2M/a9v0D/rePwhZv8F4v4gif+GzNpZcA/UxwWyte2+SMGwBADYIgBMMQAGGIADDEAhhgAQwyAIQbAEANgiAEwxAAYYgAMMQCGGABDDIAhBsAQA2CIATDEABhiAAwxAIYYAEMMgCEGwBADYIgBMMQAGGIADDEAhhgAQwyAIQbAEANgiAEwxAAYYgAMMQCGGABDDIAhBsAQA2CIATDEABhiAAwxAIYYAEMMgCEGwBADYIgBMMQAGGIADDEAhhgAQwyAIQbAEANgiAEwxAAYYgAMMQCGGABDDIAhBsAQA2CIATDEABhiAAwxAIYYAEMMgCEGwBADYIgBMMQAGGIADDEAhhgAQwyAIQbAEANgiAEwxAAYYgAMMQCGGABDDIAhhp+gTo4hTlx47XHgafG/8U8W8QU3Gm/epJUh260fJnvsByb+RIv2GOL4+HC9kvTAtZuxZ1aGbRD5XUVEbvImXMa/hUxaiRMX6qQJhYhI+/KDfKvi+Bjq5BjiL0PwxRDyXmSZ9SGVfXBNHuTTZ+KYkee3SZ8+B7cpw52cbmRxV493LlbX52N38DpcxCoiUhwW+tKDfUvq5Bg6EYm/DKEp8jH2Q/DBjc77IOVrjw5/Z/I7Q7rah7TKw617F1zvx6ZLdHC5uv4UQ3fwxGDixIXscDr2xRBiP4SircfxMgo3QxMud+twvd6xKszMpBiuyypsqnKsykrKSsSLk3fdrfbpUpsusQiSlxznm3LoTnvHJD2EvBfxwY3jZRSq/R9junq8RdoGESGKmZjyNFeRrcrH9/pht47a9U67/Uqvmly7MtW+XbIiPGGZ9SGtunCTNyFd7UNZleN1WRHDDE2MQeQ+iE1VqvdO76N40dH9B6SrfRA5fZFzzgdCmK+pk/mrIERENlWpIiLeO4J4gnM+iJy2muevR4QwR98zkR+duz0dWxh4wlefT7f3x4QwQz86mYngxxABAAAA3po/AQ6qwRHA6PkPAAAAAElFTkSuQmCC"
          ></image>
          <mask id="mask4">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip5">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface27" clipPath="url(#clip5)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 70.695H79.14a1.226 1.226 0 110 2.453H40.258a1.223 1.223 0 01-1.223-1.226c0-.676.547-1.227 1.223-1.227zm0 0"
            ></path>
          </g>
          <mask id="mask5">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip6">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface30" clipPath="url(#clip6)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 76.418h19.597c.676 0 1.223.55 1.223 1.227 0 .675-.547 1.226-1.223 1.226H40.258c-.676 0-1.223-.55-1.223-1.226 0-.676.547-1.227 1.223-1.227zm0 0"
            ></path>
          </g>
          <mask id="mask6">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip7">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface33" clipPath="url(#clip7)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 93.582H79.14a1.226 1.226 0 110 2.453H40.258c-.676 0-1.223-.55-1.223-1.226 0-.68.547-1.227 1.223-1.227zm0 0"
            ></path>
          </g>
          <mask id="mask7">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip8">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface36" clipPath="url(#clip8)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 99.305h19.597c.676 0 1.223.547 1.223 1.222 0 .68-.547 1.227-1.223 1.227H40.258a1.223 1.223 0 01-1.223-1.227c0-.675.547-1.222 1.223-1.222zm0 0"
            ></path>
          </g>
          <mask id="mask8">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip9">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface39" clipPath="url(#clip9)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 116.465H79.14a1.226 1.226 0 110 2.453H40.258a1.223 1.223 0 01-1.223-1.227c0-.675.547-1.226 1.223-1.226zm0 0"
            ></path>
          </g>
          <mask id="mask9">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip10">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface42" clipPath="url(#clip10)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 122.188h19.597c.676 0 1.223.55 1.223 1.226 0 .676-.547 1.227-1.223 1.227H40.258c-.676 0-1.223-.551-1.223-1.227s.547-1.227 1.223-1.227zm0 0"
            ></path>
          </g>
          <mask id="mask10">
            <g filter="url(#alpha)">
              <path fillOpacity="0.502" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip11">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface45" clipPath="url(#clip11)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 139.352H79.14a1.226 1.226 0 110 2.453H40.258c-.676 0-1.223-.551-1.223-1.227 0-.68.547-1.226 1.223-1.226zm0 0"
            ></path>
          </g>
          <mask id="mask11">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H195V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip12">
            <path d="M0 0H195V170H0z"></path>
          </clipPath>
          <g id="surface48" clipPath="url(#clip12)">
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M40.258 145.07h19.597c.676 0 1.223.551 1.223 1.227 0 .68-.547 1.226-1.223 1.226H40.258a1.223 1.223 0 01-1.223-1.226c0-.676.547-1.227 1.223-1.227zm0 0"
            ></path>
          </g>
          <image
            id="image85"
            width="195"
            height="170"
            xlinkHref="data:image/png;base64,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"
          ></image>
        </defs>
        <g>
          <path
            fill="#E8EAF6"
            d="M3.262 0H139.52c1.8 0 3.261 1.465 3.261 3.27v134.855c0 1.805-1.46 3.27-3.261 3.27H3.262A3.267 3.267 0 010 138.125V3.27C0 1.465 1.46 0 3.262 0zm0 0"
          ></path>
          <use mask="url(#mask0)" xlinkHref="#surface15"></use>
          <use xlinkHref="#image24"></use>
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M14.277 56.395H89.34a3.268 3.268 0 013.265 3.27v97.667c0 1.805-1.46 3.27-3.265 3.27H14.277a3.267 3.267 0 01-3.261-3.27V59.664c0-1.805 1.46-3.27 3.261-3.27zm0 0"
          ></path>
          <use mask="url(#mask4)" xlinkHref="#surface27"></use>
          <path
            fill="#5267DF"
            fillRule="evenodd"
            d="M33.453 74.785a6.53 6.53 0 01-6.527 6.535 6.53 6.53 0 01-6.528-6.535c0-3.613 2.922-6.539 6.528-6.539 3.605 0 6.527 2.926 6.527 6.54zm0 0"
          ></path>
          <use mask="url(#mask5)" xlinkHref="#surface30"></use>
          <path
            fill="#5267DF"
            fillRule="evenodd"
            d="M33.453 97.668c0 3.613-2.922 6.539-6.527 6.539-3.606 0-6.528-2.926-6.528-6.539 0-3.61 2.922-6.54 6.528-6.54 3.605 0 6.527 2.93 6.527 6.54zm0 0"
          ></path>
          <use mask="url(#mask6)" xlinkHref="#surface33"></use>
          <use mask="url(#mask7)" xlinkHref="#surface36"></use>
          <path
            fill="#5267DF"
            fillRule="evenodd"
            d="M33.453 120.555a6.53 6.53 0 01-6.527 6.535 6.53 6.53 0 01-6.528-6.535c0-3.614 2.922-6.54 6.528-6.54 3.605 0 6.527 2.926 6.527 6.54zm0 0"
          ></path>
          <use mask="url(#mask8)" xlinkHref="#surface39"></use>
          <use mask="url(#mask9)" xlinkHref="#surface42"></use>
          <path
            fill="#5267DF"
            fillRule="evenodd"
            d="M33.453 143.438c0 3.609-2.922 6.539-6.527 6.539-3.606 0-6.528-2.93-6.528-6.54 0-3.609 2.922-6.539 6.528-6.539 3.605 0 6.527 2.93 6.527 6.54zm0 0"
          ></path>
          <use mask="url(#mask10)" xlinkHref="#surface45"></use>
          <use mask="url(#mask11)" xlinkHref="#surface48"></use>
          <use xlinkHref="#image85"></use>
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M14.277 34.734h90.157a3.268 3.268 0 013.265 3.27v7.355c0 1.809-1.46 3.27-3.265 3.27H14.277c-1.8 0-3.261-1.461-3.261-3.27v-7.355c0-1.805 1.46-3.27 3.261-3.27zm0 0"
          ></path>
          <path
            fill="#495DCF"
            fillOpacity="0.2"
            fillRule="evenodd"
            stroke="#5267DF"
            strokeWidth="20"
            d="M134 67c0 37.002-30 66.998-66.999 66.998C29.993 133.998.003 104.002.003 67 .003 29.998 29.993.002 67 .002 104.001.002 134 29.998 134 67zm0 0"
            transform="matrix(.40795 0 0 .40865 124.425 41.683)"
          ></path>
          <path
            fill="none"
            stroke="#5267DF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            d="M113.997 115.004l49.006 48.999"
            transform="matrix(.40795 0 0 .40865 124.425 41.683)"
          ></path>
        </g>
      </svg>
    </div>
  )
}
export default Illustration2
