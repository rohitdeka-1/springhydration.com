import { useEffect, useState } from "react"

const COLORS = [
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-300",
  "bg-orange-400",
  "bg-pink-400",
  "bg-purple-400"
];

function App() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLORS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`text-3xl flex flex-col min-h-screen relative ${COLORS[colorIndex]} w-full items-center justify-center transition-colors duration-1000 ease-in-out`}>
        <div className="flex flex-col px-4">
          <h1 className="text-black text-left text-[75px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none tracking-[0.093em]">SPRING</h1>
          <h1 className="text-black text-left text-[26px] sm:text-[42px] md:text-[56px] lg:text-[70px] leading-none tracking-[0.091em] ml-1 sm:ml-2 lg:ml-3">HYDRATION</h1>
        </div>

        <div className="absolute bottom-0 w-full py-4">
          <p className="text-black text-center text-sm tracking-widest font-semibold">LAUNCHING SOON....</p>
        </div>

      </div>
    </>
  )
}

export default App
