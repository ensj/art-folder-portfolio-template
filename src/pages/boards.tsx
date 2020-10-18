import React from 'react'

import Folder from '../assets/components/molecules/Folder'
import Cabinet from '../assets/components/organisms/Cabinet'

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Cabinet>
        <Folder title="Illust." order={3} color="#FF4064" />
        <Folder title="Comic" order={2} color="#20A8C1" />
        <Folder title="Boards" order={1} color="#CDF483" />
        <Folder title="Contact" order={0} color="#2784BA" />
      </Cabinet>
      <h1>BOARED!!</h1>
    </div>
  )
}

export default App
