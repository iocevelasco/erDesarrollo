'use client'

import { ReactComponent as A1Logo } from '@/assets/Icons/Navigation/A1LogoDark.svg'
import { ReactComponent as HamburgerMenu } from '@/assets/Icons/Navigation/HamburgerMenu.svg'
import { MenuDrawer, NavButtonMenu, NavLink } from '@/components'
import { Button } from '@mui/material'
import Link from 'next/link'
import { useMemo, useState } from 'react'

export interface NavLinkData {
  id: number
  href: string
  text: string
  component: 'link' | 'buttonMenu'
  subMenuItems?: SubMenuItemData[]
}
interface SubMenuItemData {
  id: string | number
  href: string
  text: string
}

export default function Navbar({
  links,
  textCTA,
}: {
  links: Array<NavLinkData>
  textCTA: string
}) {
  const [open, setOpen] = useState(false)
  const memoList = useMemo(
    () =>
      links.map((item: NavLinkData) => {
        if (item.component === 'link') {
          return <NavLink key={item.id} href={item.href} text={item.text} />
        }
        return (
          <NavButtonMenu
            key={item.id}
            buttonMenuText={item.text}
            href={item.href}
            subMenuItems={item.subMenuItems as SubMenuItemData[]}
          />
        )
      }),
    [links],
  )

  return (
    <div className="sticky z-[999] !p-5 lg:px-0 bg-white top-0 h-navbar">
      <div className="container flex justify-between items-center	h-16 mx-auto px-0 w-full">
        <Link href="/">
          <A1Logo width={'8.625rem'} height={'2.75rem'} />
        </Link>
        <div className="hidden lg:flex lg:items-center h-fit gap-x-[3.125rem]">
          <div className="flex">
            <ul className="flex gap-x-5 h-full">{memoList}</ul>
          </div>
          <Link href="/contact">
            <Button variant="outlined" className="h-fit">
              {textCTA}
            </Button>
          </Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <HamburgerMenu />
        </button>
      </div>
      <MenuDrawer
        open={open}
        setOpen={setOpen}
        ctaButton={textCTA}
        menuItem={links as NavLinkData[]}
      />
    </div>
  )
}
