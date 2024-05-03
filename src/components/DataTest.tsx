import { load } from 'outstatic/server'
import markdownToHtml from '../lib/markdownToHtml'
import { OstDocument } from 'outstatic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

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
    const { allPosts, allProjects } = await getData()
    const {content} = await getDataSlug(exampleSlug)
    console.log(content, "content")
    const collection = 'posts'
return (
    <>
    <p> data test section </p>
    <>{allPosts[0].slug}</>
    <p>{content}</p>
    <Link href={`/${collection}/${allPosts[0].slug}`}>here's the button</Link>
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
      .find({ collection: 'posts' }, [
        'title',
        'publishedAt',
        'slug',
        'coverImage',
        'description',
        'tags'
      ])
      .sort({ publishedAt: -1 })
      .toArray()
  
    const allProjects = await db
      .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
      .sort({ publishedAt: -1 })
      .toArray()
  
    return {
      content,
      allPosts,
      allProjects
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