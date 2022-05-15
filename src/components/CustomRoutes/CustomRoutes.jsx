import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ServicesPage from "../../pages/ServicesPage/ServicesPage";
const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/services/*" element={<ServicesPage />} />
    </Routes>
  );
};

export default CustomRoutes;
