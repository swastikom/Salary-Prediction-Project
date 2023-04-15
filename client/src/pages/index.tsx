import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '@/components/HomePage'
import { Righteous } from 'next/font/google'

const righteous = Righteous({ subsets: ['latin'], weight: ['400'] })
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <HomePage />
    </>
  )
}
