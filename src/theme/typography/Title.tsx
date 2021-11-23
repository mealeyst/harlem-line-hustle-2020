import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import colors from "../colors";

export interface TitleProps {
  className?: string
  children: ReactNode
  color?: string
}

export interface TitleFlairProps {
  className?: string
  color?: string
}

const TitleBefore:FunctionComponent<TitleFlairProps> = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="85" height="44" viewBox="0 0 85 44">
      <polygon points="40 0 70 44 85 44 55 0 40 0"/>
      <polygon points="20 0 50 44 65 44 35 0 20 0"/>
      <polygon points="0 0 30 44 45 44 15 0 0 0"/>
    </svg>
  )
}

const StyledTitleBefore = styled(TitleBefore)`
  fill: ${({color = colors.green.default}) => color};
`

const TitleAfter:FunctionComponent<TitleFlairProps> = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="85" height="44" viewBox="0 0 85 44">
    <polygon points="45 0 15 44 0 44 30 0 45 0"/>
    <polygon points="65 0 35 44 20 44 50 0 65 0"/>
    <polygon points="85 0 55 44 40 44 70 0 85 0"/>
    </svg>
  )
}

const StyledTitleAfter = styled(TitleAfter)`
  fill: ${({color = colors.green.default}) => color};
`

export const Title:FunctionComponent<TitleProps> = (props) => {
  const { className, children, color } = props
  return (
    <span className={className}>
      <StyledTitleBefore color={color} />
      <h1>{children}</h1>
      <StyledTitleAfter color={color} />
    </span>
  )
}

const StyledTitle = styled(Title)`
  display: flex;
  justify-content: center;
  color: ${({color = colors.green.default}) => color};
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  ${StyledTitleBefore} {
    margin-right: 1.875rem;
  }
  ${StyledTitleAfter} {
    margin-left: 1.875rem;
  }
`

export default StyledTitle