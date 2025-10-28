import Image from "next/image";

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

export function GithubButton(sublink: string) {
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

export function BookButton(link: string, text: string) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      className="mt-10 py-1.5 px-4 inline-flex items-center justify-center gap-2 transition-colors bg-green-800 active:bg-green-950 font-medium border-green-900 text-white rounded-lg hover:bg-green-900 disabled:opacity-50"
    >
      <img src="/icons/book.svg" alt="GitHub" className="w-5 h-5 filter invert" />

      <span>{text}</span>
    </a>
  );
}

export default async function Home() {
  const org = await getOrgData();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 fade-in">
      <Image
        src="/bk1.png"
        alt="Space background"
        fill
        unoptimized
        className="object-cover"
      />

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
              {GithubButton("Syobosetsu-Proj")}
              {BookButton("blog", "Blog")}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
