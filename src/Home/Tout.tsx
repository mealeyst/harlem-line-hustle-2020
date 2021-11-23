import classNames from 'classnames';
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

const TopLeftTout: FunctionComponent<ToutProps> = ({className, status, title, type, viewBoxWidth = 540}) => {
  return (
    <a className={classNames(className, type)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} 355`}>
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
      <span className="status">STATUS: {status}</span>
      <span className="title">{title}</span>
    </a>
  )
}

const TopRightTout: FunctionComponent<ToutProps> = ({className, status, title, type, viewBoxWidth = 540}) => {
  return (
    <a className={classNames(className, type)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} 355`}>
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
      <span className="status">STATUS: {status}</span>
      <span className="title">{title}</span>
    </a>
  )
}

const BottomLeftTout: FunctionComponent<ToutProps> = ({className, title, type, viewBoxWidth = 450}) => {
  return (
    <a className={classNames(className, type)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBoxWidth} 390`}>
        <defs>
          <clipPath id="clipShapeBottomLeft">
            <polygon points="49.98 390 0 340 0 0 450 0 450 390 49.98 390"/>
          </clipPath>
          <clipPath id="clipTopToutBottomLeft">
            <rect x="14" y="9" width={viewBoxWidth - 28} height="60"/>
          </clipPath>
        </defs>
        <g style={{clipPath: 'url(#clipShapeBottomLeft)'}}>
            <image href="https://picsum.photos/475/412" />
            <image className='fade-on-hover' href="https://picsum.photos/475/412" filter="url(#warm-sea)" />
        </g>
        <g style={{clipPath: 'url(#clipTopToutBottomLeft)'}}>
          <rect className="banner" x="14" y="9" width={viewBoxWidth - 28} height="60"/>
        </g>
        <path className="stroke" d={`M0,0V340l50,50H${viewBoxWidth}V0ZM${viewBoxWidth - 14},381H60.87L14,333.31V273l9-8.73V78l-9-9V9H${viewBoxWidth - 14}V225l-9,9V357l9,9Z`}/>
        <polygon className="stroke" points={`${viewBoxWidth - 14} 69 ${viewBoxWidth - 14} 75 19.88 75 14 69 ${viewBoxWidth - 14} 69`}/>
      </svg>
      <span className="title">{title}</span>
    </a>
  )
}

const BottomCenterTout: FunctionComponent<ToutProps> = ({className, title, type, viewBoxWidth = 450}) => {
  return (
    <a className={classNames(className, type)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="445" height="390" viewBox="0 0 445 390">
        <defs>
          <clipPath id="clipShapeBottomCenter">
            <polygon points="48.33 0 0 50.28 0 390 445 390 445 50.28 395 0.32 48.33 0"/>
          </clipPath>
          <clipPath id="clipTopToutBottomCenter">
            <polygon className="b" points="14 57.16 59 9.16 384 9.16 431 57.16 431 69.16 14 69.16 14 57.16"/>
          </clipPath>
        </defs>
        <g style={{clipPath: 'url(#clipShapeBottomCenter)'}}>
            <image href="https://picsum.photos/445/390" />
            <image className='fade-on-hover'href="https://picsum.photos/445/390" filter="url(#warm-sea)" />
        </g>
        <g style={{clipPath: 'url(#clipTopToutBottomCenter)'}}>
          <polygon className="banner" points="14 57.16 59 9.16 384 9.16 431 57.16 431 69.16 14 69.16 14 57.16"/>
        </g>
        <path className="stroke" d="M395,.32,48.33,0,0,50.28V390H445V50.28ZM431,381l-417,.16v-166l9-9v-128l-9-9V57L59.29,9l324.86.3L431,57v12.2l-9,11v126l9,9Z"/>
        <polygon className="stroke" points="14 69.16 431 69.16 427.73 73.16 18 73.16 14 69.16"/>
      </svg>
      <span className="title">{title}</span>
    </a>

  )
}

const BottomRightTout: FunctionComponent<ToutProps> = ({className, title, type, viewBoxWidth = 450}) => {
  return (
    <a className={classNames(className, type)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="450" height="390" viewBox="0 0 450 390">
        <defs>
          <clipPath id="clipShapeBottomRight">
            <polygon points="400.02 390 450 340 450 0 0 0 0 390 400.02 390"/>
          </clipPath>
          <clipPath id="clipTopToutBottomRight">
          <rect x="14" y="9" width={viewBoxWidth - 28} height="60"/>
        </clipPath>
        </defs>
        <g style={{clipPath: 'url(#clipShapeBottomRight)'}}>
          <image href="https://picsum.photos/475/412" />
          <image className='fade-on-hover' href="https://picsum.photos/475/412" filter="url(#warm-sea)" />
        </g>
        <g style={{clipPath: 'url(#clipTopToutBottomRight)'}}>
          <rect className="border" x="14" y="9" width="422" height="60"/>
        </g>
        <path className="stroke" d="M0,0V390H400l50-50V0ZM14,366l9-9V234l-9-9V9H436V69l-9,9V264.25l9,8.73v60.33L389.13,381H14Z"/>
        <polygon className="stroke" points="14 69 14 75 430.12 75 436 69 14 69"/>
      </svg>
      <span className="title">{title}</span>
    </a>
  )
}

const ToutMap = {
  'topLeft': TopLeftTout,
  'topRight': TopRightTout,
  'bottomLeft': BottomLeftTout,
  'bottomCenter': BottomCenterTout,
  'bottomRight': BottomRightTout
}

export interface ToutProps {
  className?: string
  type?: keyof typeof ToutMap
  status?: string
  color?: string
  title: string
  viewBoxWidth?: number
}

export const Tout: FunctionComponent<ToutProps> = (props) => {
  const {type = 'topLeft'} = props
 const ToutToRender = ToutMap[type]
 return (<ToutToRender {...props} />)
}

const StyledTout = styled(Tout)`
  color: ${({color = colors.green.default}) => color};
  span {
    font-size: 1.75rem;
    font-weight: bold;
    text-transform: uppercase;
    transition: text-shadow 0.25s ease-in;
    padding-top: 6px;
  }
  &:hover {
    cursor: pointer;
    span {
      text-shadow: ${({color = colors.green.default}) => `${color} 0px 0px 1rem`};
    }
    .fade-on-hover {
      opacity: 0;
    }
  }
  .fade-on-hover {
    transition: opacity 0.25s ease-in-out;
  }
  .stroke {
    fill: ${({color = colors.green.default}) => color};
  }
  .banner {
    fill: ${colors.black.default};
    filter: blur(5px) opacity(0.8);
  }
  &.topLeft, &.topRight, &.bottomLeft, &.bottomCenter, &.bottomRight {
    position: relative;
  }
  &.topLeft {
    .status {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      top: 10px;
      right: 15px;
      left: 60px;
      padding-right: 1rem;
      height: 61px;
      box-sizing: border-box;
    }
    .title {
      position: absolute;
      display: flex;
      align-items: center;
      bottom: 15px;
      right: 60px;
      left: 15px;
      padding-left: 1rem;
      height: 61px;
      box-sizing: border-box;
    }
  }
  &.topRight {
    .status {
      position: absolute;
      display: flex;
      align-items: center;
      top: 10px;
      right: 60px;
      left: 15px;
      padding-left: 1rem;
      height: 61px;
      box-sizing: border-box;
    }
    .title {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      bottom: 15px;
      height: 61px;
      box-sizing: border-box;
      right: 15px;
      left: 60px;
      padding-right: 1rem;
    }
  }
  &.bottomLeft {
    .title {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      top: 10px;
      height: 61px;
      box-sizing: border-box;
      right: 15px;
      left: 15px;
      padding-left: 1rem;
    }
  }
  &.bottomCenter {
    .title {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 10px;
      height: 61px;
      box-sizing: border-box;
      right: 60px;
      left: 60px;
      padding-right: 1rem;
    }

  }
  &.bottomRight {
    .title {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      top: 10px;
      height: 61px;
      box-sizing: border-box;
      right: 15px;
      left: 60px;
      padding-right: 1rem;
    }
  }
`

StyledTout.defaultProps = {
  type: 'topLeft'
}

export default StyledTout