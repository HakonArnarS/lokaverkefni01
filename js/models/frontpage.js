var renderFrontPage = function(){
    var frontpageTemplate = `
    <div class="fp-content-container">
    <section class="table-news">
    <!--Tímataflan - (líka notuð fyrir mobile)-->
    <div class="timetable-container">
        <div class="timetable">
            <h2>Tímatafla</h2>
            <div class="class-type">
                    <span>O</span>
                    <p>Opinn tími</p>
                    <span>O</span>
                    <p>Lokaður tími</p>
                    <span>O</span>
                    <p>Viðburður</p>
            </div>
            <div class="carousel-container">
                    <div class="carousel-takkar">
                        <button class="changeDayBtn" onclick=changeDay(-1)>&#60;</button>
                        <button class="changeDayBtn" onclick=changeDay(1)>&#62;</button>
                    </div>
                <div id="carousel-slides-container"> 
                </div>
            </div>
        </div>
    </div>
    <!--Tilkynningar-->
    <div class="news-container">
        <h2>Tilkynningar</h2>
        <div class="news">
            <article>
                <span>14. Nóv</span>
                <p>Hugleiðsla með Töru 18. nóv.</p>
            </article>
            <article>
                <span>12. Nóv</span>
                <p>Friðarhugleiðslu námskeið 11. nóv.</p>
            </article>
            <article>
                <span>10. Nóv</span>
                <p>Töfraferðalag með Hugrúnu og Oshri.</p>
            </article>
            <article>
                <span>9. Nóv</span>
                <p>Jóga fyrir 60 plús.</p>
            </article>
        </div>
        <a href="#">Sjá allar tilkynningar</a>
    </div>
    </section>
    <!--Vinsælast / mest leitað-->
    <div class="most-popular">
    <h2>Vinsælast</h2>
    <div class="class-cards">
        <div class="classCard">
            <img src="images/mgjoga.jpg" alt="mynd úr meðgöngujóga"/>
            <a href="#"><h3 class="valid-btn">Meðgöngujóga</h3></a>
            <p>
                Í Meðgöngujóga leggjum við áherslu á öndun,  teygjur, styrkjandi æfingar og slökun. Djúp öndun og slökun er einn mikilvægasti undirbúningur fyrir góða og ánægjulega  fæðingu. 
            </p>
        </div>
        <div class="classCard">
            <img src="images/jogakennsla.jpg" alt="mynd úr meðgöngujóga"/>
            <a href=""><h3>Kennaranám</h3></a>
            <p>
                Jógasetrið býður upp á ýmiskonar kennaranám. Kennaranámið er fyrir alla, hvort sem er til að verða löggiltur kennari eða einungis til þess að dýpka persónulega reynslu af Jóga.
            </p>
        </div>
        <div class="classCard">
            <img src="images/jogakort.png" alt="mynd úr meðgöngujóga"/>
            <a href=""><h3>Áskriftakort</h3></a>
            <p>
                Jógasetrið býður upp á ýmiskonar áskriftarleiðir svo allir ættu að finna leið sem hentar sér. Opin kort gilda í alla opna tíma, annars er greitt sér fyrir námsekið og aðra viðburði.
            </p>
        </div>
    </div>
    </div>
    </div>

    `
    document.querySelector("main").innerHTML = frontpageTemplate;
    renderTimetableCarousel(); 
    var fpHeader = document.querySelector("header"); 
    fpHeader.classList.add("fp-header");

    var validButtons = document.querySelectorAll(".valid-btn");
    for(var i = 0; i < validButtons.length; i++){
        validButtons[i].addEventListener("click", function(){
            renderValid()
        });  
    }
    
}




