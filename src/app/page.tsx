import Layout from '../components/Layout'
import { load } from 'outstatic/server'
import ContentGrid from '../components/ContentGrid'
import markdownToHtml from '../lib/markdownToHtml'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Footer2 from '@/components/Footer2'
import BlogHome from '@/components/BlogHome'
import ImageBlurb from '@/components/ImageBlurb'
import Services from './services/page'
import NavBar from '@/components/NavBar'

export default async function Index() {
  const { content, allPosts, allProjects } = await getData()
  
  return (
    <Layout>
      <NavBar />
      <div className='bg-gradient-to-r from-gradient-blue-left to-gradient-purple-right '>

      <Hero />
      </div>
      <Services />
      <ImageBlurb />
      <Footer2 />
    </Layout>
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
