import React from 'react'

import DefaultLayout from '../assets/templates/DefaultLayout'

const App: React.FunctionComponent = () => {
  return (
    <DefaultLayout selected={'comics'}>
      <div>
        <h1>COMISC!!</h1>
      </div>
    </DefaultLayout>
  )
}

export default App
