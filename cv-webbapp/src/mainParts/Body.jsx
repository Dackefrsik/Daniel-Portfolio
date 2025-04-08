import Home from "../body/Home";
import Hobie from "../body/Hobie";
import Teknikals from "../body/Teknikals";
import Projects from "../body/Projects";
function Body() {

    //#region singel observer Observer innehåll som ska in från höger
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target)
                // Lägg till klassen som gör att elementet visas
                entry.target.classList.add("textApear");
            }
        });
    }, {
        // Görs när åtminstone 25% av elementet är i bild
        threshold: 0.25,
    });
    //#endregion

    
    //#region Observer som flyttar in och ut innehåll från höger
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("programingImagePosition")
            }
            else {
                entry.target.classList.remove("programingImagePosition")
            }
        })
    },
        {
            //Görs när hela bilden är i synlig i y-led
            threshold: 0.5,
        })
    //#endregion 

    const observer3 = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {

                entry.target.classList.add("opacityAfter")
            }
        },
            {
                //Görs när halva bilden visas
                threshold: 0.5
            })
    })

    return (
        <>
            <Home observer={observer} observer2={observer3}/>
            <Teknikals observer={observer2}/>
            <Projects observer={observer3}/>
            <Hobie observer={observer}/>
        </>

    )
}

export default Body;