import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Bankai Technologies",
  description: "Insights on AI for African businesses, pharmacy automation, school management, and building tech in Uganda.",
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
}

function getPosts(): PostMeta[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        author: data.author as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="pt-24 bg-bankai-black min-h-screen">
      {/* Header */}
      <section className="section-padding hero-bg">
        <div className="container-max">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block">Blog</span>
            <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-6">
              Insights on{" "}
              <span className="gradient-text">AI for Africa</span>
            </h1>
            <p className="text-bankai-muted font-body text-lg leading-relaxed">
              How we think about building AI for African businesses — from the
              problems we see on the ground to the systems we build to solve them.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-bankai-black">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-dark group block"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-bankai-accent border border-bankai-blue/30 rounded-full px-3 py-1 font-display"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-lg font-bold text-white mb-3 group-hover:text-bankai-accent transition-colors leading-snug flex-grow">
                    {post.title}
                  </h2>
                  <p className="text-bankai-muted font-body text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-bankai-blue/20">
                    <div>
                      <p className="text-white text-xs font-display font-semibold">{post.author}</p>
                      <p className="text-bankai-muted text-xs font-body">
                        {new Date(post.date).toLocaleDateString("en-UG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <span className="text-bankai-accent text-xs font-display font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
