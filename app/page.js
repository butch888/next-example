import Posts from "./components/Posts";

const URL2 = 'https://jsonplaceholder.typicode.com/posts'

async function FetchData() {
  const res = await fetch(URL2);
  const result = await res.json();
  return result;
};


export default async function Home() {
  const posts = await FetchData();

  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
};
