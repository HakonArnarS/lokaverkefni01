var renderTimatafla = function(){
    var timataflaTemplate = `
    <div class="timatafla-content-container">
    <h2>Tímatafla</h2>
    <div class="timatafla-filter">
        <a href="#"><h3 class="dropdown">Námskeið</h3></a>
        <a href="#"><h3 class="dropdown">Dagur</h3></a>
        <a href="#"><h3 class="dropdown">Tími dags</h3></a>
    </div>
    <section class="vika-container">

    </section>
    <p>Vinsamlegast athugið að öll námskeið merkt með (*) eru lokuð námskeið eða tímabundnir viðburðir.</p>
    </div>
    `
    document.querySelector("main").innerHTML = timataflaTemplate;

    var fpHeader = document.querySelector("header"); 
    fpHeader.classList.remove("fp-header"); 
    
    var vikaContainer = document.querySelector(".vika-container");

    for(var i = 0; i < timetableArray.length; i++){
        var allirTimarTemplate = `
            <div class="vikudagur">
                <p>${timetableArray[i].weekday}</p>
            <div>

            <div class="dagur">
        `
        for( var j = 0; j<timetableArray[i].classes.length; j++){ 
            allirTimarTemplate += `
            
            <div class="tími">
                <p>${timetableArray[i].classes[j].hours}</p>
                <p>${timetableArray[i].classes[j].name}</p>
            </div>
        `
        }
        allirTimarTemplate +=`
        </div>
        `
        vikaContainer.innerHTML += allirTimarTemplate; 
    }
}


