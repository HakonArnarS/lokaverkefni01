var renderValid = function(){
    console.log("valid virkar"); 
    var validTemplate = `
    <div class="valid-content-container">
    <section class="valid-container">
    <h2>Meðgöngujóga</h2>
    <img src="images/mgjoga.jpg" alt="mynd úr meðgöngujóga"/>
    <h3>Afhverju meðgöngujóga?</h3>
    <p>
        Í Meðgöngujóga leggjum við áherslu á öndun,  teygjur, styrkjandi æfingar og slökun. Djúp öndun og slökun er einn mikilvægasti undirbúningur fyrir góða fæðingu. Við leggjum mikla áherslu á  sjálfsstyrkingu konunnar og líkamlega og andlega vellíðan fyrir fæðingu og móðurhlutverkið.<br>Óteljandi fæðingar – og reynslu sögur kvenna hafa staðfest að jóga er einn besti undirbúningur fyrir góða fæðingu enda hvetja flestar ljósmæður konur til að stunda jóga á meðgöngunni. Barnshafandi konur finna að jóga ástundun á meðgöngunni bætir andlega og líkamlega heilsu og vellíðan. Jóga stuðlar að betri meðvitund og tengingu við líkamann, hugarástand og tilfinningar. Með rólegri athygli dýpkar innsæið og öryggi og sjálfstraust eflist. Í jóga gefur konan meðgöngunni, sjálfri sér og barninu sérstaka athygli og er hvött til að bera ábyrgð á eigin heilsu og vera virk og skapandi í fæðingunni.
    </p>
    <h3>Skráning</h3>
    <p>
        Við bjóðum upp á frjálsa mætingu með opnu korti í alla meðgöngujógatímana. Flestar konur byrja í meðgöngujóga á 14. –16. viku og eru fram að fæðingu. Það er þó aldrei of seint að byrja og hægt að byrja hvenær sem er á meðan við höfum pláss. Við hvetjum þig líka til að nýta þér Jóga Nidra sem er einnig innifalið. Á ca. 4-6 vikna fresti bjóðum við upp á Parastund þar sem makinn mætir með, eða sá sem aðstoðar í fæðingu.
    </p>
    <h3>Tímarnir</h3>
    <p>
        Tímarnir eru kenndir: Mánudaga og miðvikudaga kl. 12:00 - 13:15, þriðjudaga og fimmtudaga kl. 18:45 - 20:00 og á laugardögum kl. 11:30 - 12:40. <br>
        Kennarar eru: Auður Bjarnadóttir,  Elva Rut Helgadóttir, Guðrún Theódóra Hrafnsdóttir, Þorgerður Sveinsdóttir, og Arna Rín Ólafsdóttir
    </p>
    <div class="valid-linkar">
        <button class="signup">Kaupa kort</button>
        <p>Hér er hægt að nálgast upplýsingar um <a href="#">kort og verðskrá</a></p> 
        <p>Við minnum einnig á Facebook hópinn <a href="#">Meðgöngujóga með Auði</a></p> 
    </div>
    </section>
    <!--Side menu - sama og er í dropdowninu-->
    <aside class="side-menu">
    <h2>Námskeið</h2>
    <a href="#"><h3>Meðgöngujóga</h3></a>
    <a href="#"><h3>12 spor til vellíðunnar</h3></a>
    <a href="#"><h3>Jóga fyrir 60 plús</h3></a>
    <a href="#"><h3>Parajóga</h3></a>
    <a href="#"><h3>Mömmujóga</h3></a>
    <a href="#"><h3>Kundalini grunnnámskeið</h3></a>
    <a href="#"><h3>Krakka- og unglingajóga</h3></a>
    <a href="#"><h3>Núvitund gegn streitu</h3></a>
    <a href="#"><h3>Karlajóga haustönn</h3></a>
    <a href="#"><h3>Kundalini-, Hatha-, Nidra-, og Mjúkt jóga</h3></a>
    </aside>
    </div>
    `

    document.querySelector("main").innerHTML = validTemplate;

    var fpHeader = document.querySelector("header"); 
    fpHeader.classList.remove("fp-header");
}