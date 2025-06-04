import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import MdxContent from '@/components/MdxContent';
import Link from 'next/link';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Bar */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="text-white text-lg font-semibold hover:text-indigo-400 transition-colors"
            >
              Law Offices of Chris Noriega
            </Link>
            <div className="flex space-x-4">
              <Link 
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors"
              >
                ← Back to Blog
              </Link>
              <Link 
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8 text-sm">
            <Link href="/" className="text-indigo-400 hover:text-indigo-300">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/blog" className="text-indigo-400 hover:text-indigo-300">
              Blog
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-400">{post.title}</span>
          </nav>

          {/* Enhanced Title with Gradient */}
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent mb-4">
            {post.title}
          </h1>
          
          {/* Enhanced Metadata */}
          <div className="flex items-center text-gray-300 mb-8 p-4 bg-slate-800/50 rounded-lg border-l-4 border-indigo-500">
            <span className="text-blue-300">{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            <span className="mx-2 text-indigo-400">•</span>
            <span className="capitalize text-green-300 font-medium">{post.category?.replace('-', ' ')}</span>
            {post.author && (
              <>
                <span className="mx-2 text-indigo-400">•</span>
                <span className="text-yellow-300">By {post.author}</span>
              </>
            )}
          </div>
          
          <MdxContent>
            {post.content}
          </MdxContent>
        </article>
        
        {/* Enhanced Separator */}
        <div className="w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 mt-12 rounded-full"></div>
      </div>
    </div>
  );
}