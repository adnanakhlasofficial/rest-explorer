import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries | RESTExplorer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Countries() {
  return <div>Countries</div>;
}
