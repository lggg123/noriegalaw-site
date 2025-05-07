import { getAllPosts } from '@/lib/blog';
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">
        Legal Resources & Insights
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: BlogPost) => (
          <Link 
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-duration-300"
          >
            <div className="p-6">
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                {post.category.replace('-', ' ')}
              </span>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {post.title}
              </h2>
              <p className="mt-3 text-gray-300">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </span>
                <span className="text-indigo-400 text-sm font-medium">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <div className="border-t border-gray-700 pt-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-gray-300 mb-4">
            Contact the Law Offices of Chris Noriega for a consultation.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}