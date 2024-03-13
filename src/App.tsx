import "./App.css";
import { IconRow } from "./Components/IconRow/IconRow";
import { IconList } from "./util/IconList";

export default function App() {
  return (
    <>
      <div className=" text-3xl font-bold underline">
        Hello my name is Mike!
      </div>
      <IconRow srcList={IconList} />
    </>
  );
}
