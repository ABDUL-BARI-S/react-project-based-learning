import { useState, useEffect} from "react";
import { getRestaurants } from "../api";


function RestaurantList() {
    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);

   

    useEffect(()=> {
async function loadData() {

     setLoading(true);
    const result = await getRestaurants();
    setRestaurants(result);
    setLoading(false);    
}
loadData();
    },[]);

 if (loading){
        return (
        <h2>Loading...</h2>
    )
    } 
  return (
   

        <div>{restaurants.map((r) => {

         return( <div  key={r.id}>
         <h3> Name : {r.name}</h3>
        <h3> useName : {r.username}</h3>
        <h5> Address : {r.address.street}</h5>
        <h4> Phone No : {r.phone}</h4>
        <h3> Address-lat : {r?.address?.geo?.lng}</h3>
        </div>
        )
       

        })}</div>
   
  );
}

export default RestaurantList;