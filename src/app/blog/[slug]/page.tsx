import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import MdxContent from '@/components/MdxContent';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {post.title}
      </h1>
      
      <div className="flex items-center text-gray-400 mb-8">
        <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
        <span className="mx-2">•</span>
        <span className="capitalize">{post.category?.replace('-', ' ')}</span>
      </div>
      
      <MdxContent>
        {post.content}
      </MdxContent>
    </article>
  );
}