import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        className="mb-8"
      />

      <div className="grid gap-4">
        {[
          { title: 'Docs', link: 'https://nextjs.org/docs' },
          { title: 'Learn', link: 'https://nextjs.org/learn' },
          {
            title: 'Templates',
            link: 'https://vercel.com/templates?framework=next.js',
          },
          {
            title: 'Deploy',
            link: 'https://vercel.com/new?utm_source=create-next-app',
          },
        ].map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="bg-gray-200 p-4 rounded-md transition-transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
          </a>
        ))}
      </div>

      <p className="mt-8 text-gray-600">
        Created by <span className="text-blue-500">Jinyshin</span>
      </p>
    </main>
  );
}
