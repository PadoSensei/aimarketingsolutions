import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import ContentGrid from "@/components/ContentGrid";
import Layout from "@/components/Layout";
import { getDocumentSlugs, load } from 'outstatic/server'

interface Params {
    params: {
      slug: string
    }
  }

export default async function Courses(params: Params) {
    const { allCourses } = await getData(params)
    console.log('courses',allCourses)

    // const collection = "courses"
    // const slug = "page"

    return (
        <>
            <NavBar />
            <Layout>
            <ContentGrid
                title="AI Literacy Courses"
                items={allCourses}
                collection="courses"
                priority
            />
            </Layout>
            <Footer2 />
        
        </>
    )
}

async function getData({ params }: Params) {
    const db = await load()

    // const page = await db
    //   .find({ collection: 'pages', slug: 'home' }, ['content'])
    //   .first()

    // const content = await markdownToHtml(page.content)

    const allCourses = await db
        .find({ collection: 'courses' }, [
            'title',
            'publishedAt',
            'slug',
            'coverImage',
            // 'description',
            // 'tags',
            // 'language',
            // 'key'
        ])
        .sort({ publishedAt: -1 })
        .toArray()

    // const allProjects = await db
    //   .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
    //   .sort({ publishedAt: -1 })
    //   .toArray()

    return {
        //   content,
        allCourses,
        //   allProjects
    }
}