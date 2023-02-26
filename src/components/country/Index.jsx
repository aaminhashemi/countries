import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Form,
  Row,
  Button,
  Col,
  Input,
  InputGroupText,
  InputGroup,
  CardTitle,
  CardBody,
  Card,
  CardText,
} from "reactstrap";
import { useEffect, useState } from "react";

const Index = () => {
  const [mode, setMode] = useState("light");

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setCountries(myJson);
        setFilteredCountries(myJson);
      });
  }, []);
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const filterCountries = (e) => {
    setFilteredCountries(
      countries.filter((item) => item.region === e.target.value)
    );
  };
  return (
    <>
      <Navbar className="mb-2" color={mode}>
        <NavbarBrand className={mode === "light" ? "text-dark" : "text-light"}>
          Where in the world
        </NavbarBrand>
        <NavbarText
          className="fa fa-moon-o"
          color={mode === "light" ? "dark" : "light"}
        >
          <span
            onClick={handleModeChange}
            className={mode === "light" ? "text-dark" : "text-light"}
          >
            {mode === "light" ? "Dark" : "Light"} Mode
          </span>
        </NavbarText>
      </Navbar>
      <div className="container-fluid px-5">
        <Form className="">
          <Row className="d-flex flex-wrap justify-content-between">
            <Col className="col-lg-3 col-xs-12 col-sm-12 col-md-3 pb-3">
              <InputGroup>
                <InputGroupText className="bg-light" color="danger">
                  <i className="fa fa-search"></i>
                </InputGroupText>
                <Input
                  name="country"
                  placeholder="search for a country"
                  type="text"
                />
              </InputGroup>
            </Col>
            <Col className="col-lg-3 col-xs-6 col-md-3 col-sm-6  pb-3">
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                onChange={filterCountries}
              >
                <option hidden={true} value="">
                  filter by region
                </option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </Input>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="container-fluid d-flex flex-row flex-wrap justify-content-between">
        {filteredCountries?.map((country, index) => (
          <Card
            key={index}
            style={{
              width: "18rem",
            }}
            className="my-3 shadow-sm"
          >
            <img alt="Sample" src={country.flags.svg} />
            <CardBody>
              <CardTitle tag="h5">{country.name}</CardTitle>
              <Link to={"/test"} state={country}>
                test
              </Link>
              <span className="d-block">
                <b>Population: </b>
                {` ${country.population}`}
              </span>
              <span className="d-block">
                <b>Region: </b>
                {`${country.region}`}
              </span>
              <span className="d-block">
                <b>Capital: </b>
                {`${country.capital}`}
              </span>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Index;
