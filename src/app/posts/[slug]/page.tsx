import React from "react";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import Image from "next/image";
import Link from "next/link";

const PostDetailPage = () => {
  return (
    <div>
      <Header />
      <section className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/all-posts" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
          ← Back to All Posts
        </Link>

        <div className="mb-6">
          <Image
            src="/rec1.png"
            alt="Post Cover"
            width={800}
            height={400}
            className="rounded-xl w-full h-64 object-cover"
          />
        </div>

        <p className="text-sm text-gray-500 mb-1">June 16, 2025</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">The Focus of Influence</h1>

        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            A crowded subway, a humming open office, the low whir of factory machines and the
            quietness of an executives in their corner offices—these hardly resemble
            stained-glass sanctuaries. Yet Scripture insists that every square foot of creation
            belongs to God, and that His people are sent into all of it. If Sunday worship is the
            huddle, Monday is the game.
          </p>

          <p>
            The follower of Jesus therefore asks, “How do I advance the Kingdom in the very
            culture that often ignores—or opposes—its King?” Three convictions form an answer:
          </p>

          <ul>
            <li>Disciples intentionally penetrate culture and plant the flag of faith;</li>
            <li>They use whatever position they hold to reform systems misaligned with God’s will;</li>
            <li>
              They view their gifts and talents as Heaven’s tool kit for accomplishing that agenda.
            </li>
          </ul>

          <h2>Penetrating Culture: The art of Quiet Revolution.</h2>
          <p>
            Every workplace harbors an unspoken culture—values, habits, and narratives that shape
            behavior. For disciples, this culture is a battleground where faith must move from
            private conviction to public witness. Jesus’ call to be “salt and light” (Matthew
            5:13–16) is not passive; it demands intentional, countercultural living.
          </p>

          <p>
            Consider the subtle power of consistency: When a coworker navigates a crisis with
            inexplicable peace or a leader prioritizes fairness over profit margins, curiosity
            follows. These moments become doorways for Gospel conversations.
          </p>

          <blockquote>
            Faithfulness, not perfection, is the goal.
          </blockquote>

          <h2>Stewarding Talents and Skills</h2>
          <p>
            God’s Kingdom is advanced not by generic efforts but through the unique talents He
            entrusts to each person. Scripture affirms that “each of you should use whatever gift
            you have received to serve others” (1 Peter 4:10).
          </p>

          <p>
            This requires a shift in perspective: Mundane tasks become acts of worship when done
            for God’s glory (Colossians 3:23). A graphic designer can create beauty that points to
            the Creator; a lawyer can defend the voiceless; a janitor can maintain spaces that
            foster community.
          </p>

          <blockquote>Remember: Your work holds eternal significance.</blockquote>

          <h2>Transforming Systems</h2>
          <p>
            Systems—the policies, hierarchies, and norms governing workplaces—often institutionalize
            human brokenness. Yet Scripture is clear: God cares deeply about justice.
          </p>

          <p>
            Biblical figures like Esther and Nehemiah exemplify this. Similarly, modern believers
            might advocate for equitable hiring practices, ethical supply chains, or challenge
            exploitative labor policies.
          </p>

          <blockquote>
            What step can you take today to align your work with God’s eternal purposes?
          </blockquote>

          <h2>Faithfulness in the Daily Grind</h2>
          <p>
            A disciple’s workplace mission is neither grand nor glamorous—it is a daily commitment
            to small, steadfast acts of obedience. Resistance will come, but Scripture assures us
            that “He who began a good work in you will carry it to completion” (Philippians 1:6).
          </p>

          <p>
            As you file reports, attend meetings, or serve customers, remember: Your work holds
            eternal significance. Start where you are, use what you have, and trust that
            faithfulness—not results—is your measure of success.
          </p>

          <p className="font-semibold italic">
            Reflective Question: What step can you take today to align your work with God’s eternal
            purposes?
          </p>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default PostDetailPage;
