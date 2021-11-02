import { FunctionComponent } from "react"
import styled from "styled-components"
import colors from "../theme/colors"

export interface BufferLeftProps {
  className?: string
  fill?: string
}

const BuffferLeft: FunctionComponent<BufferLeftProps> = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415 44">
      <polygon points="0 0 30 44 45 44 15 0 0 0"/>
      <polygon points="20 0 50 44 65 44 35 0 20 0"/>
      <polygon points="405 29.33 290 29.33 280 14.66 165 14.66 155 0 40 0 70 44 185 44 300 44 300 44 415 44 405 29.33"/>
    </svg>
  )
}

const StyledBufferLeft = styled(BuffferLeft)`
  width: 415px;
  fill: ${({fill = colors.green.default}) => fill};
`

export default StyledBufferLeft