import type { MicroCMSListContent, MicroCMSQueries } from 'microcms-js-sdk'
import { microCMSClient } from '@/lib/microcms'

export interface Blog extends MicroCMSListContent {
  title: string
  content: string
}

export const getBlogs = async (queries?: MicroCMSQueries) => {
  const res = await microCMSClient.getList<Blog>({
    endpoint: 'blogs',
    queries,
  })

  return res.contents
}
