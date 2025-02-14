import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledTagBox = styled('div', {
  width: '100%',
})

export const StyledBoxWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  label: {
    fontSize: '$body3',
    fontWeight: '$semibold',
    display: 'inline-block',
    span: {
      marginLeft: '$1',
      color: '$danger',
    },
  },
  variants: {
    labelPosition: {
      top: {
        flexDirection: 'column',
        gap: '$2',
      },
      left: {
        flexDirection: 'row',
        gap: '$8',
        label: {
          maxWidth: '33%',
          flexShrink: 0,
          width: 'max-content',
        },
      },
    },
  },
})

export const StyledIcon = styled('div', {
  marginTop: '$1',
  width: '$6',
  height: '$6',
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
  svg: {
    width: '$4',
    height: '$4',
  },
})

export const StyledBox = styled('div', {
  flexGrow: 1,
  backgroundColor: '$background',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$divider',
  padding: '$2 $4',
  borderRadius: '$md',
  display: 'flex',
  gap: '$4',

  '&:focus-within': {
    borderColor: '$cdgBlue',
    outline: '1px $cdgBlue solid',
    '.left-icon': {
      color: '$cdgBlue',
    },
  },

  variants: {
    collaspable: {
      true: {
        // minHeight: '0',
      },
      false: {
        minHeight: '$32',
      },
    },
    isErrored: {
      true: {
        borderColor: '$danger',
        outline: '1px $danger solid',

        '&:focus-within': {
          borderColor: '$danger',
          outline: '1px $danger solid',
        },
      },
    },
  },
})

export const StyledBoxContent = styled('div', {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  flexWrap: 'wrap',
  gap: '$4',
  input: {
    fontSize: '$body3',
    border: 'none',
    background: 'transparent',
    outline: 'none',
    width: 4,
    padding: 0,
  },
})

export const StyledItem = styled('div', {
  fontSize: '$label2',
  fontWeight: '$semibold',
  backgroundColor: '$primaryBg',
  padding: '$2',
  gap: '$3',
  height: 'min-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',
  svg: {
    width: '$3',
    height: '$3',
  },
  '&:hover': {
    backgroundColor: '$darkerBg',
    color: '$black',
  },
  input: {
    fontSize: '$label2',
    fontWeight: '$semibold',
    height: 'fit-content',
    padding: 0,
    margin: 0,
  },
  button: {
    width: '16px',
    height: '16px',
    padding: 0,
    margin: 0,
    border: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    isDisabled: {
      true: {
        background: '$secondaryBg',
        cursor: 'not-allowed',
        opacity: 0.4,
      },
      false: {
        'tag-box-x-icon': {
          cursor: 'pointer',
        },
      },
    },
    isError: {
      true: {
        border: '1px solid $danger',
      },
    },
  },
})
export const StyledTagBoxActionWrapper = styled('div', {
  width: '100%',
  marginTop: '$2',
  fontSize: '$label3',
  color: '$gray60',
  fontWeight: '$semibold',
  display: 'flex',
  alignItems: 'center',
  span: {
    flexGrow: 1,
  },
})

export const StyledTagBoxAction = styled('div', {
  width: 'max-content',
  height: 'min-content',
})

export const StyledHelperText = styled('div', {
  fontSize: '$label2',
  fontWeight: '$medium',
  transition: '$default',
  marginTop: '$1',
  color: '$gray70',

  variants: {
    error: {
      true: {
        color: '$danger',
      },
      false: {
        color: '$gray70',
      },
    },
  },
})

export type TagBoxVariantProps = VariantProps<typeof StyledTagBox>
