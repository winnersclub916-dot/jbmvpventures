import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/utils/data";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const postId = parseInt(params.id);
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 w-full overflow-hidden">
        <Image
          src="/image 19.png"
          alt="Blog Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full mx-auto max-w-4xl flex items-center px-4 sm:px-6 md:px-8 lg:px-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="rounded-md px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#F4D35E', color: '#1F1F1F' }}>
                {post.category}
              </span>
              {post.featured && (
                <span className="rounded-md px-3 py-1 text-xs font-semibold" style={{ backgroundColor: '#A8D5A5', color: '#1F4D1F' }}>
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              {post.title}
            </h1>
            
          </div>
        </div>
      </section>

      <div className="min-h-screen" style={{ backgroundColor: '#E8DDD3' }}>
        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              {/* Excerpt */}
              <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#F4D35E', color: '#1F1F1F' }}>
                <p className="text-lg font-medium leading-relaxed">{post.excerpt}</p>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.7',
                  color: '#374151'
                }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full px-4 py-2 text-sm font-medium"
                      style={{ backgroundColor: '#E07A5F', color: 'white' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-8 p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-bold text-foreground mb-2">About the Author</h3>
                <p className="text-muted-foreground">
                  {post.author} is dedicated to sharing inspiring stories and insights from the WINNERS ecosystem. 
                  Our team works across various sectors to empower communities and create positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Related Articles</h2>
            
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS
                .filter((relatedPost) => relatedPost.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <article key={relatedPost.id} className="rounded-lg bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-40" style={{ backgroundColor: '#5D4A4A' }}>
                      {/* Image placeholder */}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-md px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: '#F4D35E', color: '#1F1F1F' }}>
                          {relatedPost.category}
                        </span>
                      </div>
                      <h3 className="mt-3 font-bold leading-snug text-sm md:text-base text-gray-900 line-clamp-3">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-2 text-xs text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-4">
                        <Link href={`/blog/${relatedPost.id}`}>
                          <button 
                            className="rounded-md px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:opacity-90"
                            style={{ backgroundColor: '#E07A5F' }}
                          >
                            READ MORE
                          </button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-14 bg-gradient-to-b from-primary to-secondary text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready To Start Your Journey?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed">
              Join a thriving network and take your next step today.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild className="rounded-full px-6 bg-white text-foreground hover:bg-white/90">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id.toString(),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const postId = parseInt(params.id);
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      authors: [post.author],
    },
  };
}
