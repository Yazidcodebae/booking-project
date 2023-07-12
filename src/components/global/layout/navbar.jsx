import NavDropdown from "react-bootstrap/NavDropdown";
import Images from "../../../assets/index";
const Navigation = () => {
    const logoStyle = {
        height: "64px",
        width: "128px",
        objectFit: "contain",
    };
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary px-5'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src={Images.Logo} alt='logo' style={logoStyle} />
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='#'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Link
                                </a>
                            </li>
                            <NavDropdown
                                title='Dropdown'
                                id='basic-nav-dropdown'
                            >
                                <NavDropdown.Item href='#action/3.1'>
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.2'>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href='#action/3.3'>
                                    Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href='#action/3.4'>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <li className='nav-item'>
                                <a className='nav-link disabled'>Disabled</a>
                            </li>
                        </ul>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className=' text-uppercase btn btn-primary py-2 px-4'>
                                    masuk
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className=' text-uppercase btn btn-warning py-2 px-4 ms-lg-3'>
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
