//@ts-nocheck
import NavBar from "@/components/NavBar"
import markdownToHtml from '@/lib/markdownToHtml'
import { getDocumentSlugs, load } from 'outstatic/server'
import { notFound } from 'next/navigation'
import ContentGrid from '../../components/ContentGrid'
import Layout from "@/components/Layout"
import Footer2 from "@/components/Footer2"

export default async function Testy( params : Params) {
    const { allPosts } = await getData(params)

    // const ptPosts = allPosts.filter(post => post.language === 'pt')

    // const engPosts = allPosts.filter(post => post.language === 'eng')

    return (
        <>
            <NavBar />
            <Layout>
            <ContentGrid
                title="Courses"
                items={allPosts}
                collection="testing"
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
        .find({ collection: 'testing' }, [
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
