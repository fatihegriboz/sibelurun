import Link from 'next/link'
import PostPreview from '../components/post-preview'
import Container from './container'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-20 md:gap-y-10 mb-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
