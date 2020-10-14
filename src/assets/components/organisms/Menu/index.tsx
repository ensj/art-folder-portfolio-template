import styles from './index.module.scss'
import Link from 'next/link'

const App: React.FunctionComponent = () => {
  return (
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
}

export default App
