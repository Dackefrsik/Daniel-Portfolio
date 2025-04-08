import { useEffect, useRef, useState } from "react";

function Navbar() {

    //useEffect för att hantera klassen show på diven collapse
    const collapseRef = useRef(null);

    //useState för höger border-radius
    const[isRounded, steClass] = useState(true);

    //useState för att kolla om menyn är öppen
    const[isMenueOpen, setMenueOpen] = useState(false);

    //#region Funktioner för att öppna och stännga hamburgermenyn
    const openMenu = () => {
        if(isRounded == true){
            steClass(false);
            setMenueOpen(true);
        }
        else if(isRounded == false){
            steClass(true);
            setMenueOpen(false);
        }
    }

    const closeMenue = () => {
        if(isMenueOpen == true){
            setMenueOpen(false);
            steClass(true);
        }
    }
    //#endregion

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container-fluid d-flex justify-content-end">
                    <div className="d-flex align-items-start d-flex justify-content-center">
                        <button className={`custom-toggler ${isRounded ? "border-right-radius" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={openMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isMenueOpen ? "Show" : ""} `} id="navbarNavAltMarkup" ref={collapseRef}>
                            <div className="navbar-nav">
                                <a className="active m-2" aria-current="page" href="#Home" onClick={closeMenue}>Home</a>
                                <a className="m-2" href="#Tekniks" onClick={closeMenue}>ProgrammingTekniks</a>
                                <a className="m-2" href="#Projects" onClick={closeMenue}>Projects</a>
                                <a className="m-2" href="#Hobie" onClick={closeMenue}>Hobies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;