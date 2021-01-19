import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'

import style from './index.module.scss'

interface CabinetProps {
  children: React.ReactNode
}

function useOutsideAlerter(ref) {
  const router = useRouter()
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        router.push('/')
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const App: React.FunctionComponent<CabinetProps> = ({ children }: CabinetProps) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <div ref={wrapperRef} className={style.cabinet}>
      {children}
    </div>
  )
}

export default App
