import { FunctionComponent } from "react";
import styled from "styled-components";
import colors from "../theme/colors";


export interface LogoProps {
  className?: string
  fill?: string
}

export const Logo: FunctionComponent<LogoProps> = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.5 236.11">
      <path className="stroke" d="M167.24,148.91a64.14,64.14,0,1,0-106.82.2"/>
      <path className="stroke" d="M172.22,206.05a109.27,109.27,0,1,0-117.3-.25"/>
      <path className="stroke" d="M167.24,180.92A86.19,86.19,0,1,0,60.42,181"/>
      <path className="fill" d="M160.28,101.29a12.92,12.92,0,0,0-12.91-12.91H80.13a12.92,12.92,0,0,0-12.91,12.91v49.85h93.06Zm-50,37.06a6.32,6.32,0,0,1-6.31,6.31H82.19a6.32,6.32,0,0,1-6.31-6.31V102.46a6.32,6.32,0,0,1,6.31-6.31h21.73a6.32,6.32,0,0,1,6.31,6.31v35.89Zm41.68,0a6.32,6.32,0,0,1-6.32,6.31H123.87a6.32,6.32,0,0,1-6.32-6.31V102.46a6.32,6.32,0,0,1,6.32-6.31h21.72a6.32,6.32,0,0,1,6.32,6.31v35.89Z"/>
      <rect className="fill" x="67.22" y="153.57" width="93.06" height="8.01"/>
      <path className="fill" d="M150.53,189.17h-.2a13,13,0,0,0,10-12.58V164H67.26v12.59a12.92,12.92,0,0,0,10,12.58h-.32L40.51,236.11H58.72L64,228h99.54l4.86,8.09H187Zm-14.08-19a5.06,5.06,0,1,1-5.06,5.05A5.06,5.06,0,0,1,136.45,170.2Zm-45.72,0a5.06,5.06,0,1,1-5.06,5.05A5,5,0,0,1,90.73,170.2Zm-4.29,19.34h53.81l5.47,8.58H81.78Zm-16,27.55,4.46-7.69h77.28l4.85,7.69Z"/>
    </svg>
  )
}

const StyledLogo = styled(Logo)`
  .stroke {
    fill:none;
    stroke:${({fill = colors.green.default}) => fill};
    stroke-linecap:round;
    stroke-miterlimit:10;
    stroke-width:9px
  }
  .fill {
    Fill:${({fill = colors.green.default}) => fill};
  }
`

export default StyledLogo