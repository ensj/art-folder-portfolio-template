import Link from 'next/link'
import React from 'react'

import Folder from '../../components/molecules/Folder'
import Cabinet from '../../components/organisms/Cabinet'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const App: React.FunctionComponent<DefaultLayoutProps> = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Cabinet>
        <Folder order={3} color="#FF4064">
          <Link href="illustrations">
            <a>Illustrations</a>
          </Link>
        </Folder>
        <Folder order={2} color="#20A8C1">
          <Link href="comics">
            <a>Comics</a>
          </Link>
        </Folder>
        <Folder order={1} color="#CDF483">
          <Link href="boards">
            <a>Boards</a>
          </Link>
        </Folder>
        <Folder order={0} color="#2784BA">
          <Link href="contact">
            <a>Contact</a>
          </Link>
        </Folder>
      </Cabinet>
      {children}
    </div>
  )
}

export default App
