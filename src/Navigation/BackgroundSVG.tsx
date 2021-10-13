import { FunctionComponent } from 'react'
import styled from 'styled-components'
import colors from '../theme/colors'

export interface BackgroundSVGProps {
  backgroundColor?: string
  className?: string
  color?: string
}

const BackgroundSVG: FunctionComponent<BackgroundSVGProps> = ({className, color = colors.green.default}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <defs>
      <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="10">
        <animate
          attributeName="stdDeviation"
          values="15;18;15;13;15"
          dur="15s"
          repeatCount="indefinite"
        />
        </feGaussianBlur>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feFlood flood-color={color} result="color"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
      </defs>
      <polygon className="a" points="216 5 192.5 21 183.5 21 207 5 216 5"/>
      <polygon className="a" points="204 5 180.5 21 171.49 21 194.99 5 204 5"/>
      <polygon className="a" points="192 5 168.5 21 159.5 21 183 5 192 5"/>
      <polygon className="a" points="180 5 156.5 21 147.5 21 171 5 180 5"/>
      <polygon filter="url(#inset-shadow)" className="b body" points="720 198 792 198 817 173 1001 173 1026 148 1413 148 1438 123 1438 52 1413 27 1332 27 1244.5 27 1219.5 10 720 10 220.5 10 195.5 27 108 27 27 27 2 52 2 123 27 148 414 148 439 173 623 173 648 198 720 198"/>
      <polyline className="c" points="720 10 220.5 10 195.5 27 108 27"/>
      <polyline className="c" points="720 10 1219.5 10 1244.5 27 1332 27"/>
      <polygon className="a" points="1224 5 1247.5 21 1256.5 21 1233 5 1224 5"/>
      <polygon className="a" points="1236 5 1259.5 21 1268.51 21 1245.01 5 1236 5"/>
      <polygon className="a" points="1248 5 1271.5 21 1280.5 21 1257 5 1248 5"/>
      <polygon className="a" points="1260 5 1283.5 21 1292.5 21 1269 5 1260 5"/>
    </svg>

  )
}
const StyledBackgroundSVG: FunctionComponent<BackgroundSVGProps> = styled(BackgroundSVG)`
  position: absolute;
  width: 100%;
  .a {
    fill: ${({color = colors.green.default}) => color};
  }
  .b, .c {
    fill: none;
    stroke: ${({color = colors.green.default}) => color};
    stroke-miterlimit: 10;
  }

  .body {
    fill: ${({backgroundColor = colors.black.default}) => backgroundColor};
  }

  .b {
    stroke-width: 3px;
  }

  .c {
    stroke-width: 10px;
  }
`

export default StyledBackgroundSVG