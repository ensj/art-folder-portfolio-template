import Menu from '../assets/components/organisms/Menu'
import styles from '../assets/styles/landing.module.scss'

const App: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      halo
      <Menu />
      <div>
        <h1>Welcome to Awawawaart's place!</h1>
      </div>
    </div>
  )
}

export default App
