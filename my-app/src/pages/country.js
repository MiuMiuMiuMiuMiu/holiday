import { useLocation } from "react-router-dom";
import CountryInfo from "../components/CountryInfo";

function Country() {

    //Country name and country code in state
    let { state } = useLocation();
    

    return (
        <CountryInfo 
            code={state.code}
            name={state.name}
        />
    )
}

export default Country;