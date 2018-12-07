var headerTemplate = `
<h1 class="mh1">Jógasetrið</h1>
<h1 class="dh1">Velkomin í <br>Jógasetrið</h1>
<nav>
    <!-- HAMBORGARA-MENU-->
    <section class="hamburger-menu-container"> 
        <a><img src="images/logo.svg" alt="Logo Jógasetursins" class="homeBtn"/></a>
        <div class="burger-container">
            <div class="burger"></div>
            <div class="burger"></div>
            <div class="burger"></div>
        </div>
        <div class="mobile-menu">
            <ul>
                <li><a href="#"><h3 id="dropbtn1" class="mdropdown">Jógasetrið</h3></a>
                    <div id="myDropdown" class="mdropdown-content">
                        <a href="#"><h4>Um okkur</h4></a>
                        <a href="#"><h4>Kennarar</h4></a>
                        <a href="#"><h4>Fréttir</h4></a>
                        <a href="#"><h4>Spurt og svarað</h4></a>
                        <a href="#"><h4>Hafa samband</h4></a>
                    </div>
                </li>
                <li><a href="#"><h3 id="dropbtn2" class="mdropdown">Námskeið</h3></a>
                    <div id="myDropdown2" class="mdropdown-content">
                        <a href="#"><h4 class="namskeid-btn">Öll námskeið</h4></a>
                        <a href="#"><h4>Opnir tímar</h4></a>
                        <a href="#"><h4>Lokaðir tímar</h4></a>
                        <a href="#"><h4>Námskeið og viðburðir</h4></a>
                    </div>
                </li>
                <li id="dropbtn3"><a href="#"><h3 class="mdropdown">Kennaranám</h3></a>
                    <div id="myDropdown3" class="mdropdown-content">
                        <a href="#"><h4>Jóga Nidra og leiðbeinanda réttindi</h4></a>
                        <a href="#"><h4>Kundalini kennaranám 1</h4></a>
                        <a href="#"><h4>Krakkajóga kennaranám</h4></a>
                        <a href="#"><h4>Kundalini kennaranám 2</h4></a>
                    </div>
                </li>
                <li><a href="#" class="timatafla-btn"><h3>Tímatafla</h3></a></li>
                <li><a href="#"><h3>Verðskrá</h3></a></li>
                <li><a><i id="mSearch-icon" class="fas fa-search" ></i></a></li>
            </ul>
            <!--Mobile leitarvél-->
            <form role="search">
                <div>
                    <input type="search" id="myMobileSearch" name="q"
                    placeholder="Leita"
                    aria-label="Search through site content"/>
                </div>
            </form>
            <!--Div fyrir leitarniðurstöður-->
            <div class="msearch-results">

            </div>
        </div>
    </section>
    <!--DESKTOP MENU-->
    <section class="nav-container">
        <a href="#"><img src="images/logo-landscape.svg" alt="Logo Jógasetursins" class="homeBtn" /></a>
        <div class="right-nav-section">
            <ul class="nav-list">
                <li><a href="#"><h3 class="dropdown">Jógasetrið</h3></a>
                    <ul class="dropdown-list" aria-label="submenu">
                        <li><a href="#"><h4>Um okkur</h4></a></li>
                        <li><a href="#"><h4>Kennarar</h4></a></li>
                        <li><a href="#"><h4>Fréttir</h4></a></li>
                        <li><a href="#"><h4>Spurt og svarað</h4></a></li>
                        <li><a href="#"><h4>Hafa samband</h4></a></li>
                    </ul>
                </li>
                <li><a href="#"><h3 class="dropdown">Námskeið</h3></a>
                    <ul class="dropdown-list" aria-label="submenu">
                        <li><a><h4 class="namskeid-btn">Öll námskeið</h4></a></li>
                        <li><a href="#"><h4>Opnir tímar</h4></a></li>
                        <li><a href="#"><h4>Lokaðir tímar</h4></a></li>
                        <li><a href="#"><h4>Námskeið og viðburðir</h4></a></li>
                    </ul>
                </li>
                <li><a href="#"><h3 class="dropdown">Kennaranám</h3></a>
                    <ul class="dropdown-list" aria-label="submenu">
                        <li><a href="#"><h4>Jóga Nidra og leiðbeinanda réttindi</h4></a></li>
                        <li><a href="#"><h4>Kundalini kennaranám 1</h4></a></li>
                        <li><a href="#"><h4>Krakkajóga kennaranám</h4></a></li>
                        <li><a href="#"><h4>Kundalini kennaranám 2</h4></a></li>
                    </ul>
                </li>
                <li><a href="#"><h3 class="timatafla-btn">Tímatafla</h3></a></li>
                <li><a href="#"><h3>Verðskrá</h3></a></li>
                <li><a><i id="search-icon" class="fas fa-search"></i></a></li>
            </ul>
        </div>
    </section>
    <!--Desktop leitarvél-->
    <form role="search">
        <div>
            <input type="search" id="mySearch" name="q"
            placeholder="Leita"
            aria-label="Search through site content"/>
        </div>
    </form>
</nav>
<!--Div fyrir leitarniðurstöður-->
<div id="search-results">

</div>
`
document.querySelector("header").innerHTML = headerTemplate; 