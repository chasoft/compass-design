import {styled} from '../theme'
import type {VariantProps} from '../utils/stitches.types'

export const StyledAvatar = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1 / 1',
  borderRadius: '$full',
  overflow: 'hidden',
  userSelect: 'none',
  color: '$info',
  transition: '$default',
  boxSizing: 'border-box',

  '.initials, .icon-wrapper, .image': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: '$infoBg',
    top: 0,
    left: 0,
  },

  '.initials, .icon-wrapper': {
    display: 'grid',
    placeItems: 'center',
  },

  '.initials': {
    fontFamily: '$sans',
    fontSize: '$body2',
    fontWeight: '$semibold',
    zIndex: 1,
  },

  '.icon-wrapper': {
    zIndex: 2,
  },

  '.image': {
    zIndex: 3,
    color: 'transparent',
    background: 'transparent',
  },

  '.initials.count': {
    zIndex: 4,
  },

  variants: {
    size: {
      lg: {
        width: '$12',

        '.icon-wrapper > svg': {
          width: '$6',
          height: '$6',
        },
      },
      md: {
        width: '$10',

        '.icon-wrapper > svg': {
          width: '$6',
          height: '$6',
        },
      },
      sm: {
        width: '$8',

        '.icon-wrapper > svg': {
          width: '$4',
          height: '$4',
        },
      },
      xs: {
        width: '$6',

        '.icon-wrapper > svg': {
          width: '$4',
          height: '$4',
        },
        // '.initials.count': {
        //   width: '$4',
        // },
      },
      xxs: {
        width: '$4',

        '.icon-wrapper > svg': {
          width: '$2_5',
          height: '$2_5',
        },
        '.initials': {
          fontSize: '8px',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type AvatarVariantProps = VariantProps<typeof StyledAvatar>
