import { useState } from "react";
import ForecastSlot from "./Components/ForecastSlot"
import "./styles/css/index.css"
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


function App() {
  const [countryName, setCountryName] = useState()
  const [name, setName] = useState("Japan")

  const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress &&
   <div class=" slotstyle loaderAnimation">
      <Loader type="ThreeDots" color="black" height="100" width="100"/>
    </div>
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