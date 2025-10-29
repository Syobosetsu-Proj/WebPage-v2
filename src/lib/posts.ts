import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            try {
                const slug = fileName.replace(/\.md$/, "");
                const fullPath = path.join(postsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, "utf8");

                const { data, content } = matter(fileContents);

                return {
                    slug,
                    meta: data,
                    content,
                };
            } catch (error) {
                console.error(`Error reading post ${fileName}:`, error);
                return null;
            }
        })
        .filter((post): post is NonNullable<typeof post> => post !== null);
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { slug, meta: data, content };
}
