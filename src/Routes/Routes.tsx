import { Routes as RouterGroup, Route } from "react-router-dom";
import Work from "../pages/Work/Work";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";

export default function Routes() {
  return (
    <RouterGroup>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
    </RouterGroup>
  );
}
