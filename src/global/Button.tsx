import { FunctionComponent, HTMLProps, ReactNode, useState} from "react"
import styled, { css } from "styled-components"
import colors from "../theme/colors"

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  backgroundColor?: string
  children?: ReactNode | ReactNode[]
  className?: string
  fontSize?: number
  minWidth?: number
} 

export const Button: FunctionComponent<ButtonProps> = ({className, color = colors.green.default, children}) => {
  const [hover, setHover] = useState(false);
  const fillFilterProps = {
    filter: hover ? "url(#inset-glow-animated)" : "url(#inset-glow)"
  }
  return (
    <button className={className} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <svg
        className="background"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 25 25"
        width="100%"
        height="100%"
        preserveAspectRatio="none">
          <defs>
            <filter id="inset-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="1">
              </feGaussianBlur>
              <feOffset dx="0" dy="0" result="offsetblur"/>
              <feFlood flood-color={color} result="color"/>
              <feComposite in2="offsetblur" operator="in"/>
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>
            </defs>
            <defs>
            <filter id="inset-glow-animated" x="-50%" y="-50%" width="200%" height="200%">
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="1.5">
                <animate
                  attributeName="stdDeviation"
                  values="1.5;2.25;1.5"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </feGaussianBlur>
              <feOffset dx="0" dy="0" result="offsetblur"/>
              <feFlood flood-color={color} result="color"/>
              <feComposite in2="offsetblur" operator="in"/>
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>
            </defs>
            <polygon vector-effect="non-scaling-stroke" className="a" points="21 1.5 4 1.5 1.5 4 1.5 21 4 23.5 21 23.5 23.5 21 23.5 4 21 1.5" {...fillFilterProps} />
            <polyline vector-effect="non-scaling-stroke" className="b" points="1.5 8.5 1.5 4 4 1.5 8.5 1.5"/>
            <polyline vector-effect="non-scaling-stroke" className="b" points="23.5 8.5 23.5 4 21 1.5 16.5 1.5"/>
            <polyline vector-effect="non-scaling-stroke" className="b" points="1.5 16.5 1.5 21 4 23.5 8.5 23.5"/>
            <polyline vector-effect="non-scaling-stroke" className="b" points="23.5 16.5 23.5 21 21 23.5 16.5 23.5"/>
      </svg>
      <span className="content">{children}</span>
    </button>
  )
}

const StyledButton: FunctionComponent<ButtonProps> = styled(Button)`
background: transparent;
border: none;
position: relative;
color: ${({color = colors.green.default}) => color};
min-width: ${({minWidth = 8}) => minWidth}rem;
box-sizing: border-box;
.background {
  position: absolute;
  left: 0;
  top: 0;
}
.a {
  width: 100%;
  fill: ${({backgroundColor = colors.black.default}) => backgroundColor};
}
.a, .b {
  stroke: ${({color = colors.green.default}) => color};
  stroke-miterlimit: 10;
  stroke-width: 2;
}

.b {
  fill: none;
  stroke-width: 6;
}
.content {
  display: inline-block;
  position: relative;
  font-size: ${({fontSize =  1}) => fontSize}rem;
  text-transform: uppercase;
  padding: 0.5em 0.75em;
  font-weight: bold;
}
&:hover .content {
  ${({color = colors.green.default}) => css`text-shadow:
      0 0 2px ${colors.white.default},
      0 0 10px ${color};
    `}
}
`

export default StyledButton