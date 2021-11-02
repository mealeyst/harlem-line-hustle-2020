import React, { FunctionComponent } from 'react';
import styled from 'styled-components'

export type CanvasProps = {
  className?: string
}

const Canvas: FunctionComponent<CanvasProps> = ({className}) => {
  return (
    <canvas className={className} />
  );
}

const StyledCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
`

export default StyledCanvas