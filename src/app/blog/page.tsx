
import NavBar from "@/components/NavBar"
import markdownToHtml from '@/lib/markdownToHtml'
import { getDocumentSlugs, load } from 'outstatic/server'
import { notFound } from 'next/navigation'
import ContentGrid from '../../components/ContentGrid'
import Layout from "@/components/Layout"
import Footer2 from "@/components/Footer2"

interface Params {
    params: {
      slug: string
    }
  }

export default async function Blogs( params : Params) {
    const { allPosts } = await getData(params)

    const ptPosts = allPosts.filter(post => post.language === 'pt')

    const engPosts = allPosts.filter(post => post.language === 'eng')

    return (
        <>
            <NavBar />
            <Layout>
            <ContentGrid
                title="Blog Posts"
                items={allPosts}
                collection="blog"
                priority
            />
            </Layout>
            <Footer2 />
        </>
    )
}

async function getData({ params }: Params) {
    const db = await load()

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

    return {
        allPosts,
    }
}
