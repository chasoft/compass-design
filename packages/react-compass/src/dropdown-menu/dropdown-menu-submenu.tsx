import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledDropdownMenuSubmenu} from './dropdown-menu.styles'

interface SubmenuProps extends StyledComponentProps {
  children?: React.ReactNode
  'aria-labelledby'?: string
}
export const MULTILEVEL_SUBMENU_CLASS_NAME = 'cdg-dropdown-multilevel-submenu'

export type DropdownMenuSubmenuProps = SubmenuProps &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof SubmenuProps>

const DropdownMenuSubmenu = React.forwardRef<
  HTMLUListElement,
  DropdownMenuSubmenuProps
>((props, ref) => {
  const {children, css = {}, className, ...delegated} = props
  const DropdownMenuSubmenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <StyledDropdownMenuSubmenu
      css={css}
      ref={DropdownMenuSubmenuRef}
      role='menu'
      aria-labelledby={props['aria-labelledby']}
      className={`${MULTILEVEL_SUBMENU_CLASS_NAME} ${className ?? ''}`}
      {...delegated}
    >
      {children}
    </StyledDropdownMenuSubmenu>
  )
})

export default DropdownMenuSubmenu
