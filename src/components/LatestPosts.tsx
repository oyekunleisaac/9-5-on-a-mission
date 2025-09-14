"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ENDPOINT = "http://localhost:8080/fetch-posts.php"; // Change to your PHP API endpoint

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(4);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        // Sort posts by date descending
        const sortedPosts = (data.posts || []).sort((a: any, b: any) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load posts");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setWindowSize(1);
      } else if (width < 1024) {
        setWindowSize(2);
      } else {
        setWindowSize(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % Math.min(posts.length, 6));
    }, 2500);
    return () => clearInterval(interval);
  }, [posts.length]);

  const getWindowPosts = () => {
    const carouselPosts = posts.slice(0, 6);
    return Array.from({ length: windowSize }).map((_, i) =>
      carouselPosts[(carouselIndex + i) % carouselPosts.length]
    );
  };

  const PostCard = ({
    post,
  }: {
    post: {
      id: number;
      title: string;
      content: string;
      date: string;
      banner: string;
    };
  }) => (
    <Link href={`/posts/${post.id}`} className="block h-full">
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition w-full h-full flex flex-col">
        <Image
          src={post.banner.startsWith("/") ? post.banner : "/" + post.banner}
          alt={post.title}
          width={400}
          height={240}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col justify-between flex-grow">
          <h3 className="text-sm font-semibold text-gray-900 mb-1 min-h-[2.5rem]">
            {post.title}
          </h3>
          <p className="text-xs text-gray-600 mb-2 min-h-[1.5rem]">
            {post.content
              ? post.content.split(" ").slice(0, 18).join(" ") +
                (post.content.split(" ").length > 18 ? "..." : "")
              : ""}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
            <span>Bola Adisa</span> • <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  if (loading) return <div className="py-12 text-center">Loading posts...</div>;
  if (error) return <div className="py-12 text-center text-red-500">{error}</div>;

  const carouselPosts = posts.slice(0, 6);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Latest Post</h2>
      {/* Carousel */}
      <div className="relative w-full h-[370px] mb-8 overflow-hidden">
        <div className="flex gap-6 transition-all duration-500">
          {getWindowPosts().map((post: any) => (
            <div
              key={post.id ?? Math.random()}
              className="flex-shrink-0"
              style={{
                flex: `0 0 ${100 / windowSize}%`,
                maxWidth: `${100 / windowSize}%`,
              }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2 absolute left-0 right-0 bottom-2">
          {carouselPosts.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                carouselIndex === idx ? "bg-blue-600 scale-110" : "bg-gray-300"
              }`}
              onClick={() => setCarouselIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Grid for all posts */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post: any) => (
          <PostCard key={post.id ?? Math.random()} post={post} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/all-posts">
          <button className="px-6 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition">
            View All Posts
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;
