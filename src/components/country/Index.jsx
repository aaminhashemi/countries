import "bootstrap/dist/css/bootstrap.min.css";
import useDarkMode from "../useDarkMode";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Form,
  Row,
  Col,
  Input,
  CardTitle,
  CardBody,
  Card,
} from "reactstrap";
import { useEffect, useState } from "react";

const Index = () => {
  const [theme, toggleTheme] = useDarkMode();

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

  const filterCountries = (e) => {
    setFilteredCountries(
      countries.filter((item) => 
      item.region === e.target.value)

      )
  }

  const filterNameCountry = (e) => {
    setFilteredCountries(
        filteredCountries.filter((item) => 
      item.name.toLowerCase().includes(e.target.value.toLowerCase())

    ))
  };
  return (
    <>
      <Navbar
        className={
          theme === "light"
            ? "shadow-sm p-3 light-mode"
            : "shadow-sm p-3 input-and-nav-dark"
        }
      >
        <NavbarBrand className={theme === "light" ? "light-text" : "dark-text"}>
          Where in the world
        </NavbarBrand>
        <NavbarText
          className={
            theme === "light"
            ? "fa fa-moon-o light-text"
            : "fa-moon-o dark-text fa "
          }
        >
          <span
            onClick={toggleTheme}
            className={theme === "light" ? "light-text" : "dark-text"}
          >
            {theme === "light" ? " Dark " : " Light "} Mode
          </span>
        </NavbarText>
      </Navbar>
      <div
        className={
          theme === "light"
            ? "container-fluid px-5 light-mode"
            : "container-fluid px-5 dark-mode"
        }
      >
        <Form className="pt-3">
          <Row className="d-flex flex-wrap justify-content-between">
            <Col className="col-lg-4 col-xs-12 col-sm-12 col-md-3 pb-3">
              <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
                <input
                  placeholder="search for a country..."
                  type="search"
                  onChange={filterNameCountry}
                  className={
                    theme === "light"
                      ? "input text-dark input-and-nav-light"
                      : "input text-light input-and-nav-dark"
                  }
                />
              </div>
            </Col>
            <Col className="col-lg-2 col-xs-6 col-md-2 col-sm-6  pb-3">
              <Input
                id="exampleSelect"
                name="select"
                className={
                  theme === "light"
                    ? "rounded select text-dark input-and-nav-light"
                    : "rounded select text-light input-and-nav-dark"
                }
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
      <div
        className={
          theme === "light"
            ? "container-fluid px-5 d-flex flex-row flex-wrap justify-content-center light-mode"
            : "container-fluid px-5 d-flex flex-row flex-wrap justify-content-center dark-mode"
        }
      >
        {filteredCountries?.map((country, index) => (
          <Card
            key={index}
            style={{
              width: "15rem",
            }}
            className="my-3 mx-3 shadow-sm"
          >
            <Link to={"/test"} state={country}>
              <img
                alt="Sample "
                className="card-img-top"
                src={country.flags.svg}
                height="140px"
                style={{ objectFit: "cover" }}
              />
            </Link>
            <CardBody
              className={theme === "light" ? "light-mode" : "dark-mode"}
            >
              <CardTitle tag="h5">{country.name}</CardTitle>

              <span className="d-block">
                <b>Population: </b>
                {` ${country.population.toLocaleString("en-US")}`}
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
