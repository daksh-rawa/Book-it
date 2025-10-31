import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FinishBooking() {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 15000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Booking Confirmed
        </h2>
        <p className="text-gray-600 mb-3">
          Your booking was successful. Your reference number is:
        </p>
        <p className="font-mono text-lg bg-gray-100 py-2 rounded mb-6">
          {bookingId || "REF123456"}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Redirecting to home page in 15 seconds...
        </p>
        <button
          onClick={() => navigate("/")}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-2 rounded transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
