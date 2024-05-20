import { OstDocument } from 'outstatic'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/Logo.png'

type Item = {
  tags?: { value: string; label: string }[]
} & OstDocument

type Props = {
  collection: 'posts' | 'projects' | 'courses' | 'testy'
  title?: string
  items: Item[]
  priority?: boolean
}

const ContentGrid = ({
  title = 'More',
  items,
  collection,
  priority = false
}: Props) => {
  return (
    <section id={collection} className="p-12">
      <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, id) => (
          <Link
            key={item.slug}
            href={`/${collection}/${item.slug}`}
            aria-label={`View ${item.title}`}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="relative h-40">
                <Image
                  src={item.coverImage ?? Logo }
                  alt={`Cover Image for ${item.title}`}
                  className="object-cover object-center w-full h-full"
                  width={480}
                  height={270}
                  priority={priority && id <= 2}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 hover:underline">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ContentGrid
