import Link from 'next/link'
import React from 'react'

import styles from './index.module.scss'

interface FolderProps {
  title: React.ReactNode
  href: string
  order: number
  setHover: React.Dispatch<React.SetStateAction<number>>
  color: string
}

const App: React.FunctionComponent<FolderProps> = ({ title, href, order, setHover, color }: FolderProps) => {
  return (
    <div
      style={{ bottom: `${order * 24.6}vh`, backgroundColor: color }}
      className={styles.tab}
      onMouseEnter={() => setHover(0.5)}
      onMouseLeave={() => setHover(0)}
    >
      <Link href={href}>{title}</Link>
    </div>
  )
}

export default App
