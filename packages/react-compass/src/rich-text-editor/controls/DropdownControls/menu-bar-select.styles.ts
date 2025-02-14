import {styled} from '../../../theme'

export const StyledPopover = styled('div', {
  margin: 0,
  padding: '$2 0',
  borderRadius: '$md',
  position: 'absolute',
  width: '100%',
  top: '0px',
  left: '0px',
  background: '$background',
  boxShadow:
    '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  ul: {
    maxHeight: '$64',
    overflowY: 'auto',
    listStyle: 'none',
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
    paddingInlineStart: 0,
    li: {
      fontSize: '$label1',
      fontWeight: '$medium',
      padding: '$2 $4',
      outline: 'none',
      cursor: 'pointer',
    },
  },
})
