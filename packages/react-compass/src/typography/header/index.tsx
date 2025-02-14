import React from 'react'
import {styled} from '../../theme'
import {StyledComponentProps} from '../../utils/stitches.types'
import {Component} from '../utils'

interface Props extends StyledComponentProps {
  variant?:
    | 'header0'
    | 'header1'
    | 'header2'
    | 'header3'
    | 'header4'
    | 'header5'
  component?: Component
  children: React.ReactNode
}

export type headerTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const Header: React.FC<headerTypographyProps> = (props) => {
  const {
    css = {},
    children,
    variant = 'header1',
    component,
    ...delegated
  } = props
  const tag = React.useMemo(() => {
    if (component) return component
    switch (variant) {
      case 'header0':
        return 'h1'
      case 'header1':
        return 'h1'
      case 'header2':
        return 'h2'
      case 'header3':
        return 'h3'
      case 'header4':
        return 'h4'
      case 'header5':
        return 'h5'
      default:
        return 'p'
    }
  }, [variant])

  const StyledHeader = styled(tag, {
    width: '100%',
    padding: 0,
    margin: 0,
    color: '$primaryText',
    variants: {
      variant: {
        header0: {
          fontSize: '$header0',
          fontWeight: '$semibold',
          lineHeight: '3.375rem',
        },
        header1: {
          fontSize: '$header1',
          fontWeight: '$semibold',
          lineHeight: '3rem',
        },
        header2: {
          fontSize: '$header2',
          fontWeight: '$semibold',
          lineHeight: '2.625rem',
        },
        header3: {
          fontSize: '$header3',
          fontWeight: '$semibold',
          lineHeight: '2.25rem',
        },
        header4: {
          fontSize: '$header4',
          fontWeight: '$semibold',
          lineHeight: '1.875rem',
        },
        header5: {
          fontSize: '$header5',
          fontWeight: '$semibold',
          lineHeight: '1.5rem',
        },
      },
    },
  })

  return (
    <StyledHeader css={css} variant={variant} {...delegated}>
      {children}
    </StyledHeader>
  )
}

export default Header
