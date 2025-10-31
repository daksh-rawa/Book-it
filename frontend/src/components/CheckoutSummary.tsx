import type { Experience } from "../types/experience";

interface CheckoutCardProps {
  experience: Experience;
  quantity: number;
  setQuantity?: (qty: number) => void;
  discount?: number;
  buttonLabel?: string;
  onAction: () => void;
}

export default function CheckoutCard({
  experience,
  quantity,
  setQuantity,
  discount = 0,
  buttonLabel = "Confirm",
  onAction,
}: CheckoutCardProps) {
  const subtotal = experience.price * quantity;
  const tax = Math.round(subtotal * 0.06);
  const total = subtotal + tax - discount;

  return (
    <div className="bg-white p-5 rounded-lg shadow-md space-y-4 w-full">
      <div className="flex justify-between text-sm">
        <p>Starts at</p>
        <p>₹{experience.price}</p>
      </div>

      <div className="flex justify-between items-center text-sm">
        <p>Quantity</p>
        <div className="flex items-center gap-2">
          {setQuantity && (
            <>
              <button
                className="px-2 border rounded disabled:opacity-50"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-2 border rounded"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </>
          )}
          {!setQuantity && <span>{quantity}</span>}
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <p>Subtotal</p>
        <p>₹{subtotal}</p>
      </div>

      <div className="flex justify-between text-sm">
        <p>Taxes</p>
        <p>₹{tax}</p>
      </div>

      {discount > 0 && (
        <div className="flex justify-between text-sm text-green-600">
          <p>Discount</p>
          <p>-₹{discount}</p>
        </div>
      )}

      <div className="border-t pt-2 flex justify-between font-semibold">
        <p>Total</p>
        <p>₹{total}</p>
      </div>

      <button
        onClick={onAction}
        className="w-full bg-yellow-400 py-2 rounded-md font-medium hover:bg-yellow-500 transition"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
