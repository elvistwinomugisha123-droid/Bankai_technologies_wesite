import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bankaitech.com";

  const blogDir = path.join(process.cwd(), "content/blog");
  const blogPosts: MetadataRoute.Sitemap = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: data.date ? new Date(data.date as string) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });

  return [
    { url: baseUrl,               lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${baseUrl}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${baseUrl}/contact`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...blogPosts,
  ];
}
