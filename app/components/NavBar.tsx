import Link from "next/link"
import { Over_the_Rainbow } from "next/font/google"

const overTheRainbow = Over_the_Rainbow({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})

export default function NavBar() {
    return (
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center p-4 border-b-2 border-black dark:border-white">
            <h1 className={`${overTheRainbow.className} text-4xl md:text-2xl`}>&lt;<Link href="/" className={`text-yellow-600 hover:underline`}>Justin Johnson</Link>&#47;&gt;</h1>
            <div className="space-x-4">
                <Link href="/" className=" hover:underline">Home</Link>
                <Link href="/about" className=" hover:underline">About</Link>
                <Link href="/portfolio" className=" hover:underline">Portfolio</Link>
            </div>
        </nav>
    )
}