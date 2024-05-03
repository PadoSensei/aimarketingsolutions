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

    return {
        //   content,
        allCourses,
        //   allProjects
    }
}