import Image from "next/image";
import image from "../../public/about.jpg";

export default function ContactUs() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Image */}
      <div className="w-full">
        <Image
          src={image}
          placeholder="blur"
          alt="Contact Person"
          width={500}
          height={600}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right: Form */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Contact us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-bold px-6 py-3 rounded-md hover:bg-orange-600 transition w-full md:w-auto"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}
