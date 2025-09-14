"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Image from "next/image";
import Link from "next/link";

const ENDPOINT = "http://localhost:8080/fetch-posts.php";

const StaticCard = ({ post }: { post: any }) => (
  <Link href={`/posts/${post.id}`} className="block">
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition w-full h-full">
      <Image
        src={post.banner.startsWith("/") ? post.banner : "/" + post.banner}
        alt={post.title}
        width={400}
        height={240}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Bola Adisa</span> • <span>{post.date}</span>
        </div>
      </div>
    </div>
  </Link>
);

const AllPostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = (data.posts || []).sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load posts");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="py-12 text-center">Loading posts...</div>;
  if (error) return <div className="py-12 text-center text-red-500">{error}</div>;

  // Recent links: most recent 4 post titles
  const recentLinks = posts.slice(0, 4).map((post) => ({
    title: post.title,
    href: `/posts/${post.id}`,
  }));

  // Featured post: latest post (first in sorted array)
  const featuredPost = posts[0];

  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Posts</h2>
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
        {/* Top section: Left links and right card */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Recent post links */}
          <div className="bg-white border rounded-xl shadow-sm p-5">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Recent Insights
            </h3>
            <ul className="space-y-4">
              {recentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="inline-block w-full bg-gray-50 hover:bg-blue-50 text-blue-600 hover:text-blue-800 transition font-medium text-sm px-4 py-2 rounded-lg border border-gray-200"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Featured post card */}
          <div className="md:col-span-2">
            {featuredPost && <StaticCard post={featuredPost} />}
          </div>
        </div>
        {/* Grid of all posts except featured */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-10">
          {posts.slice(1).map((post) => (
            <StaticCard key={post.id} post={post} />
          ))}
        </div>
        {/* Pagination (static, for now) */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-100">
            Previous
          </button>
          <button className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-100 bg-blue-600 text-white">
            1
          </button>
          <button className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-100">
            2
          </button>
          <button className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-100">
            Next
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllPostsPage;
