import React, { useState } from "react";

const MedalForm = ({ list, setList }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const addList = (e) => {
    e.preventDefault();

    const checkCounty = list.find((list) => list.country === country);

    if (checkCounty) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    const newList = {
      country: country,
      gold: parseInt(gold),
      silver: parseInt(silver),
      bronze: parseInt(bronze),
      total: parseInt(gold) + parseInt(silver) + parseInt(bronze),
    };

    setList([...list, newList]);

    resetForm();

    localStorage.setItem("data", JSON.stringify([...list, newList]));
  };
  // ---------------------------------------
  const updateList = () => {
    if (!country.trim()) {
      alert("국가명을 입력하세요.");
      return;
    }
    const checkCounty = list.find((list) => list.country === country);

    if (!checkCounty) {
      alert("등록되지 않은 국가입니다.");
      return;
    }

    const updatedList = list.map((list) => {
      return list.country === country
        ? {
            country: list.country,
            gold: parseInt(gold),
            silver: parseInt(silver),
            bronze: parseInt(bronze),
            total: parseInt(gold) + parseInt(silver) + parseInt(bronze),
          }
        : list;
    });

    setList(updatedList);

    resetForm();

    localStorage.setItem("data", JSON.stringify([updatedList]));
  };
  // ---------------------------------------
  const resetForm = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };
  // ---------------------------------------
  return (
    <>
      <form onSubmit={addList}>
        <input
          value={country}
          type="text"
          placeholder="국가명"
          required
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          value={gold}
          type="number"
          placeholder="금메달"
          required
          onChange={(e) => setGold(e.target.value)}
        />
        <input
          value={silver}
          type="number"
          placeholder="은메달"
          required
          onChange={(e) => setSilver(e.target.value)}
        />
        <input
          value={bronze}
          type="number"
          placeholder="동메달"
          required
          onChange={(e) => setBronze(e.target.value)}
        />

        <button type="submit">등록</button>
        <button type="button" onClick={() => updateList()}>
          수정
        </button>
      </form>
    </>
  );
};

export default MedalForm;
