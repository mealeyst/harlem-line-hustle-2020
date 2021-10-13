import {
  FunctionComponent,
  ReactNode
} from 'react';
import styled, { keyframes } from 'styled-components'
import BackgroundSVG from './BackgroundSVG';

export type NavigationProps = {
  children: ReactNode[],
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

export const Navigation:FunctionComponent<NavigationProps> = ({className, children}) => {

  return (
    <nav className={className}>
      <BackgroundSVG />
      <ul>
        {children.map((child) => {
          return (
            <li>{child}</li>
          )
        })}
      </ul>
    </nav>
  )
}
const StyledNavigation:FunctionComponent<NavigationProps> = styled(Navigation)`
max-width: 1440px;
margin-left: auto;
margin-right: auto;
position: relative;
height: 200px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
top: 0;
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  height: 75px;
  padding-bottom: 1%;
}
li{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}
`
export default StyledNavigation

