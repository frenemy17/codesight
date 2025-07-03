import React from 'react'

function Hero() {
  return (
    <div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600 rounded-full blur-[160px] opacity-20 z-[-1]" />
      <section className="relative z-10 mt-44 text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-500 via-gray-300 to-zinc bg-clip-text text-transparent">
        Know What Files Will Break Next.
      </h1>
      <p className="mt-6 text-lg text-zinc-200 max-w-xl mx-auto ">
        CodePulse analyzes your codebase and shows you which files are bug-prone, churn-heavy, and risky — in real time.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#"
          className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition"
        >
          Try Live Demo
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition"
        >
          GitHub Repo
        </a>
      </div>
    </section>
    </div>
  )
}

export default Hero

