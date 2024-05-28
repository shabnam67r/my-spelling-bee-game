import Link from "next/link";
import Game from '../../componens/Game';

const TurkishPage = ()=>(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-3xl font-bold mb-8">Spelling Bee Game (Turkish)</h1>
    <Link href="/en">
      <p className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mb-4">Switch to English</p>
    </Link>
    <Game language="tr" />
  </div>
);
export default TurkishPage;