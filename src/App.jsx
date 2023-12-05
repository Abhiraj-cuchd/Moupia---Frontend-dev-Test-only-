import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Trips from "./Pages/Trips/Trips";
import Contact from "./Pages/Contact/Contact";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/secure/admin-login" element={<Login />} />
        <Route path="/secure/admin-register" element={<Register />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/trip-details/:id" element={<Details />} />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
