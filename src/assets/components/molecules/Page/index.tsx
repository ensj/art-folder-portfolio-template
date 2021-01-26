import React, { useState } from 'react'

import Tab from '../../atoms/Tab'
import styles from './index.module.scss'

interface PageProps {
  children: React.ReactNode
}

const App: React.FunctionComponent<PageProps> = ({ children }: PageProps) => {
  return <div>{children}</div>
}

export default App
