
export async function GET(request) {
  const data = {
    name: 'Vova',
    age: 34,
    bio: 'Something'
  }
  return new Response(JSON.stringify(data))
}