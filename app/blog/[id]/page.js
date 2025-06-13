import Link from "next/link"


export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch post")
  }

  return res.json()
}

export default async function BlogPostPage({ params }) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium">
        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <article className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
          <div className="mt-4 flex items-center text-gray-500 text-sm">
            <span>Post #{post.id}</span>
            <span className="mx-2">•</span>
            <span>User {post.userId}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
        </div>
      </article>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View More Posts
        </Link>
      </div>
    </div>
  )
}
