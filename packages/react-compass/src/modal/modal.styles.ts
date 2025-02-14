import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledModalHeader = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '0px',
  paddingLeft: '$4',
  paddingRight: '$4',

  //title
  width: '100%',
  height: '32.143%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    h5: {
      true: {
        paddingLeft: '$6',
        paddingRight: '$6',
      },
      false: {},
    },
  },
})

export const StyledModalTitle = styled('h3', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  paddingTop: '$4',
  paddingBottom: '$4',

  //title
  width: '80%',
  height: '100%',
  fontFamily: '$sans',
  fontWeight: '$semibold',
  fontSize: '$header3',
  lineHeight: '$normal',
  color: '$primaryText',

  variants: {
    h5: {
      true: {
        fontSize: '$body1',
        paddingTop: '$6',
        paddingBottom: 0,
        fontWeight: '$bold',
        color: '$grayShades100',
      },
      false: {},
    },
  },
})

export const StyledModalDescription = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '$4',

  //title
  width: '100%',
  flex: '1',
  //overflow: 'auto',
  fontFamily: '$sans',
  fontWeight: '$normal',
  fontSize: '$body2',
  lineHeight: '$normal',
  color: '$secondaryText',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',

  variants: {
    h5: {
      true: {
        padding: '$6',
        border: 'none',
      },
      false: {},
    },
  },
})

export const StyledModalActionsContainer = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '$4',

  // container
  backgroundColor: '$primaryBg',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const StyledModalWrapper = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  background: '#00000066',

  // backdrop styling
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  zIndex: '49',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledModalCloseIcon = styled('div', {
  // reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  background: 'transparent',
  margin: '0px',
  padding: '0px',

  // styling
  width: '$4',
  height: '$4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: '$primaryText',
  '& *': {
    width: '100%',
    height: '100%',
  },
  '&:focus-visible': {
    outline: '2px solid $cdgBlue60',
  },
})

export const StyledModalContent = styled('div', {
  all: 'unset',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
})

export const StyledModal = styled('div', {
  // reset
  all: 'unset',
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  zIndex: '50',
  overflow: 'hidden',

  // modal container
  width: '$120',
  minHeight: '$56',
  maxHeight: 'calc(100vh - 40px)',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  borderRadius: '$lg',

  variants: {
    size: {
      sm: {
        width: '$75',
      },
      md: {
        width: '$125',
      },
      lg: {
        width: '$200',
      },
    },
    h5: {
      true: {
        minHeight: '$20',
        maxWidth: 'calc(100vw - 32px)',
        borderRadius: '16px',
      },
      false: {},
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type ModalVariantProps = VariantProps<typeof StyledModal>
