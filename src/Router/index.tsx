import { Routes, Route, BrowserRouter } from "react-router-dom";
import Booking from "../Pages/Booking";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}
