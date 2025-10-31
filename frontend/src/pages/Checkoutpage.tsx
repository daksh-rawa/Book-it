import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckoutSummary from "../components/CheckoutSummary";
import type { Experience } from "../types/experience";

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { experience, slot, quantity } = location.state || {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [discount, setDiscount] = useState(0);

  if (!experience || !slot) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Invalid booking data. Please go back.
      </div>
    );
  }

  const handlePromoApply = () => {
    if (!promo.trim()) {
      alert("Please enter a promo code before applying.");
      return;
    }

    if (promo.toLowerCase() === "save10") {
      setDiscount(Math.round(experience.price * 0.1));
      alert("Promo applied: 10% off");
    } else if (promo.toLowerCase() === "flat100") {
      setDiscount(100);
      alert("Promo applied: ₹100 off");
    } else {
      alert("Invalid promo code");
      setDiscount(0);
    }
  };

  const handleConfirm = () => {
    if (!name || !email || !agreed) {
      alert("Please fill in your name, email, and agree to the terms.");
      return;
    }

    // Mock booking creation
    const bookingId = Math.random().toString(36).substring(2, 10).toUpperCase();

    navigate(`/finish/${bookingId}`, {
      state: { experience, slot, quantity },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-500 mb-4 hover:text-black"
        >
          ← Checkout
        </button>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Section: Form */}
          <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                />
              </div>
            </div>

            {/* Promo Code (Optional) */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Promo code (optional)"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                className="flex-1 p-2 border rounded-md text-sm"
              />
              <button
                onClick={handlePromoApply}
                className="px-4 py-2 bg-black text-white text-sm rounded-md"
              >
                Apply
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>I agree to the terms and safety policy</span>
            </div>
          </div>

          {/* Right Section: Checkout Summary */}
          <div className="md:col-span-1">
            <CheckoutSummary
              experience={experience as Experience}
              quantity={quantity}
              discount={discount}
              buttonLabel="Pay and Confirm"
              onAction={handleConfirm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
