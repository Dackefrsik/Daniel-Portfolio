
function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="active m-2" aria-current="page" href="#Home">Home</a>
                            <a className="m-2" href="#Worklife">Worklife</a>
                            <a className="m-2" href="#School">School</a>
                            <a className="m-2" href="#Hobie">Hobies</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;