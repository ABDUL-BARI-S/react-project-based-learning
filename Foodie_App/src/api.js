// export async function getWeather(city) {
//   const cities = {
//     Hyderabad: { lat: 17.385, lon: 78.4867 },
//     Delhi: { lat: 28.6139, lon: 77.2090 },
//     Mumbai: { lat: 19.076, lon: 72.8777 }
//   };

//   const { lat, lon } = cities[city];

//   const url =
//     `https://api.open-meteo.com/v1/forecast?latitude=${lat}` +
//     `&longitude=${lon}&current=temperature_2m`;

//   return fetch(url)
//   .then ((response) => response.json())
//   .then ((data) => {
//     return data.current.temperature_2m;
//   })
//   .catch((err) => {
//     console.log(err, "API Failed");
//     return null;
//   });
  
// }


export async function getRestaurants() {
  let url  = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);

  const data = await response.json();

  return data;
}