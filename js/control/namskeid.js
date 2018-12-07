
function filterTimar(filterString, noFilter){
    var cardsContainer = document.querySelector(".class-cards");
    console.log("virkar");
    cardsContainer.innerHTML = "";  
    for(var i = 0; i < namskeid.length; i++){
        if(namskeid[i].types !== filterString && !noFilter){
            continue; 
        }
        cardsContainer.innerHTML += `
        <div class="classCard">
            <img src="${namskeid[i].images}"/>

            <a href="#"><h3>${namskeid[i].names}</h3></a>
            <h3>${namskeid[i].types}</h3>
            <p>${namskeid[i].descriptions}</p>
        </div>
        `
    }
}
function makeFilters(){

    var ollNamskeid = document.querySelector("#oll");
    var opinNamskeid = document.querySelector("#opin");
    var lokudNamskeid = document.querySelector("#lokud");
    var vidburdirNamskeid = document.querySelector("#vidburdir");
    var mollNamskeid = document.querySelector("#moll");
    var mopinNamskeid = document.querySelector("#mopin");
    var mlokudNamskeid = document.querySelector("#mlokud");
    var mvidburdirNamskeid = document.querySelector("#mvidburdir");

    opinNamskeid.onclick = function(){
        filterTimar("- Opið námskeið -")
    };  
    lokudNamskeid.onclick = function(){
        filterTimar("- Lokað námskeið -")
    };
    vidburdirNamskeid.onclick = function(){
        filterTimar("- Viðburður -")
    };
    ollNamskeid.onclick = function(){
        filterTimar("", true); 
    };
    mopinNamskeid.onclick = function(){
        filterTimar("- Opið námskeið -")
    };  
    mlokudNamskeid.onclick = function(){
        filterTimar("- Lokað námskeið -")
    };
    mvidburdirNamskeid.onclick = function(){
        filterTimar("- Viðburður -")
    };
    mollNamskeid.onclick = function(){
        filterTimar("", true) 
    };
    var dropButton4 = document.getElementById("dropbtn4");
    var mdropList4 = document.getElementById("myDropdown4");

    var showMDropdown1 = function(dropdown) {
        console.log(dropdown.style.display); 
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        }
        else {
            dropdown.style.display = "none";
        }
    }

    dropButton4.onclick = function showMDropdown4(){
        showMDropdown1(mdropList4); 
    }
}