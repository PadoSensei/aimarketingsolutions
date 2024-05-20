//@ts-nocheck
import Image from 'next/image'
import { Metadata } from 'next'
import { OstDocument } from 'outstatic'
import markdownToHtml from '@/lib/markdownToHtml'
import { getDocumentSlugs, load } from 'outstatic/server'
import DateFormatter from '@/components/DateFormatter'
import { absoluteUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'
import Footer2 from '@/components/Footer2'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

//TODO - Fix typescript

type Post = {
  tags: { value: string; label: string }[]
} & OstDocument

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const post = await getData(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage || '/images/og-image.png'),
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage || '/images/og-image.png')
    }
  }
}

export default async function Course(params: Params) {
  const post = await getData(params)
  console.log(post)

  return (
    <>
      <NavBar />

      <div className='flex flex-col min-h-screen flex-grow bg-gradient-to-r from-gradient-purple to-gradient-blue'>
        <main className="max-w-6xl mx-auto p-5 ">
          <article className="mb-32">
            <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96">
              <Image
                alt={post.title}
                src={post?.coverImage || ''}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 -mt-16 md:-mt-24 relative z-10">
              <div className="flex flex-wrap mb-4">
                {Array.isArray(post?.tags)
                  ? post.tags.map(({ label }) => (
                    <span
                      key={label}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {label}
                    </span>
                  ))
                  : null}
              </div>
              <header>
                <h1 className="font-primary text-2xl font-bold md:text-4xl mb-4">
                  {post.title}
                </h1>
                <div className="hidden md:block md:mb-6 text-gray-600">
                  Written on <DateFormatter dateString={post.publishedAt} /> by{' '}
                  {post?.author?.name || ''}
                </div>
                <div className="bg-gray-100 p-6 rounded-lg mt-6 text-center">
                  <p className="text-lg font-semibold mb-4">Course Cost: {post.price}</p>
                  <Link href={post.urlPaymentLink}>
                    <button className="bg-gradient-to-r from-gradient-purple to-gradient-blue opacity-50 cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Coming Soon
                    </button>
                  </Link>
                </div>
              </header>
              <hr className="border-gray-300 mt-6 mb-6" />
              <div className="max-w-2xl mx-auto">
                <div
                  className="prose lg:prose-xl text-gray-800"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              {/* <div className="bg-gray-100 p-6 rounded-lg mt-6">
                <p className="text-lg font-semibold mb-4">Course Cost: {post.price}</p>
                <Link href={post.urlPaymentLink}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Continue to Purchase
                  </button>
                </Link>
              </div> */}
            </div>
          </article>
        </main>
      </div>
      <Footer2 />
    </>
  )
}

async function getData({ params }: Params) {
  const db = await load()

  const post = await db
    .find<Post>({ collection: 'courses', slug: params.slug }, [
      'title',
      'publishedAt',
      'description',
      'slug',
      'author',
      'content',
      'coverImage',
      'tags',
      'price',
      'urlPaymentLink'
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

export async function generateStaticParams() {
  const posts = getDocumentSlugs('courses')
  return posts.map((slug) => ({ slug }))
}