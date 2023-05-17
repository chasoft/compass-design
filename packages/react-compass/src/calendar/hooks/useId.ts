import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {useSSRSafeId} from './useSSRSafeId'

const idsUpdaterMap = new Map<string, (v: string) => void>()

export function useId(defaultId?: string): string {
  const [value, setValue] = useState<unknown>(defaultId)
  const nextId = useRef<unknown>(null)

  const res = useSSRSafeId(value)

  const updateValue = useCallback((val) => {
    nextId.current = val
  }, [])

  idsUpdaterMap.set(res, updateValue)

  useLayoutEffect(() => {
    const r = res
    return () => {
      idsUpdaterMap.delete(r)
    }
  }, [res])

  useEffect(() => {
    const newId = nextId.current
    if (newId) {
      nextId.current = null
      setValue(newId)
    }
  })

  return res
}