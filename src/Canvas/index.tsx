import React, { FunctionComponent } from 'react';

export type CanvasProps = {
  className?: string
}

const Canvas: FunctionComponent<CanvasProps> = ({className}) => {
  return (
    <canvas className={className} />
  );
}

export default Canvas