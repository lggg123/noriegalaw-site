import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { BlogPost } from '@/types/blog'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

// Helper function to process markdown to HTML
async function processMarkdown(content: string): Promise<string> {
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content)
  return processedContent.toString()
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(async fileName => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        // Process markdown to HTML
        const processedContent = await processMarkdown(content)
        
        return {
          slug,
          content: processedContent, // Now HTML instead of raw markdown
          ...data,
        } as BlogPost
      })
  )
  
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
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
    
    // Process markdown to HTML
    const processedContent = await processMarkdown(content)
    
    // Return the post data
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      content: processedContent, // Now HTML instead of raw markdown
    };
  } catch (error) {
    console.error(`Error getting post with slug: ${slug}`, error);
    return null;
  }
}