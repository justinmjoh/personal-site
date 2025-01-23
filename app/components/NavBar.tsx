import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b-2 border-white">
            <p className="text-lg font-bold">Justin Johnson</p>
            <div className="space-x-4">
                <Link href="/" className=" hover:underline">Home</Link>
                <Link href="/about" className=" hover:underline">About</Link>
                <Link href="/projects" className=" hover:underline">Projects</Link>
            </div>
        </nav>
    )
}