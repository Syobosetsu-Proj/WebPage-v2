"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

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

export function BookButton({ link, children }: { link: string; children: React.ReactNode }) {
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

export function BackButton({ href, label = "Back" }: { href?: string; label?: string }) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (href) {
            router.push(href);
        } else {
            router.back();
        }
    };

    return (
        <button
            onClick={handleClick}
            aria-label={label}
            className="inline-flex items-center gap-3 px-3 py-2 bg-neutral-900/80 border border-neutral-800 text-neutral-100 rounded-lg shadow-sm hover:border-green-500/60 hover:text-green-300 transition-all duration-300"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L6.414 9H17a1 1 0 110 2H6.414l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{label}</span>
        </button>
    );
}