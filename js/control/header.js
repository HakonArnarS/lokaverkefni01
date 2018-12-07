var burger = document.querySelector(".burger-container"); 
/*
Hamborgara menu virkni
*/ 
var toggleHamburger = function(){
     
    if(!navIsOpen){
        menu.classList.add("show-menu");
        burgerLines[0].classList.add("change1");
        burgerLines[1].classList.add("change2");
        burgerLines[2].classList.add("change3");
        for (var i = 0; i < burgerLines.length; i++) {
        }
        navIsOpen = true;
    }
    else{
        menu.classList.remove("show-menu");
        burgerLines[0].classList.remove("change1");
        burgerLines[1].classList.remove("change2");
        burgerLines[2].classList.remove("change3");
        for (var i = 0; i < burgerLines.length; i++) {
        }
        navIsOpen = false;
    }   
}
burger.onclick = toggleHamburger
/*
Mobile onclick dropdown virkni
*/ 
var dropButton1 = document.getElementById("dropbtn1");
var dropButton2 = document.getElementById("dropbtn2");
var dropButton3 = document.getElementById("dropbtn3");  
var mdropList = document.getElementById("myDropdown");
var mdropList2 = document.getElementById("myDropdown2");
var mdropList3 = document.getElementById("myDropdown3");

var showMDropdown1 = function(dropdown) {
    console.log(dropdown.style.display); 
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    }
    else {
        dropdown.style.display = "none";
    }
}
dropButton1.onclick = function showMDropdown(){
    showMDropdown1(mdropList); 
}

dropButton2.onclick = function showMDropdown2(){
    showMDropdown1(mdropList2); 
}

dropButton3.onclick = function showMDropdown3(){
    showMDropdown1(mdropList3); 
}
/* 
toggle-a focus-inn á searchInput?
*/
var searchIcon = document.querySelector("#search-icon");
var mSearchIcon = document.querySelector("#mSearch-icon");
var searchInput = document.querySelector("#mySearch");
var mSearchInput = document.querySelector("#myMobileSearch");

searchIcon.onclick = function getFocus() {
    searchInput.focus();
    
}
mSearchIcon.onclick = function getFocus() {
    mSearchInput.focus();
    
}
var homeButtons = document.querySelectorAll(".homeBtn");
for(var i = 0; i < homeButtons.length; i++){
    homeButtons[i].addEventListener("click", function(){
        renderFrontPage();

    });  
}

var namskeidButtons = document.querySelectorAll(".namskeid-btn");
for(var i = 0; i < namskeidButtons.length; i++){
    namskeidButtons[i].addEventListener("click", function(){
        renderNamskeid()
        toggleHamburger()
    });  
}



var timataflaButtons = document.querySelectorAll(".timatafla-btn");

timataflaButtons[1].addEventListener("click", function(){
    renderTimatafla()
}); 
timataflaButtons[0].addEventListener("click", function(){
    document.querySelector("main").innerHTML = `<div class="carousel-container"><div class="carousel-takkar">
    <button class="changeDayBtn" onclick=changeDay(-1)>&#60;</button>
    <button class="changeDayBtn" onclick=changeDay(1)>&#62;</button>
</div>
<div id="carousel-slides-container">
</div> 
</div>
`
    renderTimetableCarousel()
    toggleHamburger()

}); 
