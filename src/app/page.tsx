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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-neutral-100"
        viewBox="0 0 98 96"
        width="20"
        height="20"
      >
        <path
          fillRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        ></path>
      </svg>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512" // 元のSVGに合わせる
        width={20}
        height={20}
        className="fill-current"
      >
        <path
          fillRule="evenodd"
          d="M511.414,238.174c-1.902-9.034-8.242-16.503-16.851-19.856l-30.199-11.736v31.046l5.718,2.223
              c2.58,1.008,4.483,3.25,5.048,5.953c0.565,2.712-0.263,5.538-2.223,7.497L279.143,447.057c-3.834,3.824-9.56,5.03-14.62,3.071
              L41.756,363.489c-12.386-4.692-12.395-21.542-10.842-43.358c1.356-18.894,7.423-43.648,28.466-42.481l192.202,74.752
              c17.228,6.698,36.782,2.553,49.819-10.559L487.169,154.85c6.499-6.537,9.268-15.919,7.356-24.934
              c-1.912-9.023-8.242-16.474-16.833-19.809l-191.024-74.29c-17.228-6.698-36.792-2.553-49.819,10.559L21.646,262.984
              C4.625,276.991,0,303.111,0,326.311c0,23.199,1.545,51.044,27.844,61.866l-6.198-1.451l230.039,89.456
              c17.18,6.678,36.679,2.58,49.716-10.456l202.591-202.591C510.52,256.607,513.317,247.216,511.414,238.174z"
        />
      </svg>
      <span>{text}</span>
    </a>
  );
}

export default async function Home() {
  const org = await getOrgData();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <Image
        src="/bk1.png"
        alt="Space background"
        fill
        unoptimized
        className="object-cover"
      />

      <section>
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
