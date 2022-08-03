import React from 'react'
import Head from 'next/head'
import settings from '../settings/seo'

type Props = {
  title?: string
  description?: string
}

const SEOHead: React.FC<Props> = (props: Props) => {
  const { title, description } = props
  return (
    <Head>
      <title>{title} | ZLogic Dev</title>
      <meta name='description' content={description} />
    </Head>
  )
}

SEOHead.defaultProps = {
  title: settings.meta.title,
  description: settings.meta.description,
}

export default SEOHead