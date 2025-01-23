import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b-2 border-black dark:border-white">
            <Link href="/" className="text-xl text-yellow-600 font-bold hover:underline">Justin Johnson</Link>
            <div className="space-x-4">
                <Link href="/" className=" hover:underline">Home</Link>
                <Link href="/about" className=" hover:underline">About</Link>
                <Link href="/portfolio" className=" hover:underline">Portfolio</Link>
            </div>
        </nav>
    )
}