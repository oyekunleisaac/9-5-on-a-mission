import Image from "next/image";
import pic1 from "../../../../public/Image.png";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

export default function BlogPost() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-8 py-10">
        <div className="mb-4">
          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
            Technology
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex items-center text-sm text-gray-500 mb-6 space-x-2">
          <span className="font-medium text-gray-700">Tracey Wilson</span>
          <span>•</span>
          <span>August 20, 2022</span>
        </div>
        <Image
          src={pic1}
          alt="Blog Post Image"
          width={800}
          height={500}
          className="rounded-lg w-full h-auto object-cover mb-6"
        />
        <div className="prose prose-lg max-w-none text-gray-800">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don&apos;t plan and prepare adequately.
          <br />
          <br />
          In this blog article, we&apos;ll explore tips and tricks for a
          memorable journey and how to make the most of your travels. One of the
          most rewarding aspects of traveling is immersing yourself in the local
          culture and customs. This includes trying local cuisine, attending
          cultural events and festivals, and interacting with locals. Learning a
          few phrases in the local language can also go a long way in making
          connections and showing respect.
        </div>
      </div>
      <Footer />
    </>
  );
}
