"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const LatestPosts = () => {
  const posts = [
    {
      id: 1,
      title: "The Focus of influence",
      category: "Technology",
      author: "Bola Adisa",
      date: "June 16, 2025",
      avatar: "/about.jpg",
      image: "/rec1.png",
    },
    {
      id: 2,
      title: "God's Blueprints: Purpose-Driven Success in the workplace.",
      category: "Technology",
      author: "Bola Adisa",
      date: "June 09, 2025",
      avatar: "/about.jpg",
      image: "/rec2.png",
    },
    {
      id: 3,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Bola Adisa",
      date: "June 02, 2025",
      avatar: "/about.jpg",
      image: "/rec3.png",
    },
    {
      id: 4,
      title: "A COMPELLING ARGUMENT FOR DISCIPLES IN THE WORKPLACE.",
      category: "Technology",
      author: "Bola Adisa",
      date: "May 26, 2025",
      avatar: "/about.jpg",
      image: "/rec4.png",
    },
    {
      id: 5,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      category: "Technology",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      avatar: "/icon.png",
      image: "/Rectangle 38.png",
    },
    {
      id: 6,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
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
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition w-full">
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

  // Carousel logic for first 6 posts, 2 at a time on desktop, 1 at a time on mobile
  const carouselPosts = posts.slice(0, 6);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Determine window size for carousel (2 for md+, 1 for mobile)
  const [windowSize, setWindowSize] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth < 768 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselPosts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselPosts.length]);

  // Get the cards to display in the carousel window
  const getWindowPosts = () => {
    return Array.from({ length: windowSize }).map((_, i) =>
      carouselPosts[(carouselIndex + i) % carouselPosts.length]
    );
  };

  // All posts for the grid
  const gridPosts = posts;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Latest Post</h2>

      {/* Carousel for first 6 posts, 2 at a time on desktop, 1 on mobile */}
      <div className="relative w-full h-[370px] mb-8 overflow-hidden flex justify-end">
        <div className="flex gap-6 transition-all duration-500 w-full md:max-w-2xl">
          {getWindowPosts().map((post) => (
            <div
              key={post.id}
              className={`w-full ${windowSize === 2 ? "md:w-1/2" : ""}`}
              style={{
                minWidth: windowSize === 2 ? "50%" : "100%",
                maxWidth: windowSize === 2 ? "50%" : "100%",
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
                carouselIndex === idx
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300"
              }`}
              onClick={() => setCarouselIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Grid for all posts */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {gridPosts.map((post) => (
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