
function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container-fluid d-flex justify-content-end">
                    <div className="d-flex align-items-start d-flex justify-content-center">
                        <button className="custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="active m-2" aria-current="page" href="#Home">Home</a>
                                <a className="m-2" href="#Tekniks">ProgrammingTekniks</a>
                                <a className="m-2" href="#Projects">Projects</a>
                                <a className="m-2" href="#Worklife">Worklife</a>
                                <a className="m-2" href="#School">School</a>
                                <a className="m-2" href="#Hobie">Hobies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;