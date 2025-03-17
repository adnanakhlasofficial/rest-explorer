import { FaArrowRightLong } from "react-icons/fa6";
import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | RESTExplorer" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-[calc(100vh_-_3.5rem)] flex justify-between items-center container mx-auto px-4">
      <section className="flex justify-between items-center">
        <div className="max-w-3xl space-y-8 w-1/2">
          <h2 className="text-5xl font-bold">
            Explore Countries with <br />
            <span className="text-violet-500">Real-Time Data</span>
          </h2>
          <p className="text-2xl max-w-xl ml-6 text-gray-500">
            Discover details about every country around the world — from
            capitals to regions!
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => navigate("/countries")}
              className="bg-violet-500 px-6 py-3 text-white font-medium rounded-md flex gap-2 items-center cursor-pointer"
            >
              Explorer Now <FaArrowRightLong />
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-gray-200 px-6 py-3 text-slate-600 font-medium rounded-md flex gap-2 items-center cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-5/6 ml-auto rounded-lg"
            src="/images/banner.jpg"
            alt="gray concrete bridge"
            title="Gray Concrete Bridge"
          />
        </div>
      </section>
    </main>
  );
}
