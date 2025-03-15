
import { useEffect, useRef, useState } from "react";
import profilbild from "../assets/Profilbild.jpg";

function Home() {

    const [currentDate, setCurrentDate] = useState("");
    const imgRef = useRef(null);
    const [isRotating, setRotation] = useState(false);

    //#region Funkltion som räknar ut ålder
    function calculateAge() {
        let birthYear = 2000;
        let birthMonth = 8;
        let birthDate = 24;
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();
        let currentDate = new Date().getDay();

        let age;

        if (currentMonth >= birthMonth && birthDate >= currentDate) {
            age = currentYear - birthYear;
        }
        else {
            age = currentYear - birthYear - 1;
        }

        setCurrentDate(age);
    }

    useEffect(() => {
        calculateAge();
    })
    //#endregion

    //#region funktion som kollar om profilbilden är i fokus
    //setter toratonen på den
    function checkVisibility(){

        //Hämtar bildens position i sitt nuvarande tillstånd
        const img = imgRef.current.getBoundingClientRect();

        //Kollar om bilden är i synfältet och sätter kontrollvariabeln till true för att rotera den rätt
        if(img.top >= 0 && img.bottom <= window.innerHeight){
            setRotation(true);
        }
    }
    //#endregion

    //#region useEffect som körs när komponenten laddats in
    useEffect(() => {
        window.addEventListener("scroll", checkVisibility());
        
    })
    //#endregion

    return (
        <>
            <div className="container-fluid" id="Home">
                <div className="row ">
                    <div className="col-4 d-flex justify-content-center align-items-center bgProfilePicture">
                        <img src={profilbild} alt="Profilbild" className={`${isRotating ? "rotate" : ""}  w-75 h-75 profilePicture`} ref={imgRef}/>
                    </div>
                    <div className="col-8 pt-5">
                        <div className="row mt-5">
                            <div className="col-1 fontHome">Namn</div>
                            <div className="col-2 fontHome">Daniel Frisk</div>
                        </div>
                        <div className="row">
                            <div className="col-1 fontHome">Ålder</div>
                            <div className="col-2 fontHome">{currentDate}</div>
                        </div>
                        <div className="row">
                            <div className="col-1 fontHome">Stad</div>
                            <div className="col-2 fontHome">Karlstad</div>
                        </div>
                        <div className="row">
                            <div className="col fontHome">Webbutvecklarstudent på Handelshögskolan vid Karlstads universitet</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;