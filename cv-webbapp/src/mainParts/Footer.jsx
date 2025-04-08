
/*Footer som visar upp vilka språk som används vid utvecklingen av sidan
samt vilken motor som hoastar sidan*/
function Footer() {

    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex justify-content-center footerText">
                        <p>Developed with</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    {/*Kolumn som visar HTML */}
                    <div className="col-1 d-md-flex justify-content-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
                            alt="HTML"
                            className="footerImageSize"
                        />
                    </div>
                    <div className="col-1"></div>
                    {/*Kolumn som visar CSS */}
                    <div className="col-1 d-md-flex justify-content-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                            alt="CSS"
                            className="footerImageSize"
                        />
                    </div>
                    <div className="col-1"></div>
                    {/*Kolumn som visar React */}
                    <div className="col-1 d-md-flex justify-content-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="React"
                            className="footerImageSize"
                        />
                    </div>
                    <div className="col-1"></div>
                    {/*Kolumn som visar JavaScript */}
                    <div className="col-1 d-md-flex justify-content-center">
                        <img
                            src="https://camo.githubusercontent.com/34c801e15a80d0d62f3da09bc6ca4f46a243457939381ae67f5003bdac51d432/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d706c61696e2e737667"
                            alt="JavaScript"
                            className="footerImageSize"
                        />
                    </div>
                    <div className="col-1"></div>
                    {/*Kolumn som visar Bootstrap */}
                    <div className="col-1 d-md-flex justify-content-center">
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                            alt="Bootstrap"
                            className="footerImageSize"
                        />
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center footerText">
                        <p>Powered by</p>
                    </div>
                </div>
                <div className="row">
{/*                     <div className="col-1"></div> */}
                    <div className="col">
                        <div className="d-flex justify-content-center mb-2 w-100">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                alt="GitHub"
                                className="footerImageSize"
                            />
                        </div>
                    </div>
{/*                     <div className="col-1"></div> */}
                </div>
            </div>
        </footer>
    )

}

export default Footer;