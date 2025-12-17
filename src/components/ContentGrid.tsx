import { OstDocument } from "outstatic";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

type Item = {
  tags?: { value: string; label: string }[];
} & OstDocument;

type Props = {
  // Added 'blog' here to match your Blog page usage
  collection: "posts" | "projects" | "courses" | "testy" | "blog";
  title?: string;
  items: Item[];
  priority?: boolean;
};

const ContentGrid = ({
  title = "More",
  items,
  collection,
  priority = false,
}: Props) => {
  return (
    <section id={collection} className="py-12">
      {/* Section Title */}
      <h2 className="mb-12 text-3xl font-bold text-center text-white md:text-5xl">
        {title}
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, id) => (
          <Link
            key={item.slug}
            href={`/${collection}/${item.slug}`}
            aria-label={`View ${item.title}`}
            className="group relative flex flex-col h-full bg-zinc-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="relative w-full overflow-hidden aspect-video">
              <Image
                src={item.coverImage ?? Logo}
                alt={`Cover Image for ${item.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority && id <= 2}
              />

              {/* Gradient Overlay for Depth */}
              <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40" />
            </div>

            {/* Content Body */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-purple-300">
                {item.title}
              </h3>

              <p className="flex-grow mb-4 text-sm leading-relaxed text-zinc-400 line-clamp-3">
                {item.description}
              </p>

              {/* Read More Link Visual */}
              <div className="flex items-center pt-4 mt-auto text-sm font-bold text-white transition-colors group-hover:text-purple-400">
                Read More
                <svg
                  className="w-4 h-4 ml-2 transition-transform transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;
