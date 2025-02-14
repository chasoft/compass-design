import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const Thumb = styled('div', {
  right: '0',
  boxSizing: 'border-box',
  width: '$4',
  height: '$4',
  borderRadius: '50%',
  background: '$background',
  border: '1px solid $cdgBlue10',
  boxShadow: '0px 2px 4px $overlayDark',
  position: 'absolute',
  top: '50%',
  transform: 'translate3d(100%, -50%, 0)',
  cursor: 'pointer',
})

export const RangeSliderContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '0.25rem',
  background: '$cdgBlue10',
  borderRadius: '6.25rem',
  position: ' relative',
  cursor: 'pointer',
  outline: 'none',
  [`&:focus ${Thumb}`]: {
    border: '2px solid $cdgBlue',
  },
  '&:focus .cdg-thumb-tooltips::after': {
    content: 'attr(value)',
    position: 'absolute',
    backgroundColor: '$gray110',
    width: '$12_5',
    height: '$12_5',
    color: '$whiteText',
    padding: '0.2rem',
    borderRadius: '0.2rem',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    bottom: '1.688rem',
    transform: 'translateX(-35%)',
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '$bold',
    fontSize: '1.25rem',
    lineHeight: '3.125rem',
    textAlign: 'center',
  },
  '&:focus .cdg-thumb-tooltips::before': {
    content: '',
    position: 'absolute',
    border: '10px solid transparent',
    borderTop: '10px solid $gray110',
    left: '50%',
    bottom: '0.5rem',
    transform: 'translateX(-50%)',
    zIndex: '1',
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      },
      false: {
        pointerEvents: 'auto',
      },
    },
  },
})

export const RangeSlider = styled('div', {
  background: '$cdgBlue100',
  height: '100%',
  position: 'relative',
})

export type SliderVariantProps = VariantProps<typeof RangeSliderContainer>
