"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Image from "next/image";
import Link from "next/link";

const PostDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    fetch(`http://localhost:8080/fetch-single-post.php?id=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.post) {
          setPost(data.post);
        } else {
          setError("Post not found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load post");
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="py-12 text-center">Loading post...</div>;
  if (error) return <div className="py-12 text-center text-red-500">{error}</div>;
  if (!post) return null;

  return (
    <div>
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/all-posts" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
          ← Back to All Posts
        </Link>
        <div className="mb-6">
          <Image
            src={post.banner.startsWith("/") ? post.banner : "/" + post.banner}
            alt="Post Cover"
            width={800}
            height={400}
            className="rounded-xl w-full h-64 object-cover"
          />
        </div>
        <p className="text-sm text-gray-500 mb-1">{post.date}</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <article className="prose prose-lg max-w-none text-gray-800">
          {post.content.split('\n').map((para: string, idx: number) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default PostDetailPage;
