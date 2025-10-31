import { Link } from "react-router-dom";
import type { Experience } from "../types/experience";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={experience.imageUrl}
        alt={experience.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800">
            {experience.title}
          </h2>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md whitespace-nowrap">
            {experience.location}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-snug">
          Curated small-group experience. Certified guide. Safety first with gear included.
        </p>
        <div className="flex justify-between items-center pt-2">
          <p className="font-semibold text-gray-800">From ₹{experience.price}</p>
          <Link
            to={`/details/${experience._id}`}
            className="bg-yellow-400 px-4 py-1 rounded-md font-medium hover:bg-yellow-500 text-gray-900"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
