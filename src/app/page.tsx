import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/Hero'
import Filegrid from '@/components/Filegrid'
import FileModal from '@/components/FileModal'


export default function Page() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600 rounded-full blur-[150px] opacity-30 z-[-1]" />

      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      <section className="z-10 relative mt-32 text-center px-4">


        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[120px] opacity-20 z-[-1]" />
        <div className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-pink-500 rounded-full blur-[100px] opacity-10 z-[-1]" />

      </section>

<div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-600 rounded-full blur-[200px] opacity-30 z-[-1]" />


<div className="absolute top-80 right-1/3 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] opacity-20 z-[-1]" />


<div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-10 z-[-1]" />

     
      
<Hero/>

<Filegrid />
<FileModal/>




    </main>
  )
}
