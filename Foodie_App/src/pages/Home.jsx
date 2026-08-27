// import { Link } from "react-router-dom";


// export const restaurants = [
//   { id: 1, name: "Pizza Palace", rating : 4},
//   { id: 2, name: "Burger Hub", rating : 3.8}
// ]
// function Home() {
//   return (
//     <div>
// <h1>Restaurants</h1>
// {restaurants.map((res) =>{
//     return (
//         <div key={res.id}>
//             <Link to= {`/restaurant/${res.id}`}>
// {res.name}</Link>
   

//         </div>
//     )
// }
// )}

//     </div>
//   )
// }

// export default Home;

import MenuItem from "../Components/MenuItems";


const menu = [
  { id: 1, name: "Pizza", price: 250 },
  { id: 2, name: "Burger", price: 120 },
  { id: 3, name: "Fries", price: 80 }
];

function Home() {
  return (
    <div>
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Home;