import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Form,
  Row,
  Button,
  Col,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { useState } from "react";
const Index = () => {
    const [mode, setMode] = useState("light");

  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <>
      <Navbar className="mb-2" color={mode}>
        <NavbarBrand className={mode === "light" ? "text-dark" : "text-light"}>Where in the world</NavbarBrand>
        <NavbarText className="fa fa-moon-o" color={mode === "light" ? "dark" : "light"}>
          <span onClick={handleModeChange} className={ mode === "light" ? "text-dark" : "text-light"}>{mode === "light" ? "Dark" : "Light"} Mode</span>
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
              <Input id="exampleSelect" name="select" type="select">
                <option hidden={true} value="">
                  filter by region
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default Index;
