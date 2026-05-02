import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Specialties from '@/components/Specialties'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import BlogSection from '@/components/BlogSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <TechStack />
        <Projects />
        <BlogSection posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
