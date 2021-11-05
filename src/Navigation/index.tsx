import {
  FunctionComponent,
  ReactNode,
  useState
} from 'react';
import styled, { keyframes } from 'styled-components'
import colors from '../theme/colors';
import NavigationWindow from './NavigationWindow';

export type NavigationProps = {
  animate?: boolean
  children: ReactNode[]
  backgroundColor?: string
  borderColor?: string
  className?: string
  color?: string
  duration?: number
}

export interface NavigationRefElements {
  about: HTMLAnchorElement | null,
  projects: HTMLAnchorElement | null,
  home: HTMLAnchorElement | null,
  blog: HTMLAnchorElement | null,
  contact: HTMLAnchorElement | null
}

export interface NavigationRefs {
  current: NavigationRefElements
}

export interface SliderRef {
  current: HTMLSpanElement | null | undefined
}

export const Navigation:FunctionComponent<NavigationProps> = ({animate = false, className, children}) => {
  return (
    <header className={className}style={{position: "fixed", top: 0, left: 0, width: '100%'}}>
      <nav>
      <NavigationWindow />
        <ul>
          {children.map((child) => {
            return (
              <li>{child}</li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
const StyledNavigation:FunctionComponent<NavigationProps> = styled(Navigation)`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 10;
height: 4.5rem;
nav {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
  height: 3.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
}
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr [col-start]);
  column-gap: 1rem;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 2rem;
  position: relative;
  z-index: 10;
  padding: 0 13rem;
}
li{
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-of-type {
    margin-right: 0;
  }
}
${NavigationWindow} {
  position: absolute;
  left: 0;
  right:0;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

a {
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({color = colors.green.default}) => color};
  transition: text-shadow 0.25s ease-in;
  text-decoration: none;
  &:hover {
    text-shadow: ${({color = colors.green.default}) => `${color} 0px 0px 1rem, ${color} 0px 0px 0.7rem`};
    cursor: pointer;
  }
}

`
export default StyledNavigation

