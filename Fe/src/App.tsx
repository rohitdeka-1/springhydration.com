import { useEffect, useState } from "react"

const COLORS = [
  "bg-white",
  "bg-blue-500",
  "bg-red-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
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
          <h1 className={`${COLORS[colorIndex] == "bg-white" ? "text-black" : "text-white"} ease-in text-left text-[120px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none tracking-[0.06em]`}>SPRING</h1>
          <h2 className={`${COLORS[colorIndex] == "bg-white" ? "text-black" : "text-white"} ease-in text-center text-[26px]  sm:text-[42px] md:text-[42px] lg:text-[29px] leading-none tracking-[0.091em]  sm:ml-2 lg:ml-3`}>HYDRATION</h2>
        </div>

        <div className="absolute bottom-0 w-full py-4">
          <p className={`${COLORS[colorIndex] == "bg-white" ? "text-black" : "text-white"} ease-in-out text-center text-sm tracking-widest `}>LAUNCHING SOON....</p>
        </div>

      </div >
    </>
  )
}

export default App
