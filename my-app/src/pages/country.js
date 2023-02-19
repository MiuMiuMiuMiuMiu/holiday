import { useLocation } from "react-router-dom";
import CountryInfo from "../components/CountryInfo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Country() {

    //Country name and country code in state
    let { state } = useLocation();
    

    return (
        <Container className="mt-5">
            <Row className="justify-content-evenly">
                <Col lg="10">
                    <CountryInfo 
                        code={state.code}
                        name={state.name}
                    />
                </Col>
            </Row>
        </Container>
        
    )
}

export default Country;