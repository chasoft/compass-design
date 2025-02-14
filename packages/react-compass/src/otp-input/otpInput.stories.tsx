import {StoryDecorator} from '@ladle/react'
import React from 'react'

import OTPInput from '.'
import {Column} from '../utils/components'

export const Variants: React.FC = () => {
  return (
    <Column>
      <h2>Number OTP</h2>
      <OTPInput
        length={4}
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <h2>6 Numbers</h2>
      <OTPInput
        isNumberInput
        autoFocus
        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}
      />

      <h2>String OTP</h2>
      <OTPInput
        autoFocus
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />

      <h2>Disabled</h2>
      <OTPInput
        disabled
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
      />

      <h2>Mobile view</h2>
      <OTPInput
        css={{marginBottom: '$8'}}
        length={4}
        onChangeOTP={(otp) => console.log('String OTP: ', otp)}
        autoFocus
        isNumberInput
        isMobile
      />
    </Column>
  )
}

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #F7F8F9; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
