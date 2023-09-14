import React from 'react'
import Button from '../button/button'
import {useIsDarkTheme} from '../theme'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  SearchFieldVariantProps,
  StyledSearchFieldBox,
  StyledSearchFieldBoxWrapper,
  StyledSearchFieldInput,
  StyledTextFieldHelperText,
  StyledTextFieldLabel,
} from './searchfield.styles'

interface Props extends StyledComponentProps {
  id?: string
  isErrored?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  validationState?: 'valid' | 'invalid'
  isRequired?: boolean
  description?: React.ReactNode
  errorMessage?: React.ReactNode
  autoFocus?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  label?: React.ReactNode
  onSubmit?: (value: string) => void
  onClear?: () => void
  onChange?: (value: string) => void
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
  onFocus?: (e: React.FocusEvent) => void
  onBlur?: (e: React.FocusEvent) => void
  onKeyDown?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void
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
}

export type SearchFieldProps = Props &
  SearchFieldVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SearchField = React.forwardRef<HTMLDivElement, SearchFieldProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      label,
      css = {},
      id = `cdg-element-${Math.random().toString(36).substring(2)}`,
      value = '',
      defaultValue = '',
      isErrored = false,
      isReadOnly = false,
      isRequired = false,
      isDisabled = false,
      autoFocus = false,
      placeholder = '',
      errorMessage = '',
      onSubmit,
      onChange,
      onChangeEvent,
      onCut,
      onCopy,
      onBlur,
      onPaste,
      onInput,
      onKeyUp,
      onSelect,

      onKeyDown,
      onBeforeInput,
      onCompositionEnd,
      onCompositionStart,
      onCompositionUpdate,
      onFocus,
      maxLength,
      minLength,
      ...delegated
    } = props
    const isDarkTheme = useIsDarkTheme()
    const [textValue, setTextValue] = React.useState<string>(
      defaultValue || value,
    )
    const searchFieldRef = useDOMRef<HTMLInputElement>(null)
    const wrapperRef = useDOMRef<HTMLDivElement>(ref)

    React.useEffect(() => {
      setTextValue(defaultValue || value)
    }, [defaultValue, value])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const v = event.target.value
      setTextValue(v)
      onChange?.(v)
      onChangeEvent?.(event)
    }

    const handleOnKeyDown = (e: React.KeyboardEvent) => {
      const key = e.key
      const target = e.target as HTMLInputElement

      if (key === 'Enter' || key === 'Escape') {
        e.preventDefault()
      }

      if (isDisabled || isReadOnly) {
        return
      }

      if (key === 'Enter' && target.value != '') {
        onSubmit?.(target.value)
      }

      if (key === 'Escape') {
        setTextValue('')
        props.onClear?.()
      }
      onKeyDown?.(e)
    }

    const onClearButtonClick = () => {
      setTextValue('')
      onChange?.('')
      props.onClear?.()
    }

    const onSearchButtonClick = () => {
      searchFieldRef.current?.focus()
    }

    return (
      <StyledSearchFieldBoxWrapper>
        {label && (
          <StyledTextFieldLabel htmlFor={id}>
            {label}
            {isRequired && <span className='asterisk'>*</span>}
          </StyledTextFieldLabel>
        )}
        <StyledSearchFieldBox
          disabled={isDisabled}
          css={css}
          isErrored={isErrored}
          ref={wrapperRef}
          {...delegated}
          isDarkTheme={isDarkTheme}
        >
          <StyledSearchFieldInput
            ref={searchFieldRef}
            id={id}
            autoFocus={autoFocus}
            readOnly={isReadOnly}
            required={isRequired}
            disabled={isDisabled}
            type='text'
            placeholder={placeholder}
            value={textValue}
            onCut={onCut}
            onCopy={onCopy}
            onBlur={onBlur}
            onFocus={onFocus}
            onPaste={onPaste}
            onInput={onInput}
            onKeyUp={onKeyUp}
            onSelect={onSelect}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBeforeInput={onBeforeInput}
            onCompositionEnd={onCompositionEnd}
            onCompositionStart={onCompositionStart}
            onCompositionUpdate={onCompositionUpdate}
            maxLength={maxLength}
            minLength={minLength}
          />
          {textValue !== '' ? (
            <Button
              size='sm'
              variant='ghost'
              onPress={onClearButtonClick}
              className='cdg-searchfield-button'
            >
              <svg className='icon' viewBox='0 0 384 512'>
                <path
                  fill='currentColor'
                  d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                />
              </svg>
            </Button>
          ) : (
            <Button
              isDisabled={!!isDisabled}
              onPress={onSearchButtonClick}
              className='cdg-searchfield-button'
              size='sm'
              variant='ghost'
            >
              <svg className='icon' viewBox='0 0 512 512'>
                <path
                  fill='currentColor'
                  d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'
                />
              </svg>
            </Button>
          )}
        </StyledSearchFieldBox>
        {isErrored && errorMessage && (
          <StyledTextFieldHelperText error>
            {errorMessage}
          </StyledTextFieldHelperText>
        )}
      </StyledSearchFieldBoxWrapper>
    )
  },
)

export default SearchField
