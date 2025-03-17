import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const { countryName } = params;
  const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  const response = await fetch(url);
  return await response.json();
}

export default function Country({
  loaderData: countryDetails,
}: Route.ComponentProps) {
  console.log(countryDetails);
  const country = {
    name: countryDetails[0]?.name?.common || "N/A",
    officialName: countryDetails[0]?.name?.official || "N/A",
    capital: countryDetails[0]?.capital || "N/A",
    region: countryDetails[0]?.region || "N/A",
    subregion: countryDetails[0]?.subregion || "N/A",
    population: countryDetails[0]?.population?.toLocaleString() || "N/A",
    flag: countryDetails[0]?.flags?.png || undefined,
    alt: `${countryDetails[0]?.name?.common} Flag`,
  };
  console.log(country);
  return (
    <main className="container mx-auto px-4">
      <section className="my-12 flex justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold mb-4">{country.name}</h2>
          <p className="text-lg text-gray-500">
            Official Name:{" "}
            <span className="text-slate-800">{country.officialName}</span>
          </p>
          <p className="text-lg text-gray-500">
            Capital: <span className="text-slate-800">{country.capital}</span>
          </p>
          <p className="text-lg text-gray-500">
            Region: <span className="text-slate-800">{country.region}</span>
          </p>
          <p className="text-lg text-gray-500">
            Subregion:{" "}
            <span className="text-slate-800">{country.subregion}</span>
          </p>
          <p className="text-lg text-gray-500">
            Population:{" "}
            <span className="text-slate-800">{country.population}</span>
          </p>
        </div>
        <div>
          <img src={country.flag} alt={country.alt} />
        </div>
      </section>
    </main>
  );
}
