import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen py-2">
      <div className="flex flex-row  md:w-1/2">
        <div className="absolute top-0 left-0">
          <img src="/images/Frame 5.png" alt="Frame 5" className="w-64 h-64" />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mt-8 text-left">
            <h1 className="text-6xl font-bold mb-4">Welcome to</h1>
            <h2 className="text-6xl color-yellow font-bold mb-8">
              Spelling Bee Game
            </h2>
            <div className="flex justify-left items-left space-x-4">
              <Link href="/en">
                <p className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
                  Play in English
                </p>
              </Link>
              <Link href="/tr">
                <p className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                  Play in Turkish
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen py-2 md:space-x-8 md:items-center">
        <div className="absolute top-0 right-0 flex flex-row w-auto hidden md:block">
          <img src="/images/Frame 3.png" alt="Frame 3" className="h-1/2 w-64" />
          <img src="/images/Frame 1.png" alt="Frame 1" className="h-3/4 w-64" />
          <img src="/images/Frame 2.png" alt="Frame 2" className="h-5/6 w-64" />
        </div>
      </div>
    </div>
  );
}
