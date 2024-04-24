//@ts-nocheck
import NavBar from "@/components/NavBar"
import markdownToHtml from '@/lib/markdownToHtml'
import { getDocumentSlugs, load } from 'outstatic/server'
import { notFound } from 'next/navigation'

export default async function Blogs () {
    const { allPosts } = await getData()
    console.log("posts", allPosts)
    return (
        <>
        <NavBar />
        <p>Blog Page</p>
        {allPosts.length > 0 && (
          allPosts.map((post) => (
          <p> {post.title}</p>)
        ))}
        </>
    )
}

async function getData() {
    const db = await load()
  
    // const page = await db
    //   .find({ collection: 'pages', slug: 'home' }, ['content'])
    //   .first()
  
    // const content = await markdownToHtml(page.content)
  
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
  
    // const allProjects = await db
    //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
    //   .sort({ publishedAt: -1 })
    //   .toArray()
  
    return {
    //   content,
      allPosts,
    //   allProjects
    }
  }
  