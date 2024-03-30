import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookingsPage from "./components/BookingsPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import ConfirmedBooking from "./components/confirmedBooking";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </ScrollToTop>
      <ScrollToTopBtn />
      <Footer />
    </>
  );
}

export default App;
