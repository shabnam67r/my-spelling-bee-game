import Link from "next/link";
import Game from "../../componens/Game";

const EnglishPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-3xl font-bold mb-8">Spelling Bee Game (English)</h1>
    <Link href="/tr">
      <p className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mb-4">
        Switch to Turkish
      </p>
    </Link>
    <Game language="en" />
  </div>
);
export default EnglishPage;
