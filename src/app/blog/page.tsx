import NavBar from "@/components/NavBar";
import { load } from "outstatic/server";
import ContentGrid from "../../components/ContentGrid";
import Footer from "@/components/Footer";
import { OstDocument } from "outstatic";

// 1. Define the Post interface
interface Post extends OstDocument {
  title: string;
  publishedAt: string;
  slug: string;
  coverImage?: string;
  description: string;
  tags?: { value: string; label: string }[];
  language?: string;
}

export default async function Blogs() {
  const { allPosts } = await getData();

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <NavBar />

      <main className="relative flex-grow px-4 pt-32 pb-20 overflow-hidden sm:px-8 md:px-16 lg:px-32">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-extrabold text-white md:text-6xl">
              Latest <span className="gradient-text">Insights</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-400">
              Expert advice on AI automation, marketing strategy, and business
              growth.
            </p>
          </div>

          <ContentGrid items={allPosts} collection="blog" priority />
        </div>
      </main>

      <Footer />
    </div>
  );
}

// 2. Define the return type for the function
async function getData(): Promise<{ allPosts: Post[] }> {
  const db = await load();

  const allPosts = (await db
    .find({ collection: "posts" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "tags",
      "language",
    ])
    .sort({ publishedAt: -1 })
    .toArray()) as Post[]; // Cast to Post[]

  return {
    allPosts,
  };
}
