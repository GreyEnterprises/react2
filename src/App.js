import React, { useEffect, useState } from "react";
import "./styles.css";
import LineChart from "./LineChart";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("/data.json");
    setData(await response.json());
  };

  return (
    <div className="App">
      <LineChart data={data} />
    </div>
  );
}
