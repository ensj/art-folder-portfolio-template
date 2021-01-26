import Link from 'next/link'
import React from 'react'

import styles from './index.module.scss'

interface FolderProps {
  title: React.ReactNode
  href: string
  selected: boolean
  order: number
  setHover: React.Dispatch<React.SetStateAction<number>>
  color: string
}

const App: React.FunctionComponent<FolderProps> = ({ title, href, selected, order, setHover, color }: FolderProps) => {
  return (
    <Link href={selected ? '/' : href}>
      <div
        style={{ bottom: `${order * 24.6}vh`, backgroundColor: color }}
        className={styles.tab}
        onMouseEnter={() => setHover(0.5)}
        onMouseLeave={() => setHover(0)}
      >
        {title}
      </div>
    </Link>
  )
}

export default App
