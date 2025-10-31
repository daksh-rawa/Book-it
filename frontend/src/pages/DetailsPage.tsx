import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SlotCard from "../components/slotCard";
import CheckoutCard from "../components/CheckoutSummary";
import type { Experience } from "../types/experience";
import type { Slot } from "../types/slot";

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [experience, setExperience] = useState<Experience | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    // dummy data until backend is connected
    setExperience({
      _id: "1",
      title: "Kayaking",
      description:
        "Curated small-group experience. Certified guide. Helmet and Life jackets along with an expert will accompany in kayaking.",
      imageUrl:
        "https://images.unsplash.com/photo-1526481280695-3c720685208b?auto=format&fit=crop&w=1000&q=80",
      price: 999,
      location: "Udupi",
    });

    setSlots([
      { _id: "1", date: "2025-10-22", availableSeats: 4 },
      { _id: "2", date: "2025-10-23", availableSeats: 2 },
      { _id: "3", date: "2025-10-24", availableSeats: 5 },
      { _id: "4", date: "2025-10-25", availableSeats: 0 },
    ]);
  }, [id]);

  if (!experience) return <div className="p-10">Loading...</div>;

  const handleConfirm = () => {
    if (!selectedSlot) {
      alert("Please select a slot before continuing");
      return;
    }
    navigate("/checkout", {
      state: {
        experience,
        slot: selectedSlot,
        quantity,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 mb-4 hover:text-black"
        >
          ← Back
        </button>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left section */}
          <div className="md:col-span-2 space-y-6">
            <img
              src={experience.imageUrl}
              alt={experience.title}
              className="w-full h-72 object-cover rounded-lg"
            />

            <div>
              <h2 className="text-2xl font-semibold">{experience.title}</h2>
              <p className="text-gray-600 mt-2">{experience.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Choose date</h3>
              <div className="flex gap-3 flex-wrap">
                {slots.map((slot) => (
                  <SlotCard
                    key={slot._id}
                    slot={slot}
                    selected={selectedSlot?._id === slot._id}
                    onSelect={() => setSelectedSlot(slot)}
                  />
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm bg-gray-100 rounded p-2 text-gray-600">
                Scenic routes, trained guides, and safety briefing.
                Minimum age 10.
              </p>
            </div>
          </div>

          {/* Right section (Checkout card) */}
          <div className="md:col-span-1">
            <CheckoutCard
              experience={experience}
              quantity={quantity}
              setQuantity={setQuantity}
              onAction={handleConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
