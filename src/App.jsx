import { useState } from "react";
import "./App.css";
import MedalForm from "./components/medalForm";
import MedalList from "./components/MedalList";

function App() {
  localStorage.getItem("data") === null &&
    localStorage.setItem("data", JSON.stringify([]));

  const [list, setList] = useState(JSON.parse(localStorage.data));

  return (
    <>
      <h1>2024 파리 올림픽 메달 트래커</h1>

      <MedalForm list={list} setList={setList} />
      <MedalList list={list} setList={setList} />
    </>
  );
}

export default App;
