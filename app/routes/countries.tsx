import { useState } from "react";
import type { Route } from "./+types/about";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries | RESTExplorer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const countries: any = loaderData;
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = countries.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase() === region.toLowerCase();

    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  return (
    <main className="container mx-auto px-4 my-12 space-y-12">
      <h2 className="text-2xl font-semibold">
        Countries: {filteredCountries.length}
      </h2>
      <form className="flex gap-4">
        <div className="w-full">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 min-h-12 w-full border border-gray-300 rounded-md outline-none focus:border-violet-500 transition-colors duration-300"
            type="text"
            placeholder="Search by name..."
          />
        </div>
        <div className="w-full">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-4 py-2 min-h-12 w-full border border-gray-300 rounded-md outline-none focus:border-violet-500 transition-colors duration-300"
          >
            <option value="">All Regions</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </form>
      <section className="grid grid-cols-3 gap-6">
        {filteredCountries.map((country: any, key: number) => (
          <Link to={`/countries/${country.name.common}`}>
            <div
              className="p-6 border border-gray-300 rounded-lg hover:border-violet-500 transition-colors duration-300"
              key={key}
            >
              <h3 className="text-xl font-bold text-violet-700 mb-2">
                {country.name.common}
              </h3>
              <p className="text-gray-500">
                Region:{" "}
                <span className="font-medium text-slate-800">
                  {country.region}
                </span>
              </p>
              <p className="text-gray-500">
                Population:{" "}
                <span className="font-medium text-slate-800">
                  {country.population.toLocaleString()}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
