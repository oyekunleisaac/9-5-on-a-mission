import Image from "next/image";
import React from "react";

const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 2,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 3,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 4,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 5,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 6,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 7,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 8,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 9,
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Jason Francisco",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
  ];

  const PostCard = ({
    post,
  }: {
    post: {
      image: string;
      title: string;
      category: string;
      author: string;
      date: string;
      avatar: string;
    };
  }) => (
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={240}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-xs text-blue-600 font-medium mb-1">
          {post.category}
        </p>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Image
            src={post.avatar}
            alt={post.author}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span>{post.author}</span> • <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Latest Post</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="px-6 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition">
          View All Post
        </button>
      </div>
    </section>
  );
};

export default LatestPosts;
