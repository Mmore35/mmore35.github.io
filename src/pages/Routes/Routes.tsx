import { Routes as RouterGroup, Route } from "react-router-dom";
import Work from "../Work/Work";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";

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
