import {styled} from '../theme'

export const StyledGutterCollapseButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$6',
  height: '$6',
  position: 'absolute',
  zIndex: 1,
  left: '0',
  top: '$5',
  borderRadius: '100%',
  border: '1px solid transparent',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
  cursor: 'pointer',
  fontSize: '$body1',
  transition: 'background-color 0.25s ease-in-out, opacity 0.25s ease-in-out',
  opacity: 0,

  '&:hover': {
    backgroundColor: '$darkerBg',
    border: '1px solid $darkerBg',
    color: '$cdgBlue',
  },
})

export const StyledGutter = styled('div', {
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '$3',
  backgroundColor: 'transparent',
  cursor: 'col-resize',
  right: 0,
  touchAction: 'none',

  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    height: '100%',
    right: '0',
    width: '$0_5',
    backgroundColor: '$gray40',
    transition: 'background-color 0.25s ease-in-out',
  },

  '&:hover&::after': {
    backgroundColor: '$cdgBlue',
  },

  [`&:hover ${StyledGutterCollapseButton}`]: {
    opacity: 1,
  },

  variants: {
    side: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
})
