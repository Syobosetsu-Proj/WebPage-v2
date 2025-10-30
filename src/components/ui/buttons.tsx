import Link from "next/link";

export function GithubButton({ sublink }: { sublink: string }) {
    return (
        <a
            href={`https://github.com/${sublink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 py-1.5 px-4 inline-flex items-center justify-center gap-2 transition-colors bg-neutral-800 active:bg-neutral-950 font-medium border-neutral-900 text-white rounded-lg hover:bg-neutral-900 disabled:opacity-50"
        >
            <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5 filter invert" />

            <span>GitHub</span>
        </a>
    );
}

export function BookButton({ link, children }: { link: string, children: React.ReactNode }) {
    return (
        <Link
            href={link}
            className="mt-10 py-1.5 px-4 inline-flex items-center justify-center gap-2 transition-colors bg-green-800 active:bg-green-950 font-medium border-green-900 text-white rounded-lg hover:bg-green-900 disabled:opacity-50"
        >
            <img src="/icons/book.svg" alt="Book" className="w-5 h-5 filter invert" />

            <span>{children}</span>
        </Link>
    );
}

export function BackButton({ link }: { link: string }) {
    return (
        <Link href={link} className="mt-6 text-sm font-bold text-green-400 tracking-wide uppercase">
            → Back
        </Link>
    );
}