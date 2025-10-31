import type { Slot } from "../types/slot";

interface SlotCardProps {
  slot: Slot;
  selected: boolean;
  onSelect: () => void;
}

export default function SlotCard({ slot, selected, onSelect }: SlotCardProps) {
  const isSoldOut = slot.availableSeats === 0;

  return (
    <button
      disabled={isSoldOut}
      onClick={onSelect}
      className={`px-4 py-2 rounded-md border text-sm transition ${
        selected
          ? "bg-yellow-400 text-black border-yellow-500"
          : isSoldOut
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "hover:bg-yellow-100 border-gray-300"
      }`}
    >
      {new Date(slot.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}
      {isSoldOut ? (
        <span className="ml-2 text-xs text-red-500">Sold out</span>
      ) : (
        <span className="ml-2 text-xs text-gray-500">
          {slot.availableSeats} left
        </span>
      )}
    </button>
  );
}
