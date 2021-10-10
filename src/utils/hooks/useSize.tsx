import { useState, useLayoutEffect } from 'react'
import useResizeObserver from '@react-hook/resize-observer'

export const useSize = (target: HTMLElement) => {
  const [size, setSize] = useState<DOMRect>()

  useLayoutEffect(() => {
    setSize(target.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect))
  return size
}