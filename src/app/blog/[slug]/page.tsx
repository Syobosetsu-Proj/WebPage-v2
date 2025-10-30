import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { BackButton } from "@/components/ui/buttons";
import { notFound } from 'next/navigation';
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;

    try {
        const post = getPostBySlug(slug);
        const processedContent = await remark().use(html).process(post.content);
        const contentHtml = processedContent.toString();

        return (
            <div className="min-h-screen text-neutral-100 py-20 px-6">
                <article className="max-w-5xl mx-auto bg-neutral-900/80 border border-neutral-800 backdrop-blur-md rounded-2xl shadow-md overflow-hidden p-10">
                    <header className="border-b border-neutral-800 pb-6 mb-10">
                        <p className="text-sm text-green-400 tracking-wide uppercase">
                            {new Date(post.meta.date).toLocaleDateString("ja-JP", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <h1 className="mt-3 text-3xl font-bold text-white">{post.meta.title}</h1>
                        {post.meta.description && (
                            <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                                {post.meta.description}
                            </p>
                        )}
                    </header>

                    <div
                        className="prose prose-invert lg:prose-xl max-w-none"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    <footer className="border-t border-neutral-800 pt-6 mt-10">
                        <BackButton link="/blog" />
                    </footer>
                </article>
            </div>
        );
    } catch (error) {
        console.error(`Failed to load post ${slug}:`, error);
        notFound();
    }
}
