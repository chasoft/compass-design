import React, {useState} from 'react'
import {Column} from '../utils/components'
import QuantityToggle from './index'

export const Variants: React.FC = () => {
  const [value, setValue] = useState(0)
  return (
    <Column>
      <h3>Controlled</h3>
      <QuantityToggle
        placeholder='Price'
        label='Potato Price'
        value={value}
        onChange={(e) => setValue(e)}
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
        onUpdate={(value, number) => {
          console.log('onUpdate value', value)
          console.log('onUpdate number', number)
        }}
      />
      <h3>Un-Controlled</h3>
      <QuantityToggle
        label='Potato Price'
        placeholder='Price'
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
      />
      <h3>Step values</h3>
      <QuantityToggle label='Step' step={10} />
      <QuantityToggle label='Step + minValue' minValue={2} step={3} />
      <QuantityToggle
        label='Step + minValue + maxValue'
        minValue={2}
        maxValue={21}
        step={3}
      />
      <h3>Units</h3>
      <QuantityToggle
        label='Package width'
        defaultValue={4}
        formatOptions={{
          style: 'unit',
          unit: 'inch',
          unitDisplay: 'long',
        }}
      />
      <QuantityToggle
        label='Transaction amount'
        defaultValue={45}
        formatOptions={{
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'code',
          currencySign: 'accounting',
        }}
      />
      <h3>Enable Scroll</h3>
      <QuantityToggle
        label='Potato Price'
        placeholder='Price'
        disableScroll={false}
      />
      <h3>Disabled</h3>
      <QuantityToggle label='Disabled' isDisabled defaultValue={25} />
      <h3>Read only</h3>
      <QuantityToggle label='Read only' isReadOnly defaultValue={32} />
      <h3>Errored</h3>
      <QuantityToggle
        label='Errored'
        defaultValue={2}
        isErrored
        helperText='Bla Bla Bla'
      />
    </Column>
  )
}
