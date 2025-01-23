import Link from "next/link"

export default function NavBar() {
    return (
        <nav>
            <p>Justin Johnson</p>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
        </nav>
    )
}