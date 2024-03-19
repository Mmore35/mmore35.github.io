import { Header } from "./Components/Header/Header";
import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}
