import useDarkMode from "../useDarkMode";
import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

const Detail = () => {
  const [theme, toggleTheme] = useDarkMode();

  const location = useLocation();
  const data = location.state;
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
          >
            {theme === "light" ? " Dark " : " Light "} Mode
          </span>
        </NavbarText>
      </Navbar>
      <div className="d-flex flex-column h-100">
        <div
          className={
            theme === "light"
              ? "d-flex pt-5 pb-5 justify-content-start light-mode"
              : "d-flex pt-5 pb-5 justify-content-start dark-mode"
          }
        >
          <div
            className={
              theme === "light"
                ? "col-lg-1 text-center py-2 rounded mx-5 input-and-nav-light"
                : "col-lg-1 text-center py-2 rounded mx-5 input-and-nav-dark"
            }
          >
            <Link
              to={"/"}
              className={
                theme === "light"
                  ? "button button-dark light-text text-decoration-none"
                  : "button button-dark dark-text text-decoration-none"
              }
            >
              <span className="fa fa-arrow-left"></span> Back
            </Link>
          </div>
        </div>
        <div id="parent-element" className="h-100 d-inline">
          <div
            className={
              theme === "light"
                ? "d-flex flex-row flex-wrap h-100 container-fluid px-5  justify-content-evenly pt-5 pb-5 light-mode align-items-center"
                : "d-flex flex-row flex-wrap  h-100 container-fluid px-5  justify-content-evenly pt-5 pb-5 dark-mode align-items-center"
            }
          >
            <img src={data.flag} width="400px" height='300px' className="mx-3" />
            <div className="d-flex flex-row  flex-wrap align-items-center">
              <div className="d-flex flex-column flex-wrap ">
                <h1>{data.name}</h1>
                <p>
                  <b>Nativ Name :</b>
                  {` ${data.nativeName}`}
                </p>
                <p>
                  <b>Population :</b>
                  {` ${data.population.toLocaleString("en-US")}`}
                </p>
                <p>
                  <b>Region : </b>
                  {`${data.region}`}
                </p>
                <p>
                  <b>Sub Region :</b>
                  {` ${data.subregion}`}
                </p>
                <p>
                  <b>Capital :</b>
                  {` ${data.capital}`}
                </p>
              </div>
              <div className="d-flex flex-column flex-wrap ">
                <p>
                  <b>Top Level Domain :</b>
                  {` ${data.topLevelDomain}`}
                </p>
                <p>
                  <b>Currencies :</b>
                  {` ${data.currencies?.map((item) => item.name)}`}
                </p>
                <p>
                  <b>Languages :</b>
                  {` ${data.languages?.map((item) => item.name)}`}
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
