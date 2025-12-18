//@ts-nocheck
// courses/[slug]/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { OstDocument } from "outstatic";
import markdownToHtml from "@/lib/markdownToHtml";
import { getDocumentSlugs, load } from "outstatic/server";
import DateFormatter from "@/components/DateFormatter";
import { absoluteUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";
import Link from "next/link";

//TODO - Fix typescript

type Post = {
  tags: { value: string; label: string }[];
} & OstDocument;

interface Params {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getData(resolvedParams);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage || "/images/og-image.png"),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage || "/images/og-image.png"),
    },
  };
}

export default async function Course({ params }: Params) {
  const resolvedParams = await params;
  const post = await getData(resolvedParams);
  console.log(post);

  return (
    <>
      <NavBar />

      <div className="flex flex-col flex-grow min-h-screen bg-gradient-to-r from-gradient-purple to-gradient-blue">
        <main className="max-w-6xl p-5 mx-auto ">
          <article className="mb-32">
            <div className="relative w-full mb-2 md:mb-4 sm:mx-0 h-52 md:h-96">
              <Image
                alt={post.title}
                src={post?.coverImage || ""}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-transparent to-black"></div>
            </div>
            <div className="relative z-10 p-6 -mt-16 bg-white rounded-lg shadow-lg md:p-8 md:-mt-24">
              <div className="flex flex-wrap mb-4">
                {Array.isArray(post?.tags)
                  ? post.tags.map(({ label }) => (
                      <span
                        key={label}
                        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
                      >
                        {label}
                      </span>
                    ))
                  : null}
              </div>
              <header>
                <h1 className="mb-4 text-2xl font-bold font-primary md:text-4xl">
                  {post.title}
                </h1>
                <div className="hidden text-gray-600 md:block md:mb-6">
                  Written on <DateFormatter dateString={post.publishedAt} /> by{" "}
                  {post?.author?.name || ""}
                </div>
                <div className="p-6 mt-6 text-center bg-gray-100 rounded-lg">
                  <p className="mb-4 text-lg font-semibold">
                    Course Cost: {post.price}
                  </p>
                  <Link href={post.urlPaymentLink}>
                    <button className="px-4 py-2 font-bold text-white rounded opacity-50 cursor-not-allowed bg-gradient-to-r from-gradient-purple to-gradient-blue hover:bg-blue-700">
                      Coming Soon
                    </button>
                  </Link>
                </div>
              </header>
              <hr className="mt-6 mb-6 border-gray-300" />
              <div className="max-w-2xl mx-auto">
                <div
                  className="prose text-gray-800 lg:prose-xl"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              {/* <div className="p-6 mt-6 bg-gray-100 rounded-lg">
                <p className="mb-4 text-lg font-semibold">Course Cost: {post.price}</p>
                <Link href={post.urlPaymentLink}>
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
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
  );
}

async function getData(params: { slug: string }) {
  const db = await load();

  const post = await db
    .find<Post>({ collection: "courses", slug: params.slug }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "tags",
      "price",
      "urlPaymentLink",
    ])
    .first();

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content);

  return {
    ...post,
    content,
  };
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs("courses");
  return posts.map((slug) => ({ slug }));
}
