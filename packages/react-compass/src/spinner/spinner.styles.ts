import {styled} from '../theme'
import {spin} from '../theme/keyframes'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSpinner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '.ring': {
    position: 'relative',
    aspectRatio: '1 / 1',
    border: 'none',
    outline: 'none',
  },

  '.ring:focus': {
    border: 'none',
    outline: 'none',
  },

  '.ring:focus-within': {
    border: 'none',
    outline: 'none',
  },

  '.ring .bg, .ring .segment': {
    position: 'absolute',
    borderStyle: 'solid',
    borderRadius: '$full',
  },

  '.ring .bg': {
    borderColor: '$gray30',
  },

  '.ring .segment': {
    borderColor: '$cdgBlue transparent transparent transparent',
    animation: `${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
  },

  '.ring .segment:nth-child(1)': {
    animationDelay: '-0.45s',
  },

  '.ring .segment:nth-child(2)': {
    animationDelay: '-0.3s',
  },

  '.ring .segment:nth-child(3)': {
    animationDelay: '-0.15s',
  },

  '.label': {
    color: '$cdgBlue',
    fontFamily: '$sans',
    marginTop: '$2',
    marginBottom: '$2',
  },

  variants: {
    size: {
      '2xl': {
        '.ring, .ring div': {
          width: '$16',
          height: '$16',
        },
        '.ring div': {
          borderWidth: '0.625rem',
        },
        '.label': {
          fontSize: '$body2',
        },
      },
      xl: {
        '.ring, .ring div': {
          width: '$12',
          height: '$12',
        },
        '.ring div': {
          borderWidth: '0.625rem',
        },
        '.label': {
          fontSize: '$body2',
        },
      },
      lg: {
        '.ring, .ring div': {
          width: '$10',
          height: '$10',
        },
        '.ring div': {
          borderWidth: '0.5rem',
        },
        '.label': {
          fontSize: '$label1',
        },
      },
      md: {
        '.ring, .ring div': {
          width: '$8',
          height: '$8',
        },
        '.ring div': {
          borderWidth: '0.375rem',
        },
        '.label': {
          fontSize: '$label2',
        },
      },
      sm: {
        '.ring, .ring div': {
          width: '$6',
          height: '$6',
        },
        '.ring div': {
          borderWidth: '0.25rem',
        },
        '.label': {
          fontSize: '$label3',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type SpinnerVariantProps = VariantProps<typeof StyledSpinner>
