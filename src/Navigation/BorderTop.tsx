import classNames from 'classnames';
import { FunctionComponent} from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../theme/colors';

export interface BorderTopProps {
  animate?: boolean
  className?: string
  color?: string
}

export const BorderTop: FunctionComponent<BorderTopProps> = ({className, animate = false}) => {
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
      <polygon filter="url(#glow)" className="a" points="4.11 10.01 7 5 1352 5 1375.09 45 1370.21 45 1350 10 4.11 10.01"/>
      <polygon filter="url(#glow)" className={hashClasses} points="1380 45 1357 5 1362 5 1385 45 1380 45"/>
      <polygon filter="url(#glow)" className={hashClasses} points="1390 45 1367 5 1372 5 1395 45 1390 45"/>
      <polygon filter="url(#glow)" className={hashClasses} points="1400 45 1377 5 1382 5 1405 45 1400 45"/>
      <polygon filter="url(#glow)" className={hashClasses} points="1410 45 1387 5 1392 5 1415 45 1410 45"/>
      <polygon filter="url(#glow)" className={hashClasses} points="1420 45 1397 5 1402 5 1425 45 1420 45"/>
      <polygon filter="url(#glow)" className={hashClasses} points="1430 45 1407 5 1412 5 1435 45 1430 45"/>
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

const StyledBorderTop: FunctionComponent<BorderTopProps> = styled(BorderTop)`
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

export default StyledBorderTop