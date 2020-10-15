import React, { Children } from 'react'

const App: React.FunctionComponent = (children: React.ReactNode) => {
  const childLen: number = Children.count(children)

  return <div>{children}</div>
}

export default App
