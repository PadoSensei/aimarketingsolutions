// posts/[slug]/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { OstDocument } from "outstatic";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import markdownToHtml from "@/lib/markdownToHtml";
import { getDocumentSlugs, load } from "outstatic/server";
import DateFormatter from "@/components/DateFormatter";
import { absoluteUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import Footer2 from "@/components/Footer2";

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
      url: absoluteUrl(`/posts/${post.slug}`),
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

export default async function Post({ params }: Params) {
  const resolvedParams = await params;
  const post = await getData(resolvedParams);

  return (
    <Layout>
      <div className="max-w-6xl px-5 mx-auto">
        <Header />
        <article className="mb-32">
          <div className="relative w-full mb-2 md:mb-4 sm:mx-0 h-52 md:h-96">
            {/* <Image
              alt={post.title}
              src={post?.coverImage || ''}
              fill
              className="object-cover object-center"
              priority
            /> */}
          </div>
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
          <h1 className="mb-2 text-2xl font-bold font-primary md:text-4xl">
            {post.title}
          </h1>
          <div className="hidden md:block md:mb-12 text-slate-600">
            Written on <DateFormatter dateString={post.publishedAt} /> by{" "}
            {post?.author?.name || ""}.
          </div>
          <hr className="mt-10 mb-10 border-neutral-200" />
          <div className="max-w-2xl mx-auto">
            <div
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
      <Footer2 />
    </Layout>
  );
}

async function getData(params: { slug: string }) {
  const db = await load();

  const post = await db
    .find<Post>({ collection: "posts", slug: params.slug }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "tags",
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
  const posts = getDocumentSlugs("posts");
  return posts.map((slug) => ({ slug }));
}
