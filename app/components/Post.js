import Link from "next/link";

export default function Post({ res }) {
  return (
    <div className="post">
      <h2>
        Post: {res.id}
      </h2>
      <h2>
        {res.title}
      </h2>
      <p>
        {res.body}
      </p>
      <strong>
        Avtor Id: {res.userId}
      </strong> <br />
      <Link href='/' className='link'>Назад</Link>
    </div>
  )
}