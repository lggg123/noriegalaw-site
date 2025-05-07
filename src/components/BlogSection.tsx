import Link from 'next/link';
import { BlogPost } from '@/types/blog';

const FEATURED_POSTS: BlogPost[] = [
  {
    slug: 'what-to-do-when-arrested',
    title: 'What To Do When Arrested: Your Rights and Next Steps',
    date: '2024-05-07',
    excerpt: 'Learn about your essential rights during an arrest and the critical steps to take immediately after.',
    author: 'Chris Noriega',
    category: 'criminal-defense',
    content: '', // Full content would be in MDX file
    tags: ['criminal defense', 'arrest rights', 'legal procedure']
  },
  {
    slug: 'understanding-dui-charges',
    title: 'Understanding DUI Charges in California',
    date: '2024-05-06',
    excerpt: 'A comprehensive guide to DUI charges in California, penalties, and defense strategies.',
    author: 'Chris Noriega',
    category: 'dui',
    content: '',
    tags: ['dui', 'california law', 'criminal defense']
  }
  // Add more sample posts
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Legal Resources & Updates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay informed with our latest legal insights and updates on criminal defense matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_POSTS.slice(0, 3).map((post) => (
            <Link 
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="bg-slate-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  {post.category.replace('-', ' ')}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-slate-300">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="text-indigo-400 text-sm font-medium">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;