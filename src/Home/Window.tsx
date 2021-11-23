import { FunctionComponent } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

export interface WindowProps {
  className?: string,
  fill?: string
}

export const Window: FunctionComponent<WindowProps> = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 910" preserveAspectRatio="none">
      <clipPath id="clip">
        <polygon points="15 82.5 74.5 15 1425 15 1425 827.5 1357.5 895 1189 895 1204 875 751 875 736 895 395 895 380 875 15 875 15 82.5"/>
      </clipPath>
      <path className="stroke" d="M67,0,0,75V910H1365l75-75V0ZM1425,827.5,1357.5,895H1189l15-20H751l-15,20H395l-15-20H15V82.5L74.5,15H1425Z"/>
      <polygon className="fill" points="15 82.5 74.5 15 1425 15 1425 827.5 1357.5 895 1189 895 1204 875 751 875 736 895 395 895 380 875 15 875 15 82.5"/>
    </svg>
  )
}

const StyledWindow = styled(Window)`
  .stroke {
    fill: ${({fill = colors.green.default}) => fill};
  }
  .fill {
    fill: ${colors.black.default};
    filter: blur(5px) opacity(0.8);
  }
`

export default StyledWindow