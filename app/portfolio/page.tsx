export default function Projects() { 
    return (
        <main className="flex items-center justify-center min-h-screen">
            <section className="border-2 border-black dark:border-white p-8 m-8">
                <h1 className="text-4xl font-bold">What I've Done.</h1>
                <h2 className="text-3xl font-bold mt-4">Projects</h2>
                <p className="mt-4 text-lg">
                    Here are some of the projects I've worked on in the past.
                </p>
                <ul className="mt-4 list-inside">
                    <li>
                        <h3 className="text-xl font-bold">
                            <a className="text-yellow-600 hover:underline" href="https://shop.arizona.edu" target="_blank" rel="noopener noreferrer">
                                The University of Arizona BookStores Site
                            </a>
                        </h3>
                        <ul className="list-disc ml-4 text-lg">
                            <li>Communicated with business and marketing teams across campus to design an engaging and user friendly UI for customers nationwide.</li>
                            <li>Helped train e-Commerce team members on the NetSuite CMS, streamlining content updates to the site.</li>
                            <li>Extended the CMS with custom components, allowing for image carousels improved clickable dropdowns.</li>
                        </ul>
                        <p className="font-bold text-lg">NetSuite, HTML, JavaScript, CSS</p>
                    </li>
                    <li className="mt-4">
                        <h3 className="text-xl font-bold">Student Union Tech</h3>
                        <ul className="list-disc ml-4 text-lg">
                            <li>Led development of this project which ultimately streamlined communication between teams across the university's student union.</li>
                            <li>Utilized Jigsaw and BitBucket Pipelines to deliver fast static content delivery and reduce the overhead for deployments.</li>
                            <li>Leveraged Microsoft PowerAutomate on request forms to reduce development time, offering robust low-code solutions.</li>
                        </ul>
                        <p className="font-bold text-lg">Jigsaw/Laravel, AWS S3, CI/CD, Microsoft PowerAutomate</p>
                    </li>
                    <li className="mt-4">
                        <h3 className="text-xl font-bold">
                            <a className="text-yellow-600 hover:underline" href="https://github.com/justinmjoh/personal-site" target="_blank" rel="noopener noreferrer">
                                My Website
                            </a>
                        </h3>
                        <ul className="list-disc ml-4 text-lg">
                            <li>Leverages GitHub pages for reliable hosting.</li>
                            <li>Integrates a GitHub Action workflow to automate deployment on pushes.</li>
                            <li>Utilizes Next.JS and Tailwind to provide a performative and (dare I say stylish) web presence. Next.JS's "Link" component is used to reduce load times across pages, further increasing performance.</li>
                        </ul>
                        <p className="font-bold text-lg">Next.JS, React, CI/CD, GitHub Pages</p>
                    </li>
                    <li className="mt-4">
                        <h3 className="text-xl font-bold">TCP Mobile Client</h3>
                        <ul className="list-disc ml-4 text-lg">
                            <li>Allowed for seemless use of telnet command execution over terminal with increased oversight for network interruptions.</li>
                            <li>Written in C, we leveraged the socket API to implement reliable delivery across network interruptions and IP address changes.</li>
                        </ul>
                        <p className="font-bold text-lg">C, TCP/IP, Linux</p>
                    </li>
                    <li className="mt-4">
                        <h3 className="text-xl font-bold">More to be added soon...</h3>
                    </li>
                </ul>
                <h2 className="text-3xl font-bold mt-4">Credibility</h2>
                <h3 className="text-xl font-bold mt-4">Education</h3>
                <p className="text-lg">
                    Bachelor of Science in Computer Science from The University of Arizona, 2024
                </p>
                <h3 className="text-xl font-bold mt-4">Certifications</h3>
                <p className="text-lg">
                    Microsoft Copilot for Software Development Specialization, 2025
                </p>
            </section>
        </main>
    );
}

export const metadata = {
    title: "Portfolio | Justin Johnson",
  };