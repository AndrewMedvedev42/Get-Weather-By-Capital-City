import { useState } from "react";
import ForecastSlot from "./Components/ForecastSlot"
import "./styles/css/index.css"
import { usePromiseTracker } from "react-promise-tracker";


function App() {
  const [countryName, setCountryName] = useState()
  const [name, setName] = useState("Usa")

  const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress &&
      <h1 className="loadingMessage slotstyle">Hey some async call in progress ! </h1>
  );  
  }

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
      <LoadingIndicator/>
      <ForecastSlot name={name}/>
    </section>
  );
}



export default App;