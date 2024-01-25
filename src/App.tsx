import "./App.css";
import Icon from "./Components/Icon/Icon";
import TailwindIcon from "./assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";

function App() {
  return (
    <>
      <div className=" text-3xl font-bold underline">
        Hello my name is Mike!
      </div>
      <Icon src={TailwindIcon} size="large" />
    </>
  );
}

export default App;
