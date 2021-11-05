import { FunctionComponent } from 'react';
import styled from 'styled-components';
import colors from '../theme/colors';

const ImageFilter = () => (
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
)

const TopLeftTout: FunctionComponent<ToutProps> = ({className, viewBoxWidth = 540}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} 355`}>
      <defs>
        <clipPath id="clipShapeTopLeft">
          <polygon points={`0 66 50 0 ${viewBoxWidth} 0 ${viewBoxWidth} 290 ${viewBoxWidth - 49.54} 355 0 355 0 66`}/>
        </clipPath>
        <clipPath id="clipTopToutTopLeft">
          <polygon points={`14 71 61 9 ${viewBoxWidth - 14} 9 ${viewBoxWidth - 14} 71 14 71`}/>
        </clipPath>
        <clipPath id="clipBottomToutTopLeft">
          <polygon points={`14 346 14 284 ${viewBoxWidth - 14} 284 479 346 14 346`}/>
        </clipPath>
        <ImageFilter />
      </defs>
      <g style={{clipPath: 'url(#clipShapeTopLeft)'}}>
        <image href="https://picsum.photos/540/355" />
        <image className='fade-on-hover' href="https://picsum.photos/540/355" filter="url(#warm-sea)" />
      </g>
      <g style={{clipPath: 'url(#clipTopToutTopLeft)'}}>
        <polygon className="banner" points={`14 71 61 9 ${viewBoxWidth - 14} 9 ${viewBoxWidth - 14} 71 14 71`}/>
      </g>
      <g style={{clipPath: 'url(#clipBottomToutTopLeft)'}}>
        <polygon className="banner" points={`14 346 14 284 ${viewBoxWidth - 14} 284 479 346 14 346`}/>
      </g>
      <path className="stroke" d={`M50,0,0,66V355H490.46L${viewBoxWidth},290V0ZM515,275l11,9-47,62H14V71L61,9H${viewBoxWidth - 14}V71l-11,9`}/>
      <path className="stroke" d="M14,284"/>
      <polygon className="stroke" points={`14 280 ${viewBoxWidth - 18.81} 280 ${viewBoxWidth - 14} 284 14 284 14 280`}/>
      <polygon className="stroke" points={`14 75 ${viewBoxWidth - 18.81} 75 ${viewBoxWidth - 14} 71 14 71 14 75`}/>
    </svg>
  )
}

const TopRightTout: FunctionComponent<ToutProps> = ({className, viewBoxWidth = 540}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} 355`}>
      <defs>
        <clipPath id="clipShapeTopRight">
          <polygon points="540 66 490 0 0 0 0 290 49.54 355 540 355 540 66"/>
        </clipPath>
        <clipPath id="clipTopToutTopRight">
          <polygon points={`${viewBoxWidth - 14} 71 479 9 14 9 14 71 ${viewBoxWidth - 14} 71`}/>        
        </clipPath>
        <clipPath id="clipBottomToutTopRight">
          <polygon points={`${viewBoxWidth - 14} 346 ${viewBoxWidth - 14} 284 14 284 61 346 ${viewBoxWidth - 14} 346`}/>
        </clipPath>
      </defs>
      <g style={{clipPath: 'url(#clipShapeTopRight)'}}>
        <image href="https://picsum.photos/540/355" />
        <image className='fade-on-hover' href="https://picsum.photos/540/355" filter="url(#warm-sea)" />
      </g>
      <g style={{clipPath: 'url(#clipTopToutTopRight)'}}>
        <polygon className="banner" points={`${viewBoxWidth - 14} 71 479 9 14 9 14 71 ${viewBoxWidth - 14} 71`}/>
      </g>
      <g style={{clipPath: 'url(#clipBottomToutTopRight)'}}>
        <polygon className="banner" points={`${viewBoxWidth - 14} 346 ${viewBoxWidth - 14} 284 14 284 61 346 ${viewBoxWidth - 14} 346`}/>
        </g>
      <polygon className="stroke" points={`${viewBoxWidth - 14} 75 18.81 75 14 71 ${viewBoxWidth - 14} 71 ${viewBoxWidth - 14} 75`}/>
      <polygon className="stroke" points={`${viewBoxWidth - 14} 280 18.81 280 14 284 ${viewBoxWidth - 14} 284 ${viewBoxWidth - 14} 280`}/>
      <path className="stroke" d={`M0,0V290l49.54,65H${viewBoxWidth}V66L490,0ZM25,80,14,71V9H479l47,62V346H61L14,284l11-9`}/>
    </svg>
  )
}

const ToutMap = {
  'topLeft': TopLeftTout,
  'topRight': TopRightTout
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