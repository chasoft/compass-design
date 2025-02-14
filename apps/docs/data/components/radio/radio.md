---
title: React Radio component
components: Radio
---

# Radio

<p class="description">Radio allow users to select a single item from a list of mutually exclusive options.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Radio} from '@comfortdelgro/react-compass'
```

## Outline

{{"demo": "RadioOutline.tsx"}}

## Controlled

{{"demo": "RadioControlled.tsx"}}

## Orientation

{{"demo": "RadioOrientation.tsx"}}

## H5 variant

{{"demo": "RadioH5.tsx"}}

## Props

### Radio.Group Props

| Name         | Type                             | Default  | Description                                                                             |
| :----------- | :------------------------------- | :------- | :-------------------------------------------------------------------------------------- |
| children\*   | [`ReactElement`, `ReactElement`] | —        | Childrent must be Radio component                                                       |
| orientation  | `vertical` \| `horizontal`       | vertical | The axis the Radio Button(s) should align with.                                         |
| name         | `string`                         | -        | The name of the RadioGroup, used when submitting an HTML form.                          |
| value        | `string`                         | -        | The current value (controlled).                                                         |
| defaultValue | `string`                         | -        | The current value (uncontrolled).                                                       |
| onChange     | `(value: boolean) => void`       | -        | Handler that is called when the value changes.                                          |
| onBlur       | `() => void`                     | -        | Handler that is called when click outside group.                                        |
| isDisabled   | `boolean`                        | false    | Whether the input is disabled.                                                          |
| isReadOnly   | `boolean`                        | false    | Whether the input can be selected but not changed by the user.                          |
| css          | `CSS`                            | —        | The system prop that allows defining system overrides as well as additional CSS styles. |

### Radio Props

| Name          | Type                                 | Default    | Description                                                                                                            |
| :------------ | :----------------------------------- | :--------- | :--------------------------------------------------------------------------------------------------------------------- |
| variant       | `"h5"` \| `"simple"` \| `"outlined"` | `"simple"` |                                                                                                                        |
| title         | `string`                             | —          | Display title for radio                                                                                                |
| description   | `string`                             | —          | Display description for radio                                                                                          |
| rightLabel    | `ReactNode`                          | —          | Display rightLabel for radio                                                                                           |
| tooltip       | `string`                             | —          | Display tooltip for radio                                                                                              |
| value         | `string`                             | -          | The value of the radio button, used when submitting an HTML form.                                                      |
| isDisabled    | `boolean`                            | false      | Whether the radio button is disabled or not. Shows that a selection exists, but is not available in that circumstance. |
| css           | `CSS`                                | —          | The system prop that allows defining system overrides as well as additional CSS styles.                                |
| inputPosition | `"left"` \| `"right"`                | `"left"`   | The position of the radio input icon                                                                                   |
