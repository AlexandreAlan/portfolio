import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  readTime: string
  githubRepo?: string
  rating?: number
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return []

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(raw)

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      description: data.description ?? '',
      tags: data.tags ?? [],
      readTime: data.readTime ?? '5 min',
      githubRepo: data.githubRepo ?? null,
      rating: data.rating ?? 5,
    } as PostMeta
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    readTime: data.readTime ?? '5 min',
    githubRepo: data.githubRepo ?? null,
    rating: data.rating ?? 5,
    content: processed.toString(),
  }
}
