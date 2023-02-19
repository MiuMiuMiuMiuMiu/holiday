import { useLocation } from "react-router-dom";
import CountryInfo from "../components/CountryInfo";
import Container from 'react-bootstrap/Container';

function Country() {

    //Country name and country code in state
    let { state } = useLocation();

    return (
        <Container className="my-5">
            <CountryInfo 
                code={state.code}
                name={state.name}
            />
        </Container>
        
    )
}

export default Country;