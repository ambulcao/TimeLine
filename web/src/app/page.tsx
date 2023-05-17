import { User } from 'lucide-react'

import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/** Left */}
      <div className="bg-[url(../assets/bg-stars.svg)] bg-cover relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/** Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/** Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"/>

        {/** Sign In */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500' />
          </div>

          <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
        </a>

        {/** Hero */}
        <div>
          <Image src={nlwLogo} alt='NLW Space Time'/>

          <div>
            <h1>Sua cápsula do tempo</h1>
            <p>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <a href="">CADASTRAR LEMBRANÇA</a>
        </div>
      </div>

      {/** Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relexad w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{''} 
            <a href='' className="underline hover: text-gray-50">criar agora!</a>
          </p>
        </div>
      </div>
    </main>
  )
}
