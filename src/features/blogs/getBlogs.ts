import { microCMSClient } from '../../lib/microcms'
import type { MicroCMSQueries, MicroCMSListContent } from 'microcms-js-sdk'

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
