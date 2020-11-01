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
const Illustration3 = ({ className, fill, width, height }: IIllustrationProps) => {
  const classes = useImageStyles()
  return (
    <div className={classnames(className, classes.iconWrapper)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="196pt"
        height="170pt"
        viewBox="0 0 196 170"
      >
        <defs>
          <filter id="alpha" width="100%" height="100%" x="0%" y="0%" filterUnits="objectBoundingBox">
            <feColorMatrix in="SourceGraphic" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
          </filter>
          <image
            id="image16"
            width="196"
            height="170"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACqCAYAAADyWOBBAAAABmJLR0QA/wD/AP+gvaeTAAABYElEQVR4nO3TIU4DURRA0fdnGgIYBIYVVIPEEBJQGBJWwBpwTRCwEzwGWYVE4BBINAqJIdN+7FNMQmg+Sc9ZwTW3RETM+/50GnFzWet0EVEC/sh2xOKxlNf7UmYXw/DcumdMeer7k+Na50ZglXYjvs667vBuGF5at/yk24u4NQOr9hGxsVPrdeuOMd1RrfutI1gPk1oPWjeM6d4jNltHsB7eIrZaN4zpWgfAf2IISAwBiSEgMQQkhoDEEJAYAhJDQGIISAwBiSEgMQQkhoDEEJAYAhJDQGIISAwBiSEgMQQkk/NSZq0jWA9XpXw+LJetMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDf+QbvtiadHcyCrwAAAABJRU5ErkJggg=="
          ></image>
          <mask id="mask0">
            <g filter="url(#alpha)">
              <use xlinkHref="#image16"></use>
            </g>
          </mask>
          <mask id="mask1">
            <g filter="url(#alpha)">
              <path fillOpacity="0.243" d="M0 0H196V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip2">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface7" clipPath="url(#clip2)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M24.266 13.508c0 3.953-3.192 7.16-7.13 7.16-3.937 0-7.128-3.207-7.128-7.16 0-3.953 3.191-7.156 7.129-7.156 3.937 0 7.129 3.203 7.129 7.156zm0 0"
            ></path>
          </g>
          <mask id="mask2">
            <g filter="url(#alpha)">
              <path fillOpacity="0.749" d="M0 0H196V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip3">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface10" clipPath="url(#clip3)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M32.281 9.035h50.782a1.34 1.34 0 011.335 1.344c0 .738-.597 1.34-1.335 1.34H32.28a1.339 1.339 0 01-1.336-1.34 1.34 1.34 0 011.336-1.344zm0 0"
            ></path>
          </g>
          <mask id="mask3">
            <g filter="url(#alpha)">
              <path fillOpacity="0.251" d="M0 0H196V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip4">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface13" clipPath="url(#clip4)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M32.281 15.297h25.836a1.34 1.34 0 011.336 1.344 1.34 1.34 0 01-1.336 1.343H32.281a1.34 1.34 0 01-1.336-1.343 1.34 1.34 0 011.336-1.344zm0 0"
            ></path>
          </g>
          <clipPath id="clip1">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface18" clipPath="url(#clip1)">
            <path fill="#242A45" fillRule="evenodd" d="M-1.574.09H242.09v26.394H-1.574zm0 0"></path>
            <use mask="url(#mask1)" xlinkHref="#surface7"></use>
            <use mask="url(#mask2)" xlinkHref="#surface10"></use>
            <use mask="url(#mask3)" xlinkHref="#surface13"></use>
          </g>
          <image
            id="image22"
            width="196"
            height="170"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACqCAYAAADyWOBBAAAABmJLR0QA/wD/AP+gvaeTAAABu0lEQVR4nO3ToU0EQQBA0ZnNBUE59IA6JBpHD3RFBdSDJrkEx2K/WzmXzXsVfPPHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALhDc3XAkddte3kY47q6g/N7m/PnsjriyOecT2Pf31d3cH5/+/69rY6Ae2IICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCIjL6oAjz2N8Pc75u7qD8/uY8/YPp4kN8AFsZxAAAAAASUVORK5CYII="
          ></image>
          <mask id="mask4">
            <g filter="url(#alpha)">
              <use xlinkHref="#image22"></use>
            </g>
          </mask>
          <clipPath id="clip5">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface24" clipPath="url(#clip5)">
            <path
              fill="#3A499E"
              fillRule="evenodd"
              d="M40.668 149.125a9.19 9.19 0 001.414 2.656c11.227 14.977 53.176 19.965 94.535 16.918 21.594-1.594 36.824-10.972 46.453-19.574a78.687 78.687 0 005.95-5.914 27.254 27.254 0 004.859-7.559c3.406-7.953 2.75-17.14-2.281-24.675-4.266-6.387-10.121-11.106-13.145-16.352-5.762-9.984 24.692-35.223 4.875-51.168-6.996-5.629-21.898-6.93-38.16-6.055-19.79 1.063-41.59 5.348-53.578 8.965-24.82 7.488-40.352 18.336-43.895 30.535-3.547 12.203 5.926 17.727 14.2 29.375 7.792 10.97-26.083 28.18-21.227 42.848"
            ></path>
          </g>
          <image
            id="image28"
            width="196"
            height="170"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACqCAYAAADyWOBBAAAABmJLR0QA/wD/AP+gvaeTAAABg0lEQVR4nO3ToXECQAAAQUAgMGkAHZFSaACBy1AWg0OkgZQSEU0DGAQKexXwP8NuBWdusQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5rYcHcDrfe9+tqMbZnT+3V8N8YYu6/Xn6IYZHR6P/9XoCJiJISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAMASEISAMAWEICENAGALCEBCGgDAEhCEgDAFhCAhDQBgCwhAQhoAwBIQhIAwBYQgIQ0AYAsIQEIaAWI4O4PU2p7+P0Q0zuh+/bqMbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDfyBJetDMSTV0uYAAAAAElFTkSuQmCC"
          ></image>
          <mask id="mask5">
            <g filter="url(#alpha)">
              <use xlinkHref="#image28"></use>
            </g>
          </mask>
          <clipPath id="clip6">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface30" clipPath="url(#clip6)">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M125.145 61.371c3.613 17.969 65.039 45.496 67.992 75.027 3.168-7.941 2.558-17.113-2.125-24.64-3.973-6.375-9.422-11.086-12.239-16.324-5.363-9.97 22.989-35.172 4.54-51.09-6.512-5.625-20.383-6.922-35.52-6.047-4.61 1.055-25.91 6.855-22.648 23.074"
            ></path>
          </g>
          <mask id="mask6">
            <g filter="url(#alpha)">
              <path fillOpacity="0.149" d="M0 0H196V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip7">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface33" clipPath="url(#clip7)">
            <path
              fillRule="evenodd"
              d="M39.281 145.844a9.83 9.83 0 001.621 6.808c9.993 14.618 64.364 19.493 101.176 16.512 19.219-1.555 34.969-11.504 44.567-22.465zm0 0"
            ></path>
          </g>
          <mask id="mask7">
            <g filter="url(#alpha)">
              <path fillOpacity="0.129" d="M0 0H196V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip8">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface36" clipPath="url(#clip8)">
            <path
              fillRule="evenodd"
              d="M163.203 147.547s4.488.273 4.418 1.637c-.066 1.367-2.898 4.367-2.898 4.367l4.234-1.524 12.79-.488-1.384 1.191s-10.3.48-10.761.844c-.461.363-6.352 4.82-7.368 5-1.011.184-65.34.102-65.34.102s-6.62.265-7.726-1.781c-1.102-2.047-5.11-1.91-6.215-.137-1.105 1.773-.95 8.32-.95 8.32s-3.026-.793-3.194-.863c-10.496-4.457-22.235-18.371-22.235-18.371zm0 0"
            ></path>
          </g>
          <mask id="mask8">
            <g filter="url(#alpha)">
              <path fillOpacity="0.184" d="M0 0H196V170H0z"></path>
            </g>
          </mask>
          <clipPath id="clip9">
            <path d="M0 0H196V170H0z"></path>
          </clipPath>
          <g id="surface39" clipPath="url(#clip9)">
            <path
              fill="#F4F2F9"
              fillRule="evenodd"
              d="M102.527 51.902l59.172 83.309v18.898c0 2.106-1.648 3.813-3.68 3.813h-53.527c-2.355 0-4.265-1.977-4.265-4.414V53.605c0-1.308 1.039-1.77 2.3-1.703"
            ></path>
          </g>
        </defs>
        <g>
          <path
            fill="#E8EAF6"
            d="M3.563 0h148.78a3.573 3.573 0 013.567 3.578v147.633a3.573 3.573 0 01-3.566 3.578H3.563A3.57 3.57 0 010 151.211V3.578A3.57 3.57 0 013.563 0zm0 0"
          ></path>
          <use mask="url(#mask0)" xlinkHref="#surface18"></use>
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M15.59 38.027h98.445a3.573 3.573 0 013.567 3.578v8.051a3.576 3.576 0 01-3.567 3.582H15.59c-1.969 0-3.563-1.605-3.563-3.582v-8.05a3.57 3.57 0 013.563-3.579zm0 0M15.59 59.5h98.445a3.573 3.573 0 013.567 3.578v8.055a3.573 3.573 0 01-3.567 3.578H15.59a3.57 3.57 0 01-3.563-3.578v-8.055A3.57 3.57 0 0115.59 59.5zm0 0M15.59 80.973h98.445a3.573 3.573 0 013.567 3.578v8.054a3.573 3.573 0 01-3.567 3.579H15.59a3.57 3.57 0 01-3.563-3.579v-8.054a3.57 3.57 0 013.563-3.578zm0 0M15.59 102.45h98.445a3.573 3.573 0 013.567 3.577v8.051a3.573 3.573 0 01-3.567 3.578H15.59a3.57 3.57 0 01-3.563-3.578v-8.05a3.57 3.57 0 013.563-3.579zm0 0M15.59 123.922h98.445a3.573 3.573 0 013.567 3.578v8.05a3.576 3.576 0 01-3.567 3.583H15.59c-1.969 0-3.563-1.606-3.563-3.582V127.5a3.57 3.57 0 013.563-3.578zm0 0"
          ></path>
          <use mask="url(#mask4)" xlinkHref="#surface24"></use>
          <path fill="#306299" fillRule="evenodd" d="M82.61 77.785l7.566-1.285 1.14 7.066-9.351 2.778zm0 0"></path>
          <path
            fill="#FA9E89"
            fillRule="evenodd"
            d="M90.426 77s5.87-.156 12.027-2.738l-2.89 5.484-8.356 2.57zm0 0"
          ></path>
          <use mask="url(#mask5)" xlinkHref="#surface30"></use>
          <use mask="url(#mask6)" xlinkHref="#surface33"></use>
          <use mask="url(#mask7)" xlinkHref="#surface36"></use>
          <path
            fill="#162F44"
            fillRule="evenodd"
            d="M176.844 130.047l-6.434 21.996s-.918 1.094-1.582.078l4.328-22.383zm8.851-.758l3.176 14.824-1.512 1.73-4.277-16.128zm0 0"
          ></path>
          <path
            fill="#F4F2F9"
            fillRule="evenodd"
            d="M91.098 134.246l-2.684 15.3-.445 2.536.976.145.07.011 2.133.313s7.114-17.598 7.72-21.824c.605-4.223-11.2-21.122-11.2-21.122L74.852 110.7c-.34 3.68 4.785 10.61 9.367 16.004a146.92 146.92 0 006.879 7.543"
          ></path>
          <path
            fill="#E0DFEA"
            fillRule="evenodd"
            d="M90.926 133.555l-3.063 17.789.957.144.032.168.035-.156c.39-1.715 4.96-16.883 5.101-19.973.149-3.277-6.25-13.422-6.25-13.422l-3.547 7.926c3.532 4.239 6.735 7.524 6.735 7.524"
          ></path>
          <path
            fill="#6397D9"
            fillRule="evenodd"
            d="M73.945 111.395l12.77-1.067.594-21.351s-3.118-11.133-6.532-11.133c-2.03 0-4.004.804-5.215 2.77-.824 1.343-1.292 3.23-1.171 5.769.273 5.715-.325 21.879-.43 24.613-.008.262-.016.399-.016.399"
          ></path>
          <path
            fill="#8BBFF7"
            fillRule="evenodd"
            d="M77.457 109.73l-.238-25.421 2.965-6.047-3.461-.418-1.215 1.433c-.797 1.344-1.25 3.23-1.133 5.77.262 5.715-.328 22.27-.43 25.004zm0 0"
          ></path>
          <path fill="#306299" fillRule="evenodd" d="M77.508 85l9.363 17.895.242-8.047.196-6.532L79.504 85zm0 0"></path>
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M101.418 157.922h57.312c2.133 0 3.86-1.75 3.86-3.906V55.352c0-2.157-1.727-3.903-3.86-3.903h-57.312c-2.133 0-3.863 1.746-3.863 3.903v98.664c0 2.156 1.73 3.906 3.863 3.906"
          ></path>
          <path
            fill="#E4DCF1"
            fillRule="evenodd"
            d="M101.117 65.445V105c0 .816.649 1.473 1.45 1.473h55.011c.8 0 1.45-.657 1.45-1.473V65.445c0-.812-.65-1.472-1.45-1.472h-55.012c-.8 0-1.449.66-1.449 1.472"
          ></path>
          <path
            fill="#8E2B43"
            fillRule="evenodd"
            d="M129.691 74.71l.692.528 1.472 6.43-.03 1.059-2.329.035a.865.865 0 01-.46-.11c-.665-.394-.95-1.488-.583-2.457.2-.523.703-1.445.762-1.855.14-.977.476-3.63.476-3.63"
          ></path>
          <path
            fill="#4EC9B4"
            fillRule="evenodd"
            d="M117.602 107.816l24.152-.093.8-.004s2.891-13.711-1.788-18.996c-1.141-1.285-2.621-2.23-4.235-2.848-5.023-1.922-11.34-.652-12.691 3.563-1.79 5.57-6.238 18.378-6.238 18.378"
          ></path>
          <path
            fill="#FA9E89"
            fillRule="evenodd"
            d="M136.379 86.113s-.984 2.696-3.164 3.262c-2.176.57-4.672-1.441-4.465-3.781 0 0 2.086-.309 2.426-1.324.414-1.235.137-1.278.137-1.278s-.817-1.562-1.09-2.695c-.274-1.137.136-5.535 2.039-5.961 1.207-.27 3.133.144 4.492 2.129 0 0-.68 3.832-1.633 5.676-.953 1.843-1.43 2.695 1.258 3.972"
          ></path>
          <use mask="url(#mask8)" xlinkHref="#surface39"></use>
          <path fill="#4EC9B4" fillRule="evenodd" d="M120.273 99.512l-3.109-13.617-4.91.812 4.762 19.766zm0 0"></path>
          <path
            fill="#FA9E89"
            fillRule="evenodd"
            d="M116.176 85.508l-.27-1.39s.805-.528.668-1.321c-.133-.797.137-2.649.137-2.649s-.43-.289-.703.23c-.195.372-.5 1.227-.5 1.227s-1.024-2.757-1.262-3.484c-.098-.312-.2-.793-.433-.719-.122.04-.079.32-.055.594.062.828.41 2.14.41 2.14l-.176.106-.742-2.36c-.031-.116-.086-.288-.207-.296-.106-.012-.211.047-.211.312 0 .532.57 2.72.57 2.72l-.144.097-.86-1.914c-.062-.145-.273-.133-.312.02-.027.12-.02.292.078.534.27.66.535 1.72.535 1.72l-.066.077-.469-.972c-.082-.153-.289-.254-.348-.086-.086.23.649 2.222.649 2.355s.504 1.934 1.035 2.067c.535.132.57 1.379.57 1.379zm0 0"
          ></path>
          <path
            fill="#FFDEDD"
            fillRule="evenodd"
            d="M147.156 118.105h9.934a1.06 1.06 0 001.047-1.07v-1.437c0-.59-.469-1.07-1.047-1.07h-9.934a1.06 1.06 0 00-1.047 1.07v1.437c0 .59.47 1.07 1.047 1.07m-14.254 0h9.934a1.06 1.06 0 001.047-1.07v-1.437c0-.59-.469-1.07-1.047-1.07h-9.934a1.06 1.06 0 00-1.047 1.07v1.437c0 .59.47 1.07 1.047 1.07m-15.144 0h9.933a1.06 1.06 0 001.047-1.07v-1.437c0-.59-.468-1.07-1.047-1.07h-9.933a1.06 1.06 0 00-1.047 1.07v1.437c0 .59.469 1.07 1.047 1.07m-14.254 0h9.93a1.06 1.06 0 001.046-1.07v-1.437c0-.59-.468-1.07-1.046-1.07h-9.93c-.578 0-1.05.48-1.05 1.07v1.437c0 .59.472 1.07 1.05 1.07"
          ></path>
          <path
            fill="#F4F2F9"
            fillRule="evenodd"
            d="M104.48 126.605H157c.629 0 1.137-.484 1.137-1.078v-1.422c0-.597-.508-1.078-1.137-1.078h-52.52c-.628 0-1.136.48-1.136 1.078v1.422c0 .594.508 1.078 1.136 1.078m52.52 7.157c.629 0 1.137-.48 1.137-1.078v-1.422c0-.594-.508-1.078-1.137-1.078h-52.52c-.628 0-1.136.484-1.136 1.078v1.422c0 .597.508 1.078 1.136 1.078zm-52.52 7.16H157c.629 0 1.137-.484 1.137-1.078v-1.422c0-.598-.508-1.078-1.137-1.078h-52.52c-.628 0-1.136.48-1.136 1.078v1.422c0 .594.508 1.078 1.136 1.078m0 5.816H157c.629 0 1.137-.484 1.137-1.078v-1.426c0-.593-.508-1.078-1.137-1.078h-52.52c-.628 0-1.136.485-1.136 1.078v1.426c0 .594.508 1.078 1.136 1.078"
          ></path>
          <path
            fill="#FC516B"
            fillRule="evenodd"
            d="M137.746 73.066s-2.809-3.96-8.105-1.668c-5.293 2.293.453 6.043.453 6.043s.113-1.46.953-1.875l-.07 1.293 2.964.524.477-1.25.305 1.422 1.492.554s-1.219 4.305-1.934 4.93c0 0-.304 1.008-.203 1.219.102.207 4.617 1.351 5.195.312.575-1.043-.613-2.5-.984-3.472-.375-.973.676-6.137-.547-8.032"
          ></path>
          <path
            fill="#E4DCF1"
            fillRule="evenodd"
            d="M150.719 62.184h7.707c.578 0 1.047-.602 1.047-1.34 0-.742-.47-1.344-1.047-1.344h-7.707c-.578 0-1.047.602-1.047 1.344 0 .738.469 1.34 1.047 1.34"
          ></path>
          <path
            fill="#44AD99"
            fillRule="evenodd"
            d="M138.98 94.395s-1.183 8.628-2.542 12.078h-7.153s-1.18-3.641 4.473-4.832c3.933-.829 5.222-7.246 5.222-7.246m-14.078-2.239s-1.453 4.477-1.18 5.817c.27 1.343 1.45 2.328 1.45 3.222 0 .895-.727 4.293-.727 4.293l-4.172.09s.692-.117 2.27-1.363c2.402-1.903.34-6.098.848-8.477.27-1.25 1.511-3.582 1.511-3.582m-4.629 7.059s-.093 3.75-.855 3.172c-.758-.578-.281-6.153-.945-8.078-.664-1.922-2.657-8.079-2.657-8.079l1.707-.335zm0 0"
          ></path>
          <path
            fill="#FA9E89"
            fillRule="evenodd"
            d="M108.969 82.082s-.703.309-1.559 1.363c-.285.348-1.797.903-2.152 1.336-5.188 6.27-12.117 11.114-16.555 9.184-5.672-2.461-6.738-4.75-6.738-4.75l3.746-5.082s4.305 6.601 7.766 4.805c3.464-1.797 10.289-6.512 10.289-6.512l.18-2.895s.398-.105.59.446c.19.554.198 1.03.198 1.03l2.696-3.14s.52-.16.36.344c-.157.504-1.11 1.953-1.11 1.953s-.098.277.11.152c.237-.148 2.12-2.28 2.12-2.28s.434-.028.258.39c-.137.32-1.277 1.828-1.66 2.394-.117.168.125.106.125.106l1.555-1.328c.21-.145.43-.098.39.164-.035.203-.457.68-.71.867-.63.469-1.071 1.32-1.071 1.32l1.355-.492s.266.234-.183.625M77.063 65.535l1.714 12.668 5.633.98s-.285-.296-.61-.699c-.331-.402-.706-.914-.874-1.324-.38-.941-.38-1.82-.38-1.82s2.497.285 2.884-1.16c.39-1.446-.508-8.18-.508-8.18s-1.117-4.23-7.86-.465"
          ></path>
          <path
            fill="#261F27"
            fillRule="evenodd"
            d="M81.793 65.68s2.777 2.105 5.441.312c0 0-1.687-.156-2.214-1.015 0 0 1.05.273 2.289-1.485 0 0-2.176.313-2.926-.347-.754-.665-4.582-1.72-6.871-.118-2.29 1.598-2.25 2.77-2.25 2.77s-1.352.508-1.317 1.285c.04.781 3.34 7.18 3.34 7.18L78 71.414s-.563.168-.902-1.156c-.336-1.328 1.129-.754 1.277-.48.152.273 1.125-1.876 1.125-1.876l-.148-1.246s-.489-1.601 2.441-.976"
          ></path>
          <path
            fill="#FFF"
            fillRule="evenodd"
            d="M76.523 124.988c1.598 6.48-1.359 32.395-1.359 32.395l2.895.539c11.652-26.852 8.988-48.766 8.988-48.766l-13.102 1.082s.035-.547.047-.418c.153 1.344 1.074 9.254 2.531 15.168"
          ></path>
          <path
            fill="#6397D9"
            fillRule="evenodd"
            d="M90.992 150.797l3.367 2.621s1.325-.16 1.579.453c.253.617.28 1.313.28 1.313l-3.519.054-5.836-2.328.918-2.594zm-13.281 7.723s1.187 1.933 2.387 3.515c.406.528 1.39.758 1.773 2.055.328 1.113-.328 1.883-.328 1.883s-2.211-.399-3.75-1.77c-1.54-1.371-3.848-3.996-3.848-3.996l.633-2.285zm0 0"
          ></path>
          <path
            fill="#224A7D"
            fillRule="evenodd"
            d="M166.602 126.156c0 1.73 5.78 3.133 12.918 3.133 7.132 0 12.917-1.402 12.917-3.133 0-1.726-5.785-3.129-12.917-3.129-7.137 0-12.918 1.403-12.918 3.13"
          ></path>
          <path
            fill="#6397D9"
            fillRule="evenodd"
            d="M166.602 125.71c0 1.731 5.78 3.134 12.918 3.134 7.132 0 12.917-1.403 12.917-3.133s-5.785-3.133-12.917-3.133c-7.137 0-12.918 1.402-12.918 3.133"
          ></path>
          <path
            fill="#162F44"
            fillRule="evenodd"
            d="M175.953 123.922c0 .742 2.395 1.34 5.348 1.34s5.344-.598 5.344-1.34c0-.742-2.391-1.344-5.344-1.344-2.953 0-5.348.602-5.348 1.344m16.484 1.34v1.785s-.03 1.101-2.226 1.797l.523-1.934s1.543-.668 1.703-1.648"
          ></path>
          <path
            fill="#8CC5F2"
            fillRule="evenodd"
            d="M166.602 125.262v1.828s-.172.914 2.226 1.754l-.738-2.133s-1.274-.574-1.488-1.45"
          ></path>
          <path
            fill="#FC516B"
            fillRule="evenodd"
            d="M175.063 119.465l.878 3.441c.215.856 1.079 1.461 2.07 1.461h1.887c.707 0 1.348-.305 1.739-.793.136-.168.238-.363.308-.57l.758-2.375.379-1.18zm0 0"
          ></path>
          <path
            fill="#9B293F"
            fillRule="evenodd"
            d="M175.063 119c0 .246 1.796.45 4.011.45 2.211 0 4.008-.204 4.008-.45 0-.246-1.797-.45-4.008-.45-2.215 0-4.012.204-4.012.45"
          ></path>
          <path
            fill="#F995A9"
            fillRule="evenodd"
            d="M180.59 123.77c-.156.058-.305.109-.445.152l.94-.145c.13-.183.231-.386.294-.605l.719-2.508c.035-.121.093-.312.093-.32 0 0-1.879.554-3.562.363.547.074 1.918.184 2.746.145a.307.307 0 01.254.101c.066.07.098.168.086.262-.106.742-.403 2.27-1.125 2.555"
          ></path>
          <path
            fill="#51A595"
            fillRule="evenodd"
            d="M178.629 118.063l.3 1.378.22.008s.015-1.386 1.636-2.238c1.63-.852 1.395-4.027 1.395-4.027v.004c-.04.082-.664 1.386-1.137 1.472-.488.09-.79.871-.79.871s-.233.336-.51.27c-.278-.067-.56.672-.56.672l-.09.78zm0 0"
          ></path>
          <path
            fill="#4EC9B4"
            fillRule="evenodd"
            d="M180.852 120.785s.312-10.484-5.168-13.418c0 0-1.559.606.27 3.117 1.823 2.512.355 4.329 1.155 4.98.801.65 1.961 1.067 1.782 1.907-.176.836.047 1.676.402 1.766.355.093 1.156.59 1.281 1.652zm0 0"
          ></path>
          <path
            fill="#41877A"
            fillRule="evenodd"
            d="M180.855 118.91l.016.531.242.008s.012-1.386 1.778-2.238c1.77-.852 1.515-4.027 1.515-4.027l-.004.004-.148.48c0 2.883-1.656 3.48-2.32 3.867-.664.387-1.079 1.375-1.079 1.375"
          ></path>
          <path
            fill="#306299"
            fillRule="evenodd"
            d="M82.938 79.23s-4.7.079-5.122-.492l-.308.848s3.726 2.039 6.238 1.176zm0 0"
          ></path>
          <path
            fill="#8CC5F2"
            fillRule="evenodd"
            d="M89.535 85.41l-5.605 6.3s-7.496-6.745-7.309-8.862c.188-2.114 2.934-6.493 7.145-2.47 4.097 3.911 5.77 5.032 5.77 5.032"
          ></path>
          <path
            fill="#F4F2F9"
            fillRule="evenodd"
            d="M75.09 157.766l1.14.156s5.36-19 3.594-33.04c-.527-4.218-2.379-14.831-2.379-14.831l-3.5.332c.14 1.351 1.051 8.883 2.418 14.824 1.5 6.516-1.273 32.559-1.273 32.559"
          ></path>
          <path
            fill="#E6846F"
            fillRule="evenodd"
            d="M81.184 78.54c.664.144 1.027.19 1.226.198-.312-.433-.664-.976-.816-1.414-.356-1.004-.356-1.937-.356-1.937s-1.324-.352-1.46-.184c-.137.164 0 3.027 1.406 3.336"
          ></path>
          <path
            fill="#CEC3E2"
            fillRule="evenodd"
            d="M146.11 80.078c0 4.695 3.585 8.5 8.007 8.5 1.848 0 3.555-.668 4.91-1.785V73.367c-1.355-1.12-3.058-1.789-4.91-1.789-4.422 0-8.008 3.809-8.008 8.5"
          ></path>
          <path
            fill="#C3B8D8"
            fillRule="evenodd"
            d="M146.11 80.3c0 4.571 3.335 8.278 7.452 8.278 1.727 0 3.313-.648 4.575-1.738V73.766c-1.262-1.09-2.852-1.739-4.575-1.739-4.117 0-7.453 3.703-7.453 8.274"
          ></path>
          <path
            fill="#44AD99"
            fillRule="evenodd"
            d="M134.527 87.727s.883-.493 1.024-.582c.14-.09 1.957.402 4.379 2.914 2.418 2.511.324 4.617 1.347 5.964 1.024 1.344.047 4.168-.464 6.098-.512 1.93 0 4.352 0 4.352h.835s2.934-12.918-1.812-17.895c-1.156-1.21-2.66-2.105-4.297-2.683zm0 0"
          ></path>
        </g>
      </svg>
    </div>
  )
}
export default Illustration3
