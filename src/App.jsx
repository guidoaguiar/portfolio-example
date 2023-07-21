import { getCharacters } from 'rickmortyapi'

import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/card";

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    async function loadData() {

      const body = await getCharacters();
      


      setData(body.data.results);
      console.log(body);
    }
    
    loadData();
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