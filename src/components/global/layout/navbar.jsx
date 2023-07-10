export default function NavBar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light fixed-top'>
                <div className='container d-flex justify-content-between'>
                    <a className='navbar-brand' href='#'>
                        MeeDorz
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
                        </ul>
                        <form className='d-flex' role='login'>
                            <button className='btn btn-success' type='button'>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
