import Image from 'next/image'
import React from 'react'

import Folder from '../../components/molecules/Folder'
import Cabinet from '../../components/organisms/Cabinet'

interface DefaultLayoutProps {
  selected: '' | 'illustrations' | 'comics' | 'boards' | 'contact'
  children: React.ReactNode
}

const menuItems: Array<{ href: string; color: string; title: React.ReactNode }> = [
  {
    href: 'illustrations',
    color: '#FF4064',
    title: <Image src="/illust.png" alt="Illustrations" width="100px" height="200px" />,
  },
  {
    href: 'comics',
    color: '#20A8C1',
    title: <Image src="/comic.png" alt="Comic" width="100px" height="200px" />,
  },
  {
    href: 'boards',
    color: '#CDF483',
    title: <Image src="/boards.png" alt="Boards" width="100px" height="200px" />,
  },
  {
    href: 'contact',
    color: '#2784BA',
    title: <Image src="/contact.png" alt="Contacts" width="100px" height="200px" />,
  },
]

const App: React.FunctionComponent<DefaultLayoutProps> = ({ selected, children }: DefaultLayoutProps) => {
  return (
    <div>
      <Cabinet>
        {menuItems.map((item, index) => {
          const selectedIndex = menuItems.findIndex((menu) => menu.href === selected)

          return (
            <Folder
              key={index}
              title={item.title}
              href={item.href}
              selected={index === selectedIndex}
              reverseCascade={index <= selectedIndex}
              order={menuItems.length - index - 1}
              color={item.color}
            >
              {index === selectedIndex && children}
            </Folder>
          )
        })}
      </Cabinet>
    </div>
  )
}

export default App
