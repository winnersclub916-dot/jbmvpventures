import HeroSection from "@/components/common/HeroSection";
import BlogCard from "@/components/common/BlogCard";
import CallToAction from "@/components/common/CallToAction";
import { BLOG_POSTS } from "@/utils/data";

export default function Blog() {
  // Get the featured post (the one with featured: true)
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  
  // Get all other posts for the grid
  const otherPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Hero */}
      <HeroSection
        backgroundImage="/image 19.png"
        alt="Blog Hero"
        title="Shaping The Future, One Story At A Time"
        description="Explore insights, stories, and updates from the Winners ecosystem — where innovation meets compassion to empower communities."
        primaryButtonText="Read Our Story"
        primaryButtonLink="#featured"
        height="h-80 md:h-96"
      />

      <div className="min-h-screen" style={{ backgroundColor: '#E8DDD3' }}>
      {/* Article of the Week */}
      <section id="featured" className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Article Of The Week</h2>
          <p className="text-sm text-gray-600 mt-1">Discover our most impactful story this week</p>

          {featuredPost && (
            <div className="mt-6">
              <BlogCard
                id={featuredPost.id.toString()}
                title={featuredPost.title}
                excerpt={featuredPost.excerpt}
                category={featuredPost.category}
                featured={true}
                image={featuredPost.image}
              />
            </div>
          )}
        </div>
      </section>

      {/* Explore Our Impact */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Our Impact</h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id.toString()}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                featured={false}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
      <CallToAction
        title="Ready To Start Your Journey?"
        description="Join a thriving network and take your next step today."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </div>
    
  );
}