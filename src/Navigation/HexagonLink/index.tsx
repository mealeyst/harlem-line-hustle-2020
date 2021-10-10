import { FunctionComponent, HTMLProps } from "react";
import styled, { keyframes} from 'styled-components';
import colors from "../../theme/colors";

export interface HexagonLinkProps extends HTMLProps<HTMLAnchorElement> {
  size?: number
  borderColor?: string
  backgroundColor?: string
  color?: string
}

export const HexagonLink: FunctionComponent<HexagonLinkProps> = ({className, children}) => {
  return (
    <a className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 433.01">
        <polygon className="cls-1" points="369.3 10 130.8 10 11.55 216.55 130.8 423.09 369.3 423.09 488.55 216.55 369.3 10"/>
        <polygon className="cls-2" points="356.3 32.52 143.8 32.52 37.55 216.55 143.8 400.58 356.3 400.58 462.55 216.55 356.3 32.52"/>
      </svg>
      <span>
        {children}
      </span>
    </a>
  )
}

const scaleUp = keyframes`
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`

const StyledHexagonLink:FunctionComponent<HexagonLinkProps> = styled(HexagonLink)`
  display: flex;
  width: ${({size = 120}) => size}px;
  position: relative;
  z-index: 1;
  svg {
    width: 100%;
    .cls-1 {
      stroke: ${({borderColor = colors.orange.default}) => borderColor};
      stroke-width: 20;
      fill: none;
      transform-origin: center;
      transform: scale(0.8);
    }
    .cls-2 {
      fill: ${({backgroundColor = colors.black.default}) => backgroundColor}};
    }
  }
    
  span {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({color = colors.white.default}) => color};
    transition: all 0.25s ease-in-out;
    text-transform: uppercase;
    font-weight: bold;
  }

  &:hover {
    z-index: 10;
    svg .cls-1 {
      animation: ${scaleUp} 0.25s 1 ease-in-out, ${pulse} 0.75s both infinite;
    }
    span {
      color: ${({borderColor = colors.orange.default}) => borderColor};
    }
  }
`

export default StyledHexagonLink