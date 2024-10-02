import Post from "@/app/components/Post";

const URL = 'https://jsonplaceholder.typicode.com/posts/';

async function FetchData(id) {
  const res = await fetch(URL + id)
  const result = await res.json()
  return result
}

export default async function PostPage({ params }) {
  const post = await FetchData(params.id);

  return (
    <Post post={post} />
  )
}