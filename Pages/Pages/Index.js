import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-gray-800 flex flex-col items-center justify-center p-4">
      <Head>
        <title>IELTS Pal</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Welcome to IELTS Pal</h1>
      <p className="text-lg text-center mb-6">Your AI-powered IELTS Practice Companion</p>
      <Link href="/speaking" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
        Start Speaking Practice
      </Link>
    </div>
  );
}
