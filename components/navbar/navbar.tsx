'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"

function Navbar() {
  const router = useRouter();

  return (
    <nav
      className="flex items-center justify-between rounded w-full mt-5"
    >
      <div className="relative h-10 w-20">
        <Image onClick={() => router.push('/')} src={'/logo.png'} fill alt="logo" className="cursor-pointer"/>
      </div>
      <div className="flex flex-row gap-5">
        <div onClick={() => router.push('/productos')} className="text-white font-semibold cursor-pointer">Productos</div>
      </div>
    </nav>
  )
}

export default Navbar