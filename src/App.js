import { useState } from "react";
import ForecastSlot from "./Components/ForecastSlot"
import "./styles/css/index.css"


function App() {
  const [countryName, setCountryName] = useState()
  const [name, setName] = useState("Usa")

  const onChanges = (e) =>{
    setCountryName(e.target.value)
  }

  const onClicks = ()=>{
    setName(countryName)
  }

  console.log(countryName);
  return (
    <section className="mainSection">
      <section className="slotstyle inputSection">
        <input type="text" onChange={onChanges} autoComplete="on"/>
        <button onClick={onClicks}>Press</button>
      </section>
      <ForecastSlot name={name}/>
    </section>
  );
}



export default App;