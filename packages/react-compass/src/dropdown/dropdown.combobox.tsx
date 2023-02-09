import {useComboBox} from '@react-aria/combobox'
import {useFilter} from '@react-aria/i18n'
import {ComboBoxStateOptions, useComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  DropdownVariantProps,
  StyledDropdown,
  StyledDropdownWrapper,
} from './dropdown.styles'
import DropdownItem from './item'
import ListBox from './list-box/combox'
import Popover from './popover/combox'
import {Button, Icon} from './utils'

interface Props<T> extends ComboBoxStateOptions<T>, StyledComponentProps {
  searchable?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
  headerTitle?: string
  headerOnClick?: (e: unknown) => void
}

export type DropdownProps<T = object> = Props<T> & DropdownVariantProps

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      icon = <Icon />,
      // AriaDropdownProps
    } = props
    const variantProps = {} as DropdownVariantProps
    const dropdownRef = useDOMRef<HTMLDivElement>(ref)
    const filter = useFilter({sensitivity: 'base'})
    const contains = (string: string, substring: string) =>
      filter.contains(string, substring)
    const state = useComboBoxState({
      ...props,
      defaultFilter: contains,
    })

    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const listBoxRef = React.useRef<HTMLUListElement>(null)
    const popoverRef = React.useRef<HTMLDivElement>(null)

    const {buttonProps, inputProps, listBoxProps, labelProps} = useComboBox(
      {
        ...props,
        inputRef,
        buttonRef,
        listBoxRef,
        popoverRef,
      },
      state,
    )
    return (
      <StyledDropdownWrapper css={css} ref={dropdownRef} {...variantProps}>
        {props.label && <label {...labelProps}>{props.label}</label>}
        <StyledDropdown isEmpty={!inputProps.value}>
          <input {...inputProps} ref={inputRef} />
          <Button {...buttonProps} ref={buttonRef}>
            {icon}
          </Button>
          {state.isOpen && (
            <Popover
              state={state}
              triggerRef={inputRef}
              popoverRef={popoverRef}
              isNonModal
              placement='bottom start'
            >
              <ListBox
                {...listBoxProps}
                headerTitle={props.headerTitle}
                headerOnClick={(e) => props?.headerOnClick?.(e)}
                listBoxRef={listBoxRef}
                state={state}
              />
            </Popover>
          )}
        </StyledDropdown>
      </StyledDropdownWrapper>
    )
  },
)

export default Dropdown as typeof Dropdown & {
  Item: typeof DropdownItem
}