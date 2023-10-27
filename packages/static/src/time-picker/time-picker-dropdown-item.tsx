'use client'
import React, {useEffect, useRef} from 'react'
import {TIME_PICKER_MARGIN_TOP} from './constant'
import styles from './styles/time-picker.module.css'
import {SelectedKey, TimePickerDropdownSelectedDisplayList} from './types'

interface TimePickerDropdownItemProps {
  itemId: string
  focusingItemId: string
  selectedDisplayList: TimePickerDropdownSelectedDisplayList
  selectedTime: string | number | null
  time: string
  isOpen?: boolean
  displayDataType: SelectedKey
  onClickItem: (time: string, type: SelectedKey) => () => void
}

function TimePickerDropdownItem(props: TimePickerDropdownItemProps) {
  const {
    selectedTime,
    time,
    onClickItem,
    displayDataType,
    isOpen,
    itemId,
    focusingItemId,
  } = props
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (itemId === focusingItemId) {
      ref.current?.focus()
    }
  }, [focusingItemId, itemId])

  useEffect(() => {
    if (isOpen && selectedTime === time) {
      setTimeout(() => {
        scrollToSelectedItem('auto')
      }, 0)
    }
  }, [isOpen])

  useEffect(() => {
    if (selectedTime === time && ref.current) {
      scrollToSelectedItem('smooth')
    }
  }, [selectedTime, time])

  const scrollToSelectedItem = (behavior: ScrollBehavior) => {
    if (ref.current) {
      ref.current.parentElement?.scroll({
        top: ref.current.offsetTop - TIME_PICKER_MARGIN_TOP,
        behavior,
      })
    }
  }

  return (
    <button
      ref={ref}
      className={`cdg-timepicker-dropdown-item ${
        selectedTime === time ? styles.active : ''
      } ${styles.timePickerDropdownItem}`}
      onClick={onClickItem(time, displayDataType)}
      tabIndex={-1}
    >
      {time}
    </button>
  )
}
export default React.memo(TimePickerDropdownItem)