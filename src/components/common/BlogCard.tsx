import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date?: string;
  featured?: boolean;
  className?: string;
  image?: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  category,
  date,
  featured = false,
  className = "",
  image
}: BlogCardProps) {
  if (featured) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-[280px,1fr] gap-6 rounded-lg bg-white shadow-sm p-6 ${className}`}>
        <div className="relative h-48 md:h-full rounded-lg overflow-hidden" style={{ backgroundColor: '#5D4A4A' }}>
          {image ? (
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="rounded-md px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#F4D35E', color: '#1F1F1F' }}>Featured</span>
            <span className="rounded-md px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#A8D5A5', color: '#1F4D1F' }}>{category}</span>
          </div>
          <h3 className="mt-4 text-xl md:text-2xl font-bold leading-tight text-gray-900">
            {title}
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
            {excerpt}
          </p>
          <div className="mt-4">
            <Link href={`/blog/${id}`}>
              <button 
                className="rounded-md px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: '#E07A5F' }}
              >
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={`rounded-lg bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      <div className="relative h-40" style={{ backgroundColor: '#5D4A4A' }}>
        {image ? (
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">No Image</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: '#F4D35E', color: '#1F1F1F' }}>{category}</span>
          {date && <span className="text-xs text-gray-500 whitespace-nowrap">{date}</span>}
        </div>
        <h3 className="mt-3 font-bold leading-snug text-sm md:text-base text-gray-900 line-clamp-3">{title}</h3>
        <p className="mt-2 text-xs text-gray-600 line-clamp-2">
          {excerpt}
        </p>
        <div className="mt-4">
          <Link href={`/blog/${id}`}>
            <button 
              className="rounded-md px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#E07A5F' }}
            >
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
