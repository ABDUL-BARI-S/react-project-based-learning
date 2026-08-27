import React from 'react'

function RestaurantCard({resData}) {

    
  return (
    <div>


    <div>RestaurantCard</div>
<h1>{resData.name}</h1>
<h1>{resData.rating ?? "N/A"}</h1>




    </div>
  )
}

export default RestaurantCard