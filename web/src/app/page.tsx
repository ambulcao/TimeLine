import { Blur } from '@/components/Blur'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Stripes } from '@/components/Stripes'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/** Left */}
      <div className="bg-[url(../assets/bg-stars.svg)] bg-cover relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/** Blur */}
        <Blur />

        {/** Stripes */}
        <Stripes />

        {/** Sign In */}
        <SignIn/>

        {/** Hero */}
        <Hero/>

        {/* Copyright */}
        <Copyright/>

      </div>

      {/** Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
       <EmptyMemories />
      </div>
    </main>
  )
}
