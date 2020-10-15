import Link from 'next/link'
import React from 'react'

import styles from './index.module.scss'

const App: React.FunctionComponent = () => (
  <ul className={styles.sidebar}>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="contact">
        <a>Contact</a>
      </Link>
    </li>
    <li>
      <Link href="illustrations">
        <a>Illustrations</a>
      </Link>
    </li>
    <li>
      <Link href="comics">
        <a>Comics</a>
      </Link>
    </li>
    <li>
      <Link href="boards">
        <a>Boards</a>
      </Link>
    </li>
  </ul>
)

export default App
