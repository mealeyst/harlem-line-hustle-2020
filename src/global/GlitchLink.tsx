import {Children, HTMLProps} from 'react'
import styled, { css, keyframes } from 'styled-components'
import colors from '../theme/colors'

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  backgroundColor?: string,
  children: string,
  color?: string,
  fontWeight?: string,
  selectionColor?: string,
  textTransform?: string,
}
const steps = 20;
const generateNoise = () => {
  let generatedAnim = ''
  for(let i = 0; i < steps; i++) {
    const top = `${Math.round(Math.random() * 100)}%`
    const bottom = `${Math.round(Math.random() * 100)}%`
    generatedAnim =`${generatedAnim}
      ${(i/steps)*100}% {
        clip-path: inset(${top} 0 ${bottom} 0);
      }
    `
  }
  return generatedAnim;
}
const noiseAnimOne = keyframes`
  ${generateNoise()}
`

const noiseAnimTwo = keyframes`${generateNoise()}`

export default styled.a<LinkProps>`
  text-transform: ${({textTransform = 'uppercase'}) => textTransform};
  color: ${({color = colors.green.default}) => color};
  font-weight: ${({fontWeight = 'bold'}) => fontWeight};
  text-shadow: ${({color = colors.green.default}) => `${color} 0px 0px 0.7rem`};
  position: relative;
  &:after {
    content: "${({children}) => children}";
    position: absolute;
    background: ${({backgroundColor = colors.black.default}) => backgroundColor};
    top: 0;
    left: 2px;
    text-shadow: red -1px 0;
    overflow: hidden;
    clip-path: inset(100% 0 100% 0);
    
  }
  &:before {
    content: "${({children}) => children}";
    position: absolute;
    background: ${({backgroundColor = colors.black.default}) => backgroundColor};
    top: 0;
    left: -2px;
    text-shadow: blue 1px 0;
    overflow: hidden;
    clip-path: inset(100% 0 100% 0);
  }
  &::selection {
    background: ${({selectionColor = colors.orange[6]}) => selectionColor};
  }
  &:hover {
    cursor: pointer;
  }
  &:hover::after {
    animation: ${noiseAnimOne} 3s infinite linear alternate-reverse;
  }
  &:hover::before{
    animation: ${noiseAnimTwo} 3s infinite linear alternate-reverse;
  }

`