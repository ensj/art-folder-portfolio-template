import React from 'react'

import DefaultLayout from '../assets/templates/DefaultLayout'

const App: React.FunctionComponent = () => {
  return (
    <DefaultLayout selected={'boards'}>
      <h1>BOARED!!</h1>
    </DefaultLayout>
  )
}

export default App
