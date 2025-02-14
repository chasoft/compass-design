import React, {Key, useEffect} from 'react'
import Dropdown from '../dropdown'
import TextField from '../textfield'
import {StyledTextFieldLabel} from '../textfield/textfield.styles'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  InputWrapper,
  StyledDropdownTextfield,
} from './dropdown-textfield.styles'

interface Props extends StyledComponentProps {
  id?: string
  inputType?: 'text' | 'numeric' | 'email' | 'password'
  options: DropdownOptions[]
  onChange?: (dropdownValue: string, inputValue: string | number) => void
  label: string
  isErrored?: boolean
  errorMessage?: string
  isRequired?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  defaultSelectedKey?: string
  defaultInputValue?: string | number
  onChangeEvent?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onCopy?: React.ClipboardEventHandler<HTMLInputElement>
  onCut?: React.ClipboardEventHandler<HTMLInputElement>
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>
  onCompositionStart?: React.CompositionEventHandler<HTMLInputElement>
  onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>
  onCompositionUpdate?: React.CompositionEventHandler<HTMLInputElement>
  onSelect?: React.ReactEventHandler<HTMLInputElement>
  onBeforeInput?: React.FormEventHandler<HTMLInputElement>
  onInput?: React.FormEventHandler<HTMLInputElement>
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  textfieldPlaceholder?: string
  dropdownPlaceholder?: string
  autoFocus?: boolean
  maxLength?: number
  minLength?: number
  'aria-activedescendant'?: string
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  'aria-haspopup'?:
    | boolean
    | 'false'
    | 'true'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog'
  'aria-controls'?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
  'aria-errormessage'?: string
  h5?: boolean
}

export type DropdownTextfieldProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export type DropdownOptions = {
  value: string
  icon: React.ReactNode | null
  label: string
}

const DropdownTextfield = React.forwardRef<
  HTMLDivElement,
  DropdownTextfieldProps
>((props, ref) => {
  const {
    id = '',
    className,
    options,
    defaultSelectedKey,
    defaultInputValue = '',
    isErrored = false,
    isReadOnly = false,
    isRequired = false,
    isDisabled = false,
    errorMessage = '',
    textfieldPlaceholder = '',
    dropdownPlaceholder = '',
    inputType = 'text',
    label = '',
    minLength,
    maxLength,
    autoFocus = false,
    onChange: onDropdownInputChange,
    onCut,
    onCopy,
    onBlur,
    onFocus,
    onPaste,
    onInput,
    onKeyUp,
    onSelect,
    onKeyDown,
    onBeforeInput,
    onCompositionEnd,
    onCompositionStart,
    onCompositionUpdate,
    h5 = false,
  } = props
  const componentRef = useDOMRef(ref)

  const [selectedDropdownKey, setDropdownKey] = React.useState<Key>('')
  const [textfieldValue, setTextfieldValue] = React.useState<string | number>(
    '',
  )

  useEffect(() => {
    setDropdownKey(defaultSelectedKey as Key)
    setTextfieldValue(defaultInputValue)
  }, [defaultSelectedKey, defaultInputValue])

  const handleDropdownChange = (newValue: Key) => {
    setDropdownKey(newValue)
    onDropdownInputChange?.(String(newValue), textfieldValue)
  }
  const handleInputChange = (value: string | number) => {
    setTextfieldValue(value)
    onDropdownInputChange?.(String(selectedDropdownKey), value)
  }

  return (
    <StyledDropdownTextfield ref={componentRef} className={className}>
      {label && (
        <StyledTextFieldLabel htmlFor={id} h5={h5}>
          {label}
          {isRequired && <span className='asterisk'>*</span>}
        </StyledTextFieldLabel>
      )}
      <InputWrapper className='input-wrapper'>
        <Dropdown.Select
          className='cdg-dropdown-textfield-select'
          aria-label={label}
          selectedKey={selectedDropdownKey}
          defaultSelectedKey={defaultSelectedKey as Key}
          onSelectionChange={handleDropdownChange}
          isErrored={isErrored}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          isDisabled={isDisabled}
          placeholder={dropdownPlaceholder}
          h5={h5}
          css={{
            width: '25%',
          }}
        >
          {options.map((option) => (
            <Dropdown.Item
              key={option.value}
              textValue={option.label}
              css={{
                'div:first-child': {
                  gap: '$2',
                  alignItems: 'center',
                },
              }}
            >
              {option.icon} {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Select>
        <TextField
          id={id}
          className='cdg-dropdown-textfield-input'
          aria-label={label}
          type={inputType}
          onChange={handleInputChange}
          value={textfieldValue}
          errorMessage={errorMessage}
          isErrored={isErrored}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
          placeholder={textfieldPlaceholder}
          isDisabled={isDisabled}
          minLength={minLength ?? 0}
          maxLength={maxLength ?? 524288}
          h5={h5}
          autoFocus={autoFocus}
          onCut={onCut ?? (() => null)}
          onCopy={onCopy ?? (() => null)}
          onBlur={onBlur ?? (() => null)}
          onFocus={onFocus ?? (() => null)}
          onPaste={onPaste ?? (() => null)}
          onInput={onInput ?? (() => null)}
          onKeyUp={onKeyUp ?? (() => null)}
          onSelect={onSelect ?? (() => null)}
          onKeyDown={onKeyDown ?? (() => null)}
          onBeforeInput={onBeforeInput ?? (() => null)}
          onCompositionEnd={onCompositionEnd ?? (() => null)}
          onCompositionStart={onCompositionStart ?? (() => null)}
          onCompositionUpdate={onCompositionUpdate ?? (() => null)}
          css={{
            width: '75%',
            'div:nth-child(2)': {
              display: 'none',
            },
          }}
        />
      </InputWrapper>
      {isErrored && (
        <div className='dropdown-textfield__error'>{errorMessage}</div>
      )}
    </StyledDropdownTextfield>
  )
})

export default DropdownTextfield
