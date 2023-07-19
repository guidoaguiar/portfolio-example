import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/card";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      const apiUrl = "https://ocean-api-itens.onrender.com/itens";

      const response = await fetch(apiUrl);
      const body = await response.json();

      setData(body);
    }

    carregarDados();
  }, []);

  return (
    <>
      <div className="cards-list">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;