import {useMergeRefs} from '@floating-ui/react'
import React from 'react'
import {useKeyboardNavigation, useKeyboardNavigationState} from '../utils/hooks'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/speed-dial.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
}

type SpeedDialTriggerProps = Props &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props>

export const SpeedDialTrigger = React.forwardRef<
  HTMLButtonElement,
  SpeedDialTriggerProps
>((props, ref) => {
  const {children, isOpen, ...htmlProps} = props
  const {useDescendant} = useKeyboardNavigationState()
  const {onMouseMove} = useKeyboardNavigation()
  const {register, index} = useDescendant()
  const domRef = useDOMRef()

  const mergeRef = useMergeRefs([ref, register, domRef])

  return (
    <button
      className={`speed-dial-trigger ${styles.speedDialTrigger} ${
        isOpen && styles.speedDialTriggerOpen
      }`}
      ref={mergeRef}
      type='button'
      onMouseMove={onMouseMove?.(index)}
      {...htmlProps}
    >
      {children}
    </button>
  )
})
