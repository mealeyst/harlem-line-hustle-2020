import classNames from 'classnames';
import { FunctionComponent} from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../theme/colors';

export interface BorderBottomProps {
  animate?: boolean
  className?: string
  color?: string
}

export const BorderBottom: FunctionComponent<BorderBottomProps> = ({className, animate = false}) => {
  const hashClasses = classNames('a hash', {
    animate
  })
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1440" height="50" viewBox="0 0 1440 50">
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <polygon filter="url(#glow)" className="a" points="1435 39.99 1432.11 45 87.11 45 64.02 5 68.9 5 89.11 40 1435 39.99"/>
      <polygon filter="url(#glow)" className={hashClasses} points="59.11 5 82.11 45 77.11 45 54.11 5 59.11 5"/>
      <polygon filter="url(#glow)" className={hashClasses} points="49.11 5 72.11 45 67.11 45 44.11 5 49.11 5"/>
      <polygon filter="url(#glow)" className={hashClasses} points="39.11 5 62.11 45 57.11 45 34.11 5 39.11 5"/>
      <polygon filter="url(#glow)" className={hashClasses} points="29.11 5 52.11 45 47.11 45 24.11 5 29.11 5"/>
      <polygon filter="url(#glow)" className={hashClasses} points="19.11 5 42.11 45 37.11 45 14.11 5 19.11 5"/>
      <polygon filter="url(#glow)" className={hashClasses} points="9.11 5 32.11 45 27.11 45 4.11 5 9.11 5"/>
    </svg>
  )
}

const hashAnimation = keyframes`
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledBorderBottom: FunctionComponent<BorderBottomProps> = styled(BorderBottom)`
  .a {
    fill: ${({color = colors.green.default}) => color};
  }
  .hash {
    transition: opacity 5s ease-in-out;
  }
  .hash.animate {
    animation: ${hashAnimation} 5s ease-in-out infinite;
    &:nth-of-type(2) {
      animation-delay: 0s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.7142857143s;
    }
    &:nth-of-type(4) {
      animation-delay: 1.4285714286s;
    }
    &:nth-of-type(5) {
      animation-delay: 2.1428571429s;
    }
    &:nth-of-type(6) {
      animation-delay: 2.8571428571s;
    }
    &:nth-of-type(7) {
      animation-delay: 3.5714285714s;
    }
  }
`

export default StyledBorderBottom