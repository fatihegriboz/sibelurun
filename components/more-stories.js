import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="text-center mb-8 text-2xl font-bold tracking-tighter leading-tight">
        Son Yazılar
      </h2>
      <h3>
        Mesleğime ve sektörüme yönelik güncel olayları, deneyimlerimi ve
        ünlülerin evlerine ait yorumlarımı blog yazılarımda bulabilirsiniz...
      </h3>
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
