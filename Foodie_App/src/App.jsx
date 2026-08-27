// import WeatherWidget from "./Components/WeatherWidget"
// import CartsSummary from "./Components/CartsSummary"
// import RestaurantCard from "./Components/RestaurantCard"
// import RestaurantList from "./Components/RestaurantList";
// import { createBrowserRouter, RouterProvider} from "react-router-dom";
// import AppLayout from "./AppLayout";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import ErrorPage from "./pages/ErrorPage";
// import RestaurantDetails from "./pages/RestaurantDetails";



// const AppRouter = createBrowserRouter([
//   {path: "/",
//     element: <AppLayout/>,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         index: true,
//         element: <Home/>
//       },
//       {
//         path: "cart",
//         element: <Cart/>
//       },
//       {
//         path: "restaurant/:resId",
//         element: <RestaurantDetails />
//       },
      
//     ]
//   }
// ])


// export default function App (){
//   return <RouterProvider router={AppRouter}/>
// }
import { CartProvider } from "./context/cartContext";
import Header from "./Components/Header";
import Home from "./pages/Home";


export default function App() {
  return (
    <CartProvider>
      <Header />
      <Home />
    </CartProvider>
  );
}