import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="shadow-lg sticky top-0">
      <section className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h2 className="text-4xl font-bold">
          REST<span className="text-violet-600">Explorer</span>
        </h2>
        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-medium ${
                    isActive &&
                    "text-violet-600 underline underline-offset-4 decoration-2"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-medium ${
                    isActive &&
                    "text-violet-600 underline underline-offset-4 decoration-2"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-medium ${
                    isActive &&
                    "text-violet-600 underline underline-offset-4 decoration-2"
                  }`
                }
                to="/countries"
              >
                Countries
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
