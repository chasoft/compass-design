import {useToast} from '@comfortdelgro/react-compass'
import {useEffect, useState} from 'react'

interface Props {
  color: {
    token: string
    value: string
  }
  gradient?: boolean
}

function rgba2hex(color: string) {
  var a,
    isPercent,
    rgb = color
      .replace(/\s/g, '')
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || '').trim(),
    hex = rgb
      ? (Number(rgb[1]) | (1 << 8)).toString(16).slice(1) +
        (Number(rgb[2]) | (1 << 8)).toString(16).slice(1) +
        (Number(rgb[3]) | (1 << 8)).toString(16).slice(1)
      : color

  if (alpha !== '') {
    a = Number(alpha)
  } else {
    a = 0o1
  }
  // multiply before convert to HEX
  a = ((a * 255) | (1 << 8)).toString(16).slice(1)
  hex = hex + a

  return '#' + hex
}

const getAccessibleColor = (hex: string) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16)

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
}

const takeOpacityOut = (color: string) => {
  if (color.startsWith('#') && color.length === 9) {
    return {
      color: color.slice(0, 7),
      opacity: parseInt(color.slice(7), 16) / 255,
    }
  }

  return {
    color,
    opacity: 1,
  }
}

const getResolvedColor = (color: string) => {
  if (color.startsWith('var(')) {
    const varName = color.replace('var(', '').replace(')', '')

    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
  }

  if (color.startsWith('rgb')) {
    return rgba2hex(color)
  }

  return color
}

const ColorBox: React.FC<Props> = ({color, gradient = false}) => {
  const [resolvedColor, setResolvedColor] = useState<string | null>(null)
  const [resolvedColorOpacity, setResolvedColorOpacity] = useState<number>(1)

  useEffect(() => {
    if (!gradient) {
      setResolvedColor(takeOpacityOut(getResolvedColor(color.value)).color)
      setResolvedColorOpacity(resolvedColorOpacity)
    }
  }, [color.value, gradient, resolvedColorOpacity])

  const toast = useToast()

  const handleColorClick = () => {
    console.log(toast)
    navigator && navigator.clipboard.writeText(resolvedColor || '')
    toast.show({
      color: 'positive',
      title: 'Copy successfully',
    })
  }

  return (
    <div
      className='scale'
      style={{
        width: '9rem',
        height: '6rem',
        padding: '0.5rem',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        fontWeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        cursor: 'copy',
        flexShrink: 0,
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '150ms',
        backgroundColor: !gradient ? color.value : 'transparent',
        backgroundImage: gradient
          ? `linear-gradient(to right, ${color.value})`
          : 'none',
        opacity: resolvedColorOpacity,
        color: resolvedColor ? getAccessibleColor(resolvedColor) : '#000',
      }}
      onClick={handleColorClick}
    >
      <div>{color.token}</div>
      <div>{gradient ? color.value : resolvedColor}</div>
    </div>
  )
}

export default ColorBox
