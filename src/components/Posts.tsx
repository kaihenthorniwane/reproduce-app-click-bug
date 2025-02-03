"use client";

import useSWR from "swr";
import type { Post } from "@/types/post";

type PostsProps = {
  fallbackData: Post[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Posts({ fallbackData }: PostsProps) {
  const { data: posts } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    { fallbackData }
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        {posts?.map((post) => (
          <article
            key={post.id}
            className="p-4 rounded-lg border border-gray-200 hover:border-gray-300"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
