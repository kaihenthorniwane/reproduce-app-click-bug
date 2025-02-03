import Posts from "@/components/Posts";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen p-8">
      <Posts fallbackData={posts} />
    </main>
  );
}
