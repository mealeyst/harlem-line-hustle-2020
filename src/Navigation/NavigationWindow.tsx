import { FunctionComponent } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

export interface NavigationWindowProps {
  className?: string
  fill?: string
}

export const NavigationWindow: FunctionComponent<NavigationWindowProps> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1440" height="44" viewBox="0 0 1440 44">
      <clipPath id="clip">
        <polygon points="35 3 45 15.03 125 15.03 135 28.96 215 28.96 225 41 1215 41 1225 28.96 1305 28.96 1315 15.03 1395 15.03 1405 3 35 3"/>
      </clipPath>
      <path className='stroke' d="M0,0,30,44H1410l30-44ZM1395,15h-80L1305,29h-80l-10,12H225L215,29H135L125,15H45L35,3H1405Z"/>
      <g className='blur' style={{clipPath: 'url(#clip)'}}>
        <polygon className="fill" points="35 3 45 15.03 125 15.03 135 28.96 215 28.96 225 41 1215 41 1225 28.96 1305 28.96 1315 15.03 1395 15.03 1405 3 35 3"/>
      </g>
    </svg>
  )
}

const StyledNavigationWindow = styled(NavigationWindow)`
  .stroke {
    fill: ${({fill = colors.green.default}) => fill};
  }
  .fill {
    fill: ${colors.black.default};
    filter: blur(5px) opacity(0.8);
  }
`

export default StyledNavigationWindow