import React from 'react'

import styles from './index.module.scss'

interface FolderProps {
  title: string
  order: number
  color: string
}

const App: React.FunctionComponent<FolderProps> = ({ title, order, color }: FolderProps) => {
  return (
    <div className={styles.folder} style={{ backgroundColor: color, right: `calc(10px + 4px * ${order})` }}>
      {title}
      <div className={styles.folderBody} style={{ backgroundColor: color, top: `calc(-10px - 180px * ${order})` }} />
      <div className={styles.folderBody2} style={{ backgroundColor: color, top: `calc(-10px - 180px * ${order})` }} />
    </div>
  )
}

export default App
