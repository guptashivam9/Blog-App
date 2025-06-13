import BlogPostCard from "./components/BlogPostCard"

// Static Site Generation - fetch data at build time
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }

  return res.json()
}

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-bounce">Welcome to My Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover interesting articles and insights on various topics. Click on any post to read the full content.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
