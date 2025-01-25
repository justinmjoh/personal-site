// Necessary for Next.JS integration
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center p-4 border-t-2 border-black dark:border-white">
            <ul className="flex justify-center items-center p-4 space-x-4">
                <li><a href="https://www.linkedin.com/in/justinmjoh/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a></li>
                <li><a href="https://github.com/justinmjoh" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline"><FontAwesomeIcon icon={faGithub} size="lg"/></a></li>
                <li><a href="mailto:justinmjoh@gmail.com" className="text-yellow-600 hover:underline"><FontAwesomeIcon icon={faEnvelope} size="lg"/></a></li>
            </ul>
            <p>© 2024 Justin Johnson</p>
        </footer>
    )
}