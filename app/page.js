import Posts from "./components/Posts";

const URL = 'https://jsonplaceholder.typicode.com/posts';

async function FetchData() {
  const res = await fetch(URL);
  const result = await res.json();
  return result;
}


export default async function Home() {

  const posts = await FetchData();

  return (
    <Posts posts={posts} />
  );
}
