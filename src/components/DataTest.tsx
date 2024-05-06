import { load } from 'outstatic/server'
import markdownToHtml from '../lib/markdownToHtml'
import { OstDocument } from 'outstatic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ContentGrid from './ContentGrid'

type Post = {
    tags: { value: string; label: string }[]
  } & OstDocument
  
  interface Params {
    params: {
      slug: string
    }
  }

  const exampleSlug = {
    params: {
        slug: 'generative-ai-for-personalization'
    }
  }

export default async function DataTest (){
    const { allPosts } = await getData()
    const {content} = await getDataSlug(exampleSlug)
    const collection = 'posts'
return (
    <>
    <p> data test section </p>
    <>{allPosts[0].slug}</>
    <p>{content}</p>
    <Link href={`/${collection}/${allPosts[0].slug}`}>here's the button</Link>
    <ContentGrid
     title="Blog Posts"
     items={allPosts}
     collection="courses"
     />
     <Link key={3} href={`/courses/test-course`}>testlink</Link>
    </>
)
}

async function getData() {
    const db = await load()
  
    const page = await db
      .find({ collection: 'pages', slug: 'home' }, ['content'])
      .first()
  
    const content = await markdownToHtml(page.content)
  
    const allPosts = await db
      .find({ collection: 'courses' }, [
        'title',
        'publishedAt',
        'slug',
        'coverImage',
        'description',
        'tags'
      ])
      .sort({ publishedAt: -1 })
      .toArray()
  
    return {
      content,
      allPosts,
    }
  }
  
  async function getDataSlug({ params }: Params) {
    const db = await load()
    async function getData({ params }: Params) {
        const db = await load()
      
        const post = await db
          .find<Post>({ collection: 'posts', slug: params.slug }, [
            'title',
            'publishedAt',
            'description',
            'slug',
            'author',
            'content',
            'coverImage',
            'tags'
          ])
          .first()
      
        if (!post) {
          notFound()
        }
      
        const content = await markdownToHtml(post.content)
      
        return {
          ...post,
          content
        }
      }
    const post = await db
      .find<Post>({ collection: 'posts', slug: params.slug }, [
        'title',
        'publishedAt',
        'description',
        'slug',
        'author',
        'content',
        'coverImage',
        'tags'
      ])
      .first()
  
    if (!post) {
      notFound()
    }
  
    const content = await markdownToHtml(post.content)
  
    return {
      ...post,
      content
    }
  }