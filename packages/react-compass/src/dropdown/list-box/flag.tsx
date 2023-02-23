import {AriaListBoxOptions, useListBox} from '@react-aria/listbox'
import {ComboBoxState} from '@react-stately/combobox'
import React from 'react'
import {StyledLoading} from '../dropdown.styles'
import Option from '../option/flag'

interface Props<T = unknown> extends AriaListBoxOptions<T> {
  state: ComboBoxState<T>
  headerTitle: string | undefined
  isLoading: boolean
  headerOnClick: (e: unknown) => void
  listBoxRef: React.RefObject<HTMLUListElement>
}

function ListBox(props: Props) {
  const ref = React.useRef(null)
  const {listBoxRef = ref, state} = props
  const {listBoxProps} = useListBox(props, state, listBoxRef)

  return (
    <ul {...listBoxProps} ref={listBoxRef}>
      {props.isLoading ? (
        <StyledLoading>
          <div className='spinner'>
            <div className='spinner-1' />
            <div className='spinner-2' />
            <div className='spinner-3' />
            <div />
          </div>
        </StyledLoading>
      ) : (
        <>
          {[...state.collection].map((item) => (
            <Option key={item.key} item={item} state={state} />
          ))}
        </>
      )}
    </ul>
  )
}

export default ListBox