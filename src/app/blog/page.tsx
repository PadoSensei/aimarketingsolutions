//@ts-nocheck
import NavBar from "@/components/NavBar"
import markdownToHtml from '@/lib/markdownToHtml'
import { getDocumentSlugs, load } from 'outstatic/server'
import { notFound } from 'next/navigation'
import ContentGrid from '../../components/ContentGrid'
import Layout from "@/components/Layout"
import Footer2 from "@/components/Footer2"

export default async function Blogs() {
    const { allPosts } = await getData()
    console.log("posts", allPosts)

    const ptPosts = allPosts.filter(post => post.language === 'pt')

    const engPosts = allPosts.filter(post => post.language === 'eng')

    console.log('pt', ptPosts)

    console.log('eng', engPosts)

    return (
        <>
            <NavBar />
            <Layout>
            <ContentGrid
                title="Blog Posts"
                items={engPosts}
                collection="posts"
                priority
            />
            </Layout>
            <Footer2 />
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
            'tags',
            'language',
            'key'
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
