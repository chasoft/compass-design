import React, {useEffect, useState} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import RadioGroup, {RadioContext} from './radio-group'
import {RadioVariantProps, StyledRadio, StyledRadioInput} from './radio.styles'
import Tooltip from './tooltip'

interface Props extends StyledComponentProps {
  className?: string
  label?: React.ReactNode
  description?: string
  rightLabel?: string
  tooltip?: string
  variant?: 'simple' | 'outlined' | 'h5'
  isDisabled?: boolean
  value: string
  id?: string
  name?: string
}

export type RadioProps = Props & RadioVariantProps

const Radio: React.FC<RadioProps> = (props) => {
  const {
    value,
    label,
    description,
    tooltip,
    rightLabel,
    isDisabled = false,
    variant = 'simple',
    inputPosition = 'left',
    name = '',
    css = {},
    ...delegated
  } = props
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const context = React.useContext(RadioContext)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const state = context
  const [isChecked, setIsChecked] = useState(state.value === value)

  const onClick = () => {
    if (!isDisabled) {
      state.handleOnClickRadionButton(value) // clicked value
    }
  }

  useEffect(() => {
    setIsChecked(state.value === value)
  }, [state.value])

  return (
    <StyledRadio
      css={css}
      variant={variant}
      inputPosition={inputPosition}
      disabled={isDisabled}
      onClick={onClick}
      role='radio'
      aria-disabled={isDisabled}
      aria-valuetext={value}
      {...delegated}
    >
      <div className={`radio-wrapper`}>
        <StyledRadioInput
          variant={variant}
          active={isChecked}
          disabled={isDisabled}
        />
        <input
          type='radio'
          name={state.radioName ? state.radioName : name}
          disabled={isDisabled}
        ></input>
      </div>
      <div className='radio-content-wrapper'>
        {!!label && (
          <div className='radio-label'>
            {label} {!!tooltip && <Tooltip text={tooltip} />}
          </div>
        )}

        {description && <p className='radio-description'>{description}</p>}
      </div>
      {!!rightLabel && <p className='radio-right-label'>{rightLabel}</p>}
    </StyledRadio>
  )
}

export default Radio as typeof Radio & {Group: typeof RadioGroup}
