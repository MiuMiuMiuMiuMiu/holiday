import { useLocation } from "react-router-dom";

function Country() {

    //Country name and country code in state
    let { state } = useLocation();

    return(
        <h1>{state.name}</h1>
    )
}

export default Country;