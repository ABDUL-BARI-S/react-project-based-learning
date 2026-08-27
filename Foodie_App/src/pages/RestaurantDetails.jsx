import { useParams } from "react-router-dom"
import { restaurants } from "./Home";

function RestaurantDetails() {
    const {resId} = useParams();
    const restaurant = restaurants.find(
      (res) => res.id.toString() === resId
    );

    if(!restaurant){
      return<h1>Restaurant Not Found 😕</h1>
    }
  return (
    <div>
        <h1>Restaurant ID : {resId}</h1>
        <h1>{restaurant.name}</h1>
     
    </div>
  )
}

export default RestaurantDetails;