export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="border-2 border-black dark:border-white p-8 m-8">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        <p className="mt-4 text-lg">Welcome to my website.</p>
      </section>
    </main>
  );
}

export const metadata = {
  title: "Home | Justin Johnson",
};