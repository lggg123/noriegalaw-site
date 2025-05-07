export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  content: string
  category: 'criminal-defense' | 'dui' | 'drug-offenses' | 'legal-tips'
  tags: string[]
}