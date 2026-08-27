import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h1>Status : {error.status}</h1>
        <h1> Page : {error.statusText}</h1>
        <h1>  {error.data}</h1>
    </div>
  )
}

export default ErrorPage;