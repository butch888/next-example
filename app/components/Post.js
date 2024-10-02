import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="post">
      <h2>
        Post: {post.id}
      </h2>
      <h2>
        {post.title}
      </h2>
      <p>
        {post.body}
      </p>
      <strong>
        Avtor Id: {post.userId}
      </strong> <br />
      <Link href='/' className='link'>Назад</Link>
    </div>
  )
}