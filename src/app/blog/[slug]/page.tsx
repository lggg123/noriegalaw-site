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

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-400 mb-8">
            <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{post.category?.replace('-', ' ')}</span>
            {post.author && (
              <>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
          
          <MdxContent>
            {post.content}
          </MdxContent>
        </article>
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Need Legal Assistance?
                </h3>
                <p className="text-gray-300">
                  Contact us for a consultation regarding your case.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href="/contact"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/blog"
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Law Offices of Chris Noriega. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link 
                href="/"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/blog"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/about"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}