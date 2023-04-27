const Weather = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const ShowData = () => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.700769&longitude=85.300140&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
  };
  return (
    <div>
      <input type="Submit" value="Evaluate" onClick={ShowData} />
      {/* <p>{{}}</p> */}
    </div>
  );
};
export default Weather;

