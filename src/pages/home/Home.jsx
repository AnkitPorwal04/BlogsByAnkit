import React from 'react'
import Layout from '../../Components/layout/Layout.jsx'
import HeroSection from '../../Components/heroSection/heroSection.jsx'
import BlogPostCard from '../../Components/blogPostCard/blogPostCard.jsx'

function Home() {
  return (
    <Layout>
        <HeroSection/>
        <BlogPostCard/>
    </Layout>
  )
}

export default Home