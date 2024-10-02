import Posts from "./components/Posts";

const URL1 = 'http://localhost:3000/api/data'

async function FetchData() {
  const res = await fetch(URL2)
  const result = await res.json()
  return result
}


export default async function Home() {
  const posts = await FetchData()
  console.log(posts)


  return (
    <div>
      <Posts posts={posts} />

    </div>

  );
}
