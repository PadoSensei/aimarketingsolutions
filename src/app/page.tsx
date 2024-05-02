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
import DataTest from '@/components/DataTest'

export default async function Index() {
  const { content, allPosts, allProjects } = await getData()
  // console.log(content, allPosts, allProjects)

  // Original layout code
  // <div className="max-w-6xl mx-auto px-5">
  //   <section className="mt-16 mb-16 md:mb-12">
  //     {/* <div
  //       className="prose lg:prose-2xl home-intro"
  //       dangerouslySetInnerHTML={{ __html: content }}
  //     /> */}
  //   </section>
  //   {allPosts.length > 0 && (
  //     <ContentGrid
  //       title="Posts"
  //       items={allPosts}
  //       collection="posts"
  //       priority
  //     />
  //   )}
  //   {allProjects.length > 0 && (
  //     <ContentGrid
  //       title="Projects"
  //       items={allProjects}
  //       collection="projects"
  //     />
  //   )}
  // </div>
  return (
    <Layout>
      <NavBar />
      <Hero />
      <DataTest />
      <Services />
      <ImageBlurb />
      <Footer2 />
      {/* <BlogHome /> */}
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
