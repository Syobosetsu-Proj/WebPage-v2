import { getAllPosts } from "@/lib/posts";
import { BackButton } from "@/components/ui/buttons";
import Link from "next/link";

export default async function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="text-neutral-100 py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center">
                    <BackButton />
                </div>

                <ul className="mt-12 space-y-6">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="block p-4 border border-neutral-800 rounded-xl bg-neutral-900/80 backdrop-blur-md hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold">{post.meta.title}</h2>
                                    <span className="text-sm text-green-400">
                                        {new Date(post.meta.date).toLocaleDateString("ja-JP", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                                {post.meta.description && (
                                    <p className="mt-2 text-neutral-400 text-sm line-clamp-2">
                                        {post.meta.description}
                                    </p>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            
        </div>
    );
}
