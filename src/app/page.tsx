import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center text-center justify-center bg-sky-950 h-screen">
      <div className="items-center m-auto p-44 font-sans">
        <h1 className="text-6xl text-slate-50 font-black">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="text-xl p-4 px-24 mb-10 text-slate-400 m-auto">
          A utility-first CSS framework packed with classes like <strong className="text-sky-500">flex</strong>, <strong className="text-sky-500">pt-4</strong>, <strong className="text-sky-500">text-center</strong> and <strong className="text-sky-500">rotate-90</strong> that can be composed to build any design, directly in your markup.
        </p>
        <button className="bg-sky-500 text-white px-8 py-4 rounded-md font-medium">
          Get started
        </button>
      </div>
    </div>
  )
}
