import { allPosts } from "contentlayer/generated";
import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen h-full flex justify-center bg-neutral-900 p-4">
      <div>
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full">
          <div className="sticky top-2 z-[99]">
            <nav className="flex justify-between items-center p-4 rounded-md bg-neutral-800 backdrop-blur-lg bg-opacity-50 border border-neutral-800">
              <h2 className="text-xl font-bold text-neutral-100">domi.sh</h2>
            </nav>
          </div>
          <section className="p-4 pt-10">
            <div className="flex flex-row items-start">
              <h1 className="text-5xl font-bold text-neutral-100">Blog</h1>
            </div>
            <p className="text-neutral-200 mt-4">
              Here you can find all my blog posts. I write about web
              development, software engineering, and other interesting topics.
              Enjoy reading!
            </p>
          </section>
          <section className="p-4">
            {allPosts.length === 0 && (
              <div className="text-neutral-200">No posts found.</div>
            )}
            {allPosts.length > 0 &&
              allPosts.map((post) => (
                <div
                  key={post.slug}
                  className="w-full p-4 bg-transparent rounded-md hover:bg-neutral-800 transition-all cursor-pointer"
                  onClick={() => router.push(`/blog/${post.slug}`)}
                >
                  <div className="flex flex-row items-center">
                    <span className="text-neutral-200 text-xs">
                      {post.publishedAtHuman}
                    </span>
                    <span className="text-neutral-500 text-xs ml-2">•</span>
                    <span className=" text-xs ml-2 uppercase text-transparent bg-clip-text bg-gradient-to-t from-pink-500 to-pink-600 font-bold">
                      {post.tags ? post.tags.join(", ") : ""}
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-200 text-2xl">
                    <span className="text-neutral-200">
                      {post.title}
                    </span>
                  </h4>
                  <p className="text-neutral-200 mt-2">
                    {post.summary}
                  </p>
                </div>
              ))}
          </section>
          <div
            className="block w-full p-4 text-center bg-neutral-800 rounded-md border border-neutral-800 backdrop-blur-md bg-opacity-50 hover:bg-opacity-60 transition-all mt-4 text-neutral-100 tracking-widest uppercase cursor-pointer"
            onClick={() => router.push("/")}
          >
            Go back to the homepage
          </div>
        </div>
        <footer className="mt-8 mb-3 text-center text-neutral-500 text-sm">
          © 2024 Dominik Hůla. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
