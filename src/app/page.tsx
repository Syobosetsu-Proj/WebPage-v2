import Link from "next/link";
import { GithubButton, BookButton } from "@/components/ui/buttons";

async function getOrgData() {
    const res = await fetch(`https://api.github.com/orgs/Syobosetsu-Proj`, {
        headers: {
            "User-Agent": "next-app",
        },
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`GitHub API error: ${res.status}`);
    }

    return res.json();
}

export default async function Home() {
    const org = await getOrgData();

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden fade-in">
            <section className="fade-in">
                <div className="relative z-10 container mx-auto px-4 py-16">
                    <div className="flex w-full flex-col items-center justify-center rounded-lg p-8">
                        <div className="mt-8 text-center">
                            <h1 className="text-4xl">Syobosetsu-Proj</h1>
                            <p className="mx-auto mt-4 lg:w-1/1 text-gray-300">
                                Syobosetsu - {org.description}
                            </p>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <GithubButton sublink="Syobosetsu-Proj" />
                            <BookButton link="blog">Blog</BookButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
