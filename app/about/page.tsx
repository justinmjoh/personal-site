export default function About() {
  return (
    <main className="flex items-center justify-center min-h-screen">
    <section className="border-2 border-black dark:border-white p-8 m-8">
      <h1 className="text-4xl font-bold">WHOIS Justin?</h1>
      <p className="mt-4 text-lg">
        I am a full stack software engineer with a life long passion for technology. I love to stay on top of the latest trends and technologies in the industry. I have experience in a variety of programming languages and frameworks, including JavaScript/TypeScript, React, Next.JS, Node.JS, and more. Most recently, I've done a deep dive into generative AI and how it can be applied to solve problems in the realm of web development. I am always looking for new challenges and opportunities to learn and grow as a developer.
      </p>
      <p className="mt-4 text-lg">
        I graduated from The University of Arizona in 2024 with a BS in Computer Science, and was fortunate to have the opportunity to work with on-campus business teams for over 2 years where the code I worked on had a nationwide impact. I am now seeking new opportunities to apply my skills and knowledge in a professional setting, and continue to grow while making an impact.
      </p>
      <p className="mt-4 text-lg">
        I am currently located in northern Maryland, and seeking opportunities nationwide. I am open to both remote work and relocating myself for the right opportunity. Please don't hesitate to <a href="mailto:justinmjoh@gmail.com" className="text-yellow-600 hover:underline">reach out</a> if you have any questions or would like to connect!
      </p>
    </section>
  </main>
  );
}

export const metadata = {
  title: "About | Justin Johnson",
};