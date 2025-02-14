import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledSpeedDial = styled('div', {
  width: 'fit-content',
  display: 'flex',
  '&.speed-dial--up': {
    flexDirection: 'column-reverse',
  },

  '&.speed-dial--down': {
    flexDirection: 'column',
  },

  '&.speed-dial--left ': {
    flexDirection: 'row-reverse',
  },

  '&.speed-dial--right': {
    flexDirection: 'row',
  },
})
export const StyledSpeedDialTrigger = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  backgroundColor: '$cdgBlue100',
  boxShadow:
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
  color: '$background',
  border: 'none',
  borderRadius: '50%',
  fontSize: '$header3',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '& > span': {
    transform: 'rotate(0deg)',
    transition: 'all 0.3s ease',
  },
  '&.open': {
    backgroundColor: '$cdgBlue120',
    '& > span': {
      transform: 'rotate(45deg)',
    },
  },
})

export const StyledSpeedDialTriggerContent = styled('span', {
  display: 'inline-block',
  width: '24px',
  height: '27px',
})

export const StyledSpeedDialActions = styled('ul', {
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  margin: '0',
  listStyle: 'none',
  opacity: '0',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  display: 'flex',
  '&.open': {
    opacity: '1',
    transform: 'translateY(0)',
  },
  '&.speed-dial__actions--up': {
    flexDirection: 'column-reverse',
  },
  '&.speed-dial__actions--down': {
    flexDirection: 'column',
  },
  '&.speed-dial__actions--left': {
    flexDirection: 'row-reverse',
  },
  '&.speed-dial__actions--right': {
    flexDirection: 'row',
  },
})
export const SpeedDialAction = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: '$cdgBlue100',
  color: '$background',
  border: 'none',
  borderRadius: '50%',
  fontSize: '24px',
  transition: 'background-color 0.3s ease',
  boxShadow:
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',

  '&:hover': {
    backgroundColor: '$cdgBlue120',
  },

  '&.speed-dial__action--up': {
    marginBottom: '10px',
  },

  '&.speed-dial__action--down': {
    marginTop: '10px',
  },

  '&.speed-dial__action--right': {
    marginLeft: '10px',
  },

  '&.speed-dial__action--left': {
    marginRight: '10px',
  },
  variants: {
    isVisible: {
      true: {
        cursor: 'pointer',
      },
      false: {
        cursor: 'default',
      },
    },
  },
})

export const SpeedDialIcon = styled('span', {
  marginRight: '0px',
})

export const SpeedDialName = styled('span', {
  display: 'none',
})

export type SpeedDialVariantProps = VariantProps<typeof StyledSpeedDial>
