import React, { useState } from 'react'

import Tab from '../../atoms/Tab'
import styles from './index.module.scss'

interface FolderProps {
  children: React.ReactNode
  title: React.ReactNode
  href: string
  selected: boolean
  reverseCascade: boolean
  order: number
  color: string
}

const App: React.FunctionComponent<FolderProps> = ({
  children,
  title,
  href,
  selected,
  reverseCascade,
  order,
  color,
}: FolderProps) => {
  const [hover, setHover] = useState(0)

  return (
    <div
      style={{
        right: reverseCascade ? '-4vw' : `${-96 + hover + order * 0.3}vw`,
        backgroundColor: color,
        backgroundImage: reverseCascade ? null : 'url(/folder-border-2.png)',
      }}
      className={styles.folder}
    >
      <Tab title={title} href={href} selected={selected} order={order} setHover={setHover} color={color} />
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default App
