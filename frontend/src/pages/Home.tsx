import { useEffect, useState } from "react";
import api from "../utils/api";
import { Link } from "react-router-dom";
import type { Experience } from "../types/experience";
import ExperienceCard from "../components/experienceCard";


export default function Home() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/experiences")
      .then((res) => setExperiences(res.data.experiences))
      .catch((err) => console.error(err));
  }, []);

  const filtered = experiences.filter((exp) =>
    exp.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="h-10 w-auto" />
          <h1 className="font-semibold text-xl text-gray-800">highway delite</h1>
        </div>

        <div className="flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search experiences"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 w-72 outline-none"
          />
          <button className="bg-yellow-400 px-4 py-2 font-semibold text-gray-800 hover:bg-yellow-500">
            Search
          </button>
        </div>
      </div>
    <div className="p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {filtered.map((exp) => (
    <ExperienceCard key={exp._id} experience={exp} />
  ))}
</div>
      <div className="p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((exp) => (
          <div
            key={exp._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={exp.imageUrl}
              alt={exp.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{exp.title}</h2>
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                  {exp.location}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Curated small-group experience. Certified guide. Safety first with gear included.
              </p>
              <div className="flex justify-between items-center pt-2">
                <p className="font-semibold text-gray-800">From ₹{exp.price}</p>
                <Link
                  to={`/details/${exp._id}`}
                  className="bg-yellow-400 px-4 py-1 rounded font-medium hover:bg-yellow-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
