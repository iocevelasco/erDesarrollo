import { fetchAPI } from '@/utils/fetch-api'
import { NEXT_PUBLIC_STRAPI_API_TOKEN } from '@/utils/config'

export default async function getGlobal(): Promise<any> {
  const token = NEXT_PUBLIC_STRAPI_API_TOKEN

  if (!token)
    throw new Error('The Strapi API Token environment variable is not set.')

  const path = `/global`
  const options = { headers: { Authorization: `Bearer ${token}` } }

  const urlParamsObject = {
    populate: ['metadata', 'favicon', 'footer', 'navbar'],
  }
  return await fetchAPI(path, urlParamsObject, options)
}
