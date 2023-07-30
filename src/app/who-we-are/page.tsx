import React from 'react'
import { getPageBySlug } from '@/utils/get-page-by-slug'
import { PageResponse } from '@/types/page'
import { SectionsBuilder } from '@/components/Sections/SectionsBuilder/SectionsBuilder'

async function getData() {
  const data = await getPageBySlug('who-we-are', 'en')
  return data.data as PageResponse
}

const WhoWeAre = async () => {
  const data: PageResponse = await getData()
  return (
    <div className="page-wrapper">
      <div className="w-[880px] max-w-full m-auto max-lg:px-8">
        <SectionsBuilder
          title={data[0].attributes.heading}
          contentSections={data[0].attributes.contentSections}
        />
      </div>
    </div>
  )
}

export default WhoWeAre
