import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | RESTExplorer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function About() {
  return <div>About</div>;
}
