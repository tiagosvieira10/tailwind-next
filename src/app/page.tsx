import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center text-center justify-center bg-sky-950 h-screen">
      <div className="items-center m-auto p-44 font-sans">
        <h1 className="text-6xl font-black">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="text-xl p-4 px-48 m-auto">
          A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
        </p>
        <button className="bg-sky-500 text-white px-8 py-4 rounded-md font-medium">
          Get started
        </button>
      </div>
    </div>
  )
}
