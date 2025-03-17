import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | RESTExplorer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return (
    <main className="min-h-[calc(100vh_-_5.3rem)] grid place-items-center">
      <section className="max-w-5xl space-y-6">
        <h2 className="text-5xl font-bold text-center">About This Website</h2>
        <p className="text-2xl text-gray-500">
          This website uses the
          <span className="text-violet-500 font-medium">
            {" "}
            REST Countries API
          </span>{" "}
          to display comprehensive information about countries from around the
          world.
        </p>
        <p className="text-2xl text-gray-500">
          Explore our data to learn about country names, capitals, regions,
          populations, flags, and much more. Whether you're curious about a
          particular country or looking for insights about global regions, our
          interactive explorer makes it easy.
        </p>
        <p className="text-2xl text-gray-500">
          Our goal is to build a fully responsive and modern web application
          using the latest technologies, including React Router v7 for seamless
          routing and Tailwind CSS for a beautiful, responsive user interface.
        </p>
      </section>
    </main>
  );
}
