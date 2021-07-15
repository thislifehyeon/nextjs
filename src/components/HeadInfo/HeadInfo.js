import React from 'react'
import Head from 'next/head'

export default function HeadInfo({title, keyword, contents}) {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}></meta>
      <meta contents={contents}></meta>
    </Head>
  )
}

HeadInfo.defaultProps = {
  title: "RouDDine",
  keyword: "Project RouDDine",
  contents: "Project RouDDine"
}
