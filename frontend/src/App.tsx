import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/Checkoutpage";
import FinishBooking from "./pages/FinishBooking";

import { Navigate } from "react-router-dom";



export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/finish/:bookingId" element={<FinishBooking />} />
      </Routes>
    </div>
  );
}
