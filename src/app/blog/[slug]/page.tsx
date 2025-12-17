//@ts-nocheck
import Image from "next/image";
import { Metadata } from "next";
import { OstDocument } from "outstatic";
import { getDocumentSlugs, load } from "outstatic/server";
import DateFormatter from "@/components/DateFormatter";
import { absoluteUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";
import markdownToHtml from "@/lib/markdownToHtml";

type Post = {
  tags: { value: string; label: string }[];
} & OstDocument;

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const post = await getData(params);

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

export default async function Blog(params: Params) {
  const post = await getData(params);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <NavBar />

      <main className="relative flex-grow px-4 pt-24 pb-20 overflow-hidden sm:px-6">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3" />

        <article className="relative z-10 max-w-4xl mx-auto">
          {/* HEADER IMAGE SECTION */}
          <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-[-4rem] z-0 border border-white/10">
            <Image
              alt={post.title}
              src={post?.coverImage || ""}
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Gradient Overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
          </div>

          {/* CONTENT CARD */}
          <div className="relative z-10 p-6 border shadow-2xl bg-zinc-900/80 backdrop-blur-xl border-white/10 rounded-3xl md:p-12">
            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Array.isArray(post?.tags)
                ? post.tags.map(({ label }) => (
                    <span
                      key={label}
                      className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-purple-300 uppercase bg-purple-900/30 border border-purple-500/30 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                    >
                      {label}
                    </span>
                  ))
                : null}
            </div>

            <header className="mb-8">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                {post.title}
              </h1>
              <div className="flex items-center text-sm font-medium text-zinc-400 md:text-base">
                <span className="mr-2">
                  By {post?.author?.name || "AI Marketing Solutions"}
                </span>
                <span className="mx-2">•</span>
                <DateFormatter dateString={post.publishedAt} />
              </div>
            </header>

            <hr className="mb-10 border-white/10" />

            {/* MARKDOWN CONTENT */}
            {/* prose-invert makes typography white/gray for dark mode. prose-purple colors the links/accents. */}
            <div className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-zinc-300 prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-purple-300 prose-pre:bg-zinc-950 prose-pre:border prose-pre:border-white/10">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </article>
      </main>

      <Footer2 />
    </div>
  );
}

async function getData({ params }: Params) {
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
