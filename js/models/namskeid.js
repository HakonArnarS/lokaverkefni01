var renderNamskeid = function(){  
    console.log("virkar");  
   var namskeidTemplate = `
    <div class="namskeid-content-container">
    <h2>Námskeið</h2>
    <!--Filter fyrir námskeið og viðburði-->
    <section class="namskeid-container">
        <div class="namskeid-filter">
            <a href="#"><h3 id="oll">Öll námskeið</h3></a>
            <a href="#"><h3 id="opin">Opin námskeið</h3></a>
            <a href="#"><h3 id="lokud">Lokuð námskeið</h3></a>
            <a href="#"><h3 id="vidburdir">Viðburðir</h3></a>
        </div>
        <ul class="namskeid-mfilter">
            <li><a href="#"><h3 id="dropbtn4" class="mdropdown">Námskeið</h3></a>
                <div id="myDropdown4" class="mdropdown-content">
                    <a href="#"><h4 id="moll">Öll námskeið</h4></a>
                    <a href="#"><h4 id="mopin">Opnir tímar</h4></a>
                    <a href="#"><h4 id="mlokud">Lokaðir tímar</h4></a>
                    <a href="#"><h4 id="mvidburdir">Námskeið og viðburðir</h4></a>
                </div>
            </li>
        </ul>
        <!--Kort fyrir öll námskeið-->
        <div class="class-cards">

        </div>
    </section>
    </div>
    `
    document.querySelector("main").innerHTML = namskeidTemplate;
    console.log(document.querySelector("main")); 
    makeFilters(); 
    var fpHeader = document.querySelector("header"); 
    fpHeader.classList.remove("fp-header");
    filterTimar("", true); 

}
