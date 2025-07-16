import React from "react";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Image from "next/image";
import Link from "next/link";

const recentLinks = [
  { title: "The Power of Consistency", href: "#" },
  { title: "Leadership in Tech", href: "#" },
  { title: "Faith & Career", href: "#" },
  { title: "Building Vision", href: "#" },
  // { title: "God’s Strategy for Work", href: "#" },
];

const samplePosts = [
  {
    id: 1,
    title: "The Focus of Influence",
    category: "Leadership",
    author: "Bola Adisa",
    date: "June 16, 2025",
    avatar: "/about.jpg",
    image: "/rec1.png",
  },
  {
    id: 2,
    title: "Blueprints for Purpose",
    category: "Career",
    author: "Tracey Wilson",
    date: "June 14, 2025",
    avatar: "/icon.png",
    image: "/rec2.png",
  },
  {
    id: 3,
    title: "Workplace Revival",
    category: "Faith",
    author: "Jason Francisco",
    date: "June 12, 2025",
    avatar: "/icon.png",
    image: "/rec3.png",
  },
  {
    id: 4,
    title: "Spiritual Grit at Work",
    category: "Growth",
    author: "Mercy Adeyemi",
    date: "June 10, 2025",
    avatar: "/about.jpg",
    image: "/rec4.png",
  },
  {
    id: 5,
    title: "Influence without Compromise",
    category: "Discipleship",
    author: "Bola Adisa",
    date: "June 08, 2025",
    avatar: "/icon.png",
    image: "/Rectangle 38.png",
  },
  {
    id: 6,
    title: "Tech and Ministry",
    category: "Technology",
    author: "Samuel K.",
    date: "June 06, 2025",
    avatar: "/icon.png",
    image: "/rec1.png",
  },
  {
    id: 7,
    title: "Faith in the Fast Lane",
    category: "Innovation",
    author: "Ruth Adeyeye",
    date: "June 04, 2025",
    avatar: "/about.jpg",
    image: "/rec2.png",
  },
  {
    id: 8,
    title: "Visioneering Your Career",
    category: "Strategy",
    author: "Tom Craig",
    date: "June 02, 2025",
    avatar: "/icon.png",
    image: "/rec3.png",
  },
  {
    id: 9,
    title: "Christ in the Code",
    category: "Tech & Faith",
    author: "Ada Okeke",
    date: "June 01, 2025",
    avatar: "/icon.png",
    image: "/rec4.png",
  },
];

const StaticCard = ({ post }: { post: typeof samplePosts[0] }) => (
  <Link href={`/posts/${post.id}`} className="block">
    <div className="bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition w-full h-full">
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
  </Link>
);

const AllPostsPage = () => {
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
            <StaticCard post={samplePosts[0]} />
          </div>
        </div>

        {/* Static grid of cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-10">
          {samplePosts.slice(1).map((post) => (
            <StaticCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
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
