import React, { useState } from "react";

const MedalList = ({ list, setList }) => {
  const [sortType, setSortType] = useState("gold");

  const deleteList = (country) => {
    const deletedList = list.filter((list) => {
      return list.country !== country;
    });

    setList(deletedList);

    localStorage.setItem("data", JSON.stringify([deletedList]));
  };

  const getSortedList = () => {
    if (sortType === "gold") {
      const sortedList = list.sort((a, b) => b.gold - a.gold);
      return sortedList;
    } else if (sortType === "total") {
      const sortedList = list.sort((a, b) => b.total - a.total);
      return sortedList;
    }
  };

  const sortedList = getSortedList();

  return (
    <div>
      <button onClick={() => setSortType("gold")}>금메달정렬</button>
      <button onClick={() => setSortType("total")}>총합정렬</button>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>총합</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {list.map((a) => {
            return (
              <tr key={a.country}>
                <td>{a.country}</td>
                <td>{a.gold}</td>
                <td>{a.silver}</td>
                <td>{a.bronze}</td>
                <td>{a.total}</td>
                <td>
                  <button onClick={() => deleteList(a.country)}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
