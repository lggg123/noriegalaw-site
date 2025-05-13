import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        content,
        ...data,
      } as BlogPost
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Check if the post exists
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    // Read the file content
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse the frontmatter and content
    const { data, content } = matter(fileContents);
    
    // Return the post data
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      content: content,
    };
  } catch (error) {
    console.error(`Error getting post with slug: ${slug}`, error);
    return null;
  }
}