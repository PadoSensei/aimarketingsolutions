import Layout from "../components/Layout";
import { load } from "outstatic/server";
import markdownToHtml from "../lib/markdownToHtml";
import Hero from "@/components/Hero";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/NavBar";
import ServicesStump from "@/components/ServicesStump";

export default async function Index() {
  return (
    <Layout>
      <NavBar />
      <div className="bg-gradient-to-r from-gradient-blue-left to-gradient-purple-right ">
        <Hero />
      </div>
      <ServicesStump />
      <Footer2 />
    </Layout>
  );
}

async function getData() {
  const db = await load();

  const page = await db
    .find({ collection: "pages", slug: "home" }, ["content"])
    .first();

  const content = await markdownToHtml(page.content);

  const allPosts = await db
    .find({ collection: "posts" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "tags",
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  const allProjects = await db
    .find({ collection: "projects" }, ["title", "slug", "coverImage"])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    content,
    allPosts,
    allProjects,
  };
}
