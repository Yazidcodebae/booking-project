import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Images from "../../../../assets";
import { BiLogoWhatsapp } from "react-icons/bi";
const Navigation = () => {
  const logoStyle = {
    height: "72px",
    width: "128px",
    objectFit: "contain",
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Images.Logo} alt="logo" style={logoStyle} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavDropdown title="Meeting & Event" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Ruang Meeting
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Ruang Acara
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Workspace" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Ruang Kantor
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Coworking Space
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Co-Living
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Virtual Office" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Virtual Office
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Virtual Office & Pendirian PT
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Pendirian PT
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Paket Meeting</Nav.Link>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className=" text-uppercase  text-decoration-none text-black d-lg-flex align-items-center mt-lg-2"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                >
                  <BiLogoWhatsapp size={16} className="" />
                  +628 12 65656507
                </a>
              </li>
              <li className="nav-item">
                <a className=" text-uppercase btn btn-primary py-2 px-4  ms-lg-3">
                  masuk
                </a>
              </li>
              <li className="nav-item">
                <a className=" text-uppercase btn btn-outline-dark py-2 px-4 ms-lg-3">
                  daftar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
