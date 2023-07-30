import React from 'react'
import { getPageBySlug } from '@/utils/get-page-by-slug'
import { SectionsBuilder } from '@/components/Sections/SectionsBuilder/SectionsBuilder'
import { PageResponse } from '@/types/page'

async function getData() {
  const data = await getPageBySlug('work-with-us', 'en')
  return data.data as PageResponse
}

export default async function WorkWithUsPage() {
  const data: PageResponse = await getData()

  return (
    <div className="page-wrapper">
      <div className="w-[815px] max-w-full m-auto max-lg:px-8">
        <SectionsBuilder
          title={data[0].attributes.heading}
          contentSections={data[0].attributes.contentSections}
        />
      </div>
    </div>
  )
}
