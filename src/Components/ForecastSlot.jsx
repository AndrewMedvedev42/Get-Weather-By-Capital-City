import { useState, useEffect } from "react";
import FadeIn from 'react-fade-in';
import { trackPromise } from 'react-promise-tracker';

function ForecastSlot({name}) {
  const [reqData, setReqData] = useState([])
  const [capitalCityName, setcapitalCityName] = useState()
  const [country, setCountry] = useState([])
  

    const reqLink = `https://restcountries.eu/rest/v2/name/${name}`
    useEffect(()=>{
      trackPromise(
            fetch(reqLink)
            .then((res)=>{return res.json()
            })
              .then((data)=>{ 
                  console.log(data);
                  const capitalCity = data[0].capital

                    setCountry(data[0])
                    setcapitalCityName(capitalCity)

                  return fetch(`https://goweather.herokuapp.com/weather/${capitalCity}`)
            }).then((res)=>{return res.json()})
            .then((data)=>{ 
                console.log(data);
                setReqData(data)
            }).catch((err)=>alert(err)))
    },[reqLink])

    function calcDay(day){
        if(day == 1){
            return "Tommorow"
        }else if(day == 2){
            return "After tommorow"
        }else{
            return "After the day after tomorrow"
        }
    }

    let itemsToRender;
    if (reqData.forecast) {
      itemsToRender = reqData.forecast.map(item => {
        const {day, temperature, wind} = item
        return(<div className="forecastSlot" key={day}>
                    <h1>{calcDay(day)}</h1>
                    <h2>Temp: {temperature}</h2>
                    <h2>Wind: {wind}</h2>
                </div>) 
      });
    }else{
      console.log("No forecast");
    }
  return (
      <FadeIn>
        <section className="weatherDetails">
        <article className=" slotstyle currentWeather">
            <h1>{`${country.name}: ${capitalCityName}`}</h1>
            <h2>{reqData.description}</h2>
            <h2>Temp: {reqData.temperature}</h2>
            <h2>Wind: {reqData.wind}</h2>
        </article>
       
        <section className="slotstyle">
            <h1>Daily Forecast</h1>
            <div className="forecastSection">
                {itemsToRender}
            </div>
        </section>     
    </section>
      </FadeIn>

  );
}


export default ForecastSlot;