export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center p-4 border-t-2 border-black dark:border-white">
            <ul className="flex justify-center items-center p-4 space-x-4">
                <li><a href="" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">LinkedIn</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">GitHub</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Mail</a></li>
            </ul>
            <p>© 2024 Justin Johnson</p>
        </footer>
    )
}