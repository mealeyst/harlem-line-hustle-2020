import { FunctionComponent } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

const TopLeftTout: FunctionComponent<ToutProps> = ({className, viewBoxWidth = 540}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} 355`}>
      <defs>
        <clipPath id="clipShape">
          <polygon points={`0 66 50 0 ${viewBoxWidth} 0 ${viewBoxWidth} 290 ${viewBoxWidth - 49.54} 355 0 355 0 66`}/>
        </clipPath>
        <clipPath id="clipTop">
          <polygon points="14 71 61 9 526 9 526 71 14 71"/>
        </clipPath>
        <clipPath id="clipBottom">
          <polygon points="14 346 14 284 526 284 479 346 14 346"/>
        </clipPath>
        <filter id="warm-sea" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feColorMatrix type="matrix" values="1 0 0 0 0
        1 0 0 0 0
        1 0 0 0 0
        0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
          <feComponentTransfer in="colormatrix" result="componentTransfer">
                <feFuncR type="table" tableValues="0.29 0.01 0.97"/>
            <feFuncG type="table" tableValues="0.12 0.52 0.94"/>
            <feFuncB type="table" tableValues="0.37 0.59 0.47"/>
            <feFuncA type="table" tableValues="0 1"/>
            </feComponentTransfer>
          <feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend"/>
        </filter>
      </defs>
      <g style={{clipPath: 'url(#clipShape)'}}>
        <image href="https://picsum.photos/540/355" />
        <image className='fade-on-hover' href="https://picsum.photos/540/355" filter="url(#warm-sea)" />
        </g>
      <g style={{clipPath: 'url(#clipTop)'}}>
        <polygon className="banner" points={`14 71 61 9 526 9 ${viewBoxWidth - 14} 71 14 71`}/>
      </g>
      <g style={{clipPath: 'url(#clipBottom)'}}>
        <polygon className="banner" points={`14 346 14 284 ${viewBoxWidth - 14} 284 479 346 14 346`}/>
      </g>
      <path className="stroke" d={`M50,0,0,66V355H490.46L${viewBoxWidth},290V0ZM515,275l11,9-47,62H14V71L61,9H526V71l-11,9`}/>
      <path className="stroke" d="M14,284"/>
      <polygon className="stroke" points={`14 280 ${viewBoxWidth - 18.81} 280 ${viewBoxWidth - 14} 284 14 284 14 280`}/>
      <polygon className="stroke" points={`14 75 ${viewBoxWidth - 18.81} 75 ${viewBoxWidth - 14} 71 14 71 14 75`}/>
    </svg>
  )
}

const ToutMap = {
  'topLeft': TopLeftTout
}

export interface ToutProps {
  className?: string
  type?: keyof typeof ToutMap
  stroke?: string
  viewBoxWidth?: number
}

export const Tout: FunctionComponent<ToutProps> = (props) => {
  const {type = 'topLeft'} = props
 const ToutToRender = ToutMap[type]
 return (<ToutToRender {...props} />)
}

const StyledTout = styled(Tout)`
  &:hover .fade-on-hover {
    opacity: 0;
  }
  .fade-on-hover {
    transition: opacity 0.25s ease-in-out;
  }
  .stroke {
    fill: ${({stroke = colors.green.default}) => stroke};
  }
  .banner {
    fill: ${colors.black.default};
    filter: blur(5px) opacity(0.8);
  }
`

StyledTout.defaultProps = {
  type: 'topLeft'
}

export default StyledTout