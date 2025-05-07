import { getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link 
        href="/blog"
        className="text-indigo-400 hover:text-indigo-300 mb-8 inline-block"
      >
        ← Back to Blog
      </Link>
      
      <header className="mb-8">
        <span className="text-indigo-400 uppercase text-sm font-semibold">
          {post.category.replace('-', ' ')}
        </span>
        <h1 className="text-4xl font-bold text-white mt-2 mb-4">
          {post.title}
        </h1>
        <div className="text-gray-400">
          {format(new Date(post.date), 'MMMM d, yyyy')}
          {post.author && ` • ${post.author}`}
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        {post.content}
      </div>

      <div className="mt-12 border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Need Legal Help?
        </h2>
        <p className="text-gray-300 mb-4">
          Contact us for a consultation about your case.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </article>
  );
}