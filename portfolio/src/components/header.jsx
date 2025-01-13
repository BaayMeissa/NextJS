import ThemeToggle from "@/ThemeToggle";
import Link from "next/link";
function Header(){
    return(
    <header className="text-3xl flex justify-between px-5 mt-3 bg-black mt-0 text-slate-200 h-20 dark:bg-white">
      <Link href="/" className="self-center dark:text-black">Baay<span className="text-red-400">Meissa</span></Link>
      <div className="flex items-center">
      <nav className="dark:text-black text-xl flex gap-4 px-5">
        <Link href="/about" className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100">About</Link>
        <Link href="/projects" className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100">Projects</Link>
        <Link href="/contact" className="transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-100">Contact</Link>
      </nav>
      <ThemeToggle />
      </div>
    </header>
    )
}

export default Header;