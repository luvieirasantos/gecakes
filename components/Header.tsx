import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-center sm:justify-start">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/logo-gecakes.png"
          alt="Logo Ge Cakes"
          width={48}
          height={48}
          className="rounded-full"
          priority
        />
        <span className="text-xl font-script text-marrom hidden sm:inline">
          Ge Cakes
        </span>
      </Link>
    </header>
  )
}
