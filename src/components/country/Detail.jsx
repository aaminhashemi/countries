import { useLocation } from "react-router-dom";
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

const Detail = () => {
  const [mode, setMode] = useState("light");
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const location = useLocation();
  const data = location.state;
  console.log(data);
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
      <div className="container-fluid px-5 d-flex flex-row flex-wrap justify-content-center mt-5">
        <img src={data.flag} width='250px' className="mx-3"/>
        <div className="d-flex flex-row flex-wrap align-items-center">
            <div className="d-flex flex-column flex-wrap ">
                <h1>{data.name}</h1>
                <p>{`Nativ Name : ${data.nativeName}`}</p>
                <p>{`Population : ${data.population}`}</p>
                <p>{`Region : ${data.region}`}</p>
                <p>{`Sub Region : ${data.subregion}`}</p>
                <p>{`Capital : ${data.capital}`}</p>
            </div>
            <div className="d-flex flex-column flex-wrap ">
                <p>{`Top Level Domain : ${data.topLevelDomain}`}</p>
                <p>{`Currencies : ${data.currencies}`}</p>
                <p>{`Languages : ${data.languages.map(item=>item.name)}`}</p>
            </div>
            <div></div>
        </div>
      </div>
    </>
  );
};
export default Detail;
