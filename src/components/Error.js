import { useRouteError } from "react-router"
const Error = ()=>{
    const error = useRouteError();
    return(
        <>
          <div>
            <h2>OOPS!!</h2>
            <h3>Something went wrong !</h3>
            <h4>{error.status} : {error.statusText}</h4>
          </div>
        </>
    )
}

export default Error;