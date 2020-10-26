import React, { useState } from 'react'

import styles from './index.module.scss'

interface FolderProps {
  children: React.ReactNode
  order: number
  color: string
}

const App: React.FunctionComponent<FolderProps> = ({ children, order, color }: FolderProps) => {
  const [hover, setHover] = useState(false)

  const folderRightPos = (hover ? 18 : 10) + 4 * order
  const folderTopPos = -10 - 180 * order
  // const bottomSpace = window.innerHeight - this.offSetTop;

  return (
    <div
      className={styles.folder}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ backgroundColor: color, right: `${folderRightPos}px` }}
    >
      {children}
      <div className={styles.folderBody} style={{ backgroundColor: color, top: `${folderTopPos}px` }} />
      <div className={styles.folderBodyBottom} style={{ backgroundColor: color, top: `${folderTopPos}px` }} />
    </div>
  )
}

export default App
