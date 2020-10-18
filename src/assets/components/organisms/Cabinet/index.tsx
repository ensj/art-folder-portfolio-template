import React from 'react'

import style from './index.module.scss'

interface CabinetProps {
  children: React.ReactNode
}

const App: React.FunctionComponent<CabinetProps> = ({ children }: CabinetProps) => {
  return <div className={style.cabinet}>{children}</div>
}

export default App
