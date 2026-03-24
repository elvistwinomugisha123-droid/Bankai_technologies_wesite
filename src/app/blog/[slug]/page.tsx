import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function generateStaticParams(): Promise<Params[]> {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
  return files.map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.data.title as string,
    description: post.data.excerpt as string,
    openGraph: {
      type: "article",
      title: post.data.title as string,
      description: post.data.excerpt as string,
      url: `https://bankaitech.com/blog/${slug}`,
      siteName: "Bankai Technologies",
      publishedTime: post.data.date as string,
      authors: [post.data.author as string],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { data, content } = post;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title as string,
    description: data.excerpt as string,
    datePublished: data.date as string,
    author: {
      "@type": "Person",
      name: data.author as string,
    },
    publisher: {
      "@type": "Organization",
      name: "Bankai Technologies",
      logo: {
        "@type": "ImageObject",
        url: "https://bankaitech.com/logo.png",
      },
    },
    url: `https://bankaitech.com/blog/${slug}`,
  };

  return (
    <div className="pt-24 bg-bankai-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <article className="section-padding">
        <div className="container-max max-w-3xl mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-bankai-muted hover:text-bankai-accent font-body text-sm transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {((data.tags as string[]) || []).map((tag: string) => (
              <span
                key={tag}
                className="text-xs text-bankai-accent border border-bankai-blue/30 rounded-full px-3 py-1 font-display"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {data.title as string}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-bankai-blue/20">
            <div>
              <p className="text-white font-display font-semibold text-sm">{data.author as string}</p>
              <p className="text-bankai-muted text-xs font-body">
                {new Date(data.date as string).toLocaleDateString("en-UG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none font-body
            prose-headings:font-display prose-headings:font-bold prose-headings:text-white
            prose-p:text-bankai-muted prose-p:leading-relaxed
            prose-a:text-bankai-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-bankai-muted prose-ol:text-bankai-muted
            prose-li:marker:text-bankai-accent
            prose-hr:border-bankai-blue/20
            prose-blockquote:border-l-bankai-accent prose-blockquote:text-bankai-muted
          ">
            <MDXRemote source={content} />
          </div>

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-bankai-blue/20">
            <p className="text-bankai-muted font-body text-sm mb-4">
              Interested in what we&apos;re building?
            </p>
            <Link
              href="https://wa.me/256788572959?text=Hello Bankai Technologies, I read your blog and I'd like to learn more."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Talk to Us on WhatsApp
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
