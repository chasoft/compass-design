import React from 'react'
import {CSS, StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledFormLayoutRow} from './FormLayout.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
  css?: CSS
  columns?: 1 | 2 | 3
  breaksOnSmall?: boolean
  className?: string
}

export type FormLayoutRowProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const FormLayoutRow = React.forwardRef<
  HTMLDivElement,
  FormLayoutRowProps
>((props, ref) => {
  const formRef = useDOMRef<HTMLDivElement>(ref)
  const {
    children,
    columns = 3,
    css = {},
    className = '',
    breaksOnSmall = false,
    ...delegated
  } = props

  return (
    <StyledFormLayoutRow
      ref={formRef}
      css={css}
      columns={columns}
      className={`${className}${breaksOnSmall ? 'break-on-small' : ''}`}
      {...delegated}
    >
      {children}
    </StyledFormLayoutRow>
  )
})
