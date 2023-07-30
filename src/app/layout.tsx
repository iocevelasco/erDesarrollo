import * as React from 'react'
import NavElementsData from '@/components/Navbar/MockNavData.json'
import { Footer, Navbar, type NavLinkData, ChatBot } from '@/components'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { APP_ROOT_ID } from '@/utils/constants'
import getRalewayFont from '@/utils/functions/getRalewayFont'
import getGlobal from '@/services/getGlobals'
import { getStrapiMedia, getStrapiURL } from '@/utils/api-helpers'
import './globals.css'
import { Metadata } from 'next'

const raleway = getRalewayFont

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal()

  const { metadata, favicon } = meta.data.attributes
  const { url } = favicon.data.attributes

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const global = await getGlobal()

  const { notificationBanner, navbar, footer } = global.data.attributes

  // const navbarLogoUrl = getStrapiMedia(
  //   navbar.navbarLogo.logoImg.data.attributes.url,
  // )

  // const footerLogoUrl = getStrapiMedia(
  //   footer.footerLogo.logoImg.data.attributes.url,
  // )

  const NavMenuMockData = {
    TextCTA: 'Contact Sales',
  }

  return (
    <html lang="en" className={raleway.variable}>
      <body>
        <div id={APP_ROOT_ID}>
          <ThemeRegistry>
            <div className="main-container">
              <Navbar
                links={NavElementsData as Array<NavLinkData>}
                textCTA={NavMenuMockData.TextCTA}
              />
              {children}
              <Footer />
            </div>
            <ChatBot />
          </ThemeRegistry>
        </div>
      </body>
    </html>
  )
}
