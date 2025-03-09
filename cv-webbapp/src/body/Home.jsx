
import { useEffect, useState } from "react";
import profilbild from "../assets/Profilbild.jpg";

function Home() {

    const [currentDate, setCurrentDate] = useState("");

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

    return (
        <>
            <div className="container-fluid" id="Home">
                <div className="row ">
                    <div className="col-4 d-flex justify-content-center align-items-center bgProfilePicture">
                        <img src={profilbild} alt="Profilbild" className="w-75 h-75" />
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