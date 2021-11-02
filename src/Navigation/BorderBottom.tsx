import { FunctionComponent } from "react";
import styled from "styled-components";
import colors from "../theme/colors";

export interface BorderBottomProps {
  className?: string
  fill?: string
}

export const BorderBottom: FunctionComponent<BorderBottomProps> = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1011.02" height="3" viewBox="0 0 1011.02 3">
      <polyline points="0 0.04 2.02 3 1011.02 3 1008.97 0"/>
    </svg>
  )
}

const StyledBorderBottom = styled(BorderBottom)`
  fill: ${({fill = colors.green.default}) => fill};
`

export default StyledBorderBottom