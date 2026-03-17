import { Layout } from '@/components/Layout'

import En from '@/content/changelog/en.mdx'
import Nl from '@/content/changelog/nl.mdx'
import De from '@/content/changelog/de.mdx'

let content = {
  en: En,
  nl: Nl,
  de: De,
}

export default async function Page({ params }) {
  let { locale } = await params
  let Content = content[locale] || content.en

  return (
    <Layout>
      <Content />
    </Layout>
  )
}
