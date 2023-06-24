import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout title="Home page-Mini Project">
      <h1>Mini Project 1</h1>
   </Layout>
  )
}
