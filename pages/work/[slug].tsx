import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import hljs from 'highlight.js'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import {
  BlockQuote,
  EM,
  Heading1,
  Heading3,
  LI,
} from '../../components/mdxcomponents'

hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)

interface Params extends ParsedUrlQuery {
  slug: string
}
type SinglePost = {
  frontMatter: {
    title: string
    date: string
  }
  mdxSource: MDXRemoteSerializeResult
}
const components = {
  blockquote: BlockQuote,
  h1: Heading1,
  h2: Heading3,
  h3: Heading3,
  em: EM,
  li: LI,
}
const SingleWork: NextPage<SinglePost> = ({
  frontMatter: { title, date },
  mdxSource,
}: SinglePost) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])
  return (
    <>
      <div className='min-h-[85vh] text-gray-700'>
        <h3 className='mt-3 text-center font-bold text-2xl'>{title}</h3>
        <p className='text-sm text-right mb-2 pr-2'>{date}</p>
        {/* <MDXRemote {...mdxSource} /> */}
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </>
  )
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params
  const markdownwithMeta = fs.readFileSync(
    path.join('works', slug + '.md'),
    'utf-8'
  )
  const { data: frontMatter, content } = matter(markdownwithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const files = fs.readdirSync(path.join('works'))
  const paths = files.map((file) => {
    return {
      params: {
        slug: file.split('.')[0],
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export default SingleWork
