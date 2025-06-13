import Link from "next/link"

export default function BlogPostCard({ post }) {
  // Truncate body to 100 characters
  const truncatedBody = post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body

  return (
    <Link href={`/blog/${post.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full cursor-pointer border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{truncatedBody}</p>
        <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
          Read more
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
