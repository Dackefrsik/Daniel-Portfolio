import { useEffect } from "react";

function Hobie({ observer }) {

    useEffect(() => {

        let imgContent = document.querySelectorAll(".textMoveRight");

        imgContent.forEach(img => {
            observer.observe(img);
        })


    })


    return (
        <div id="Hobie" className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-4 bgProfilePicture d-flex justify-content-center">
                    <p className="textColor">Hobies</p>
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-7 d-flex justify-content-center d-md-block">
                    <p className="mt-2 textMoveRight">Resa</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 pb-2">
                    <img src="/assets/Lennonwall_Praha.JPG" alt="Lennonwall_Praha" className="w-100 h-100 w-md-75 h-md-75 textMoveRight" />
                </div>
                <div className="col-12 col-md-2 d-flex align-items-center">
                    <p className="textMoveRight">Lennonwall Praha 2021</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="order-1 order-md-0 col-md-2 d-flex align-items-center">
                    <p className="textMoveRight">Old town Riga 2023</p>
                </div>
                <div className="col-md-3 order-md-1 pb-2">
                    <img src="/assets/Old_Town_Riga.JPG" alt="Old_Town_Riga" className="w-100 h-100 w-md-75 h-md-75 textMoveRight" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 pb-2">
                    <img src="/assets/Nyhven_Kopenhagen.JPG" alt="Nyhavn" className="w-100 h-100 w-md-75 h-md-75 textMoveRight" />
                </div>
                <div className="col-md-2 d-flex align-items-center">
                    <p className="textMoveRight">Nyhavn Kopenhagen 2023</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="order-1 order-md-0 col-md-2 d-flex align-items-center">
                    <p className="textMoveRight">Douglas, Isle of Man 2025</p>
                </div>
                <div className="col-12 col-md-3 pb-2">
                    <img src="/assets/The_Bee_Gees.jpg" alt="The_Bee_Gees" className="w-100 h-100 w-md-75 h-md-75 textMoveRight" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 bgProfilePicture d-flex justify-content-center">
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-3 pb-2">
                    <img src="/assets/Tempelbar_Dublin.jpg" alt="Tempelbar Dublin" className="w-100 h-100 w-md-75 h-md-75 textMoveRight" />
                </div>
                <div className="col-md-2 d-flex align-items-center"> 
                    <p className="textMoveRight">Tempelbar Dublin 2025</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1"></div>
                <div className="col-7">
                    <p>Träna</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 bgProfilePicture"></div>
                <div className="col-1"></div>
                <div className="col-7">
                    <p>Programmera</p>
                </div>
            </div>
        </div>
    )
}

export default Hobie;