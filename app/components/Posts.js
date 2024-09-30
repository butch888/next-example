import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>
        Home
      </h1>
      {posts.map((el) => (
        <div key={el.id} className="posts">
          <h2>
            {el.title}
          </h2>
          <p>
            {el.body}
          </p>
          <Link href={'/posts/' + el.id} className="link">Детальнее</Link>
        </div>
      ))}
    </div>
  )
}

export default Posts;