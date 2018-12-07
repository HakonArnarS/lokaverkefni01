var footerTemplate = `
<section class="footer-container">
<div class="footer-contact">
    <h2>Hafðu samband</h2>
    <h3>Skipholt 50C</h3>
    <h3>jogasetrid&#64;jogasetrid.is</h3>
    <h3>Sími&#58;&nbsp;778-1000</h3>
</div>
<div class="footer-logo">
    <img src="images/logo.svg" alt="Jógasetrið logo"/>
</div>
<div class="social-media">
    <h2>Samfélagsmiðlar</h2>
    <a href=""><h3>Jógasetrið á Facebook</h3></a>
    <a href=""><h3>Meðgöngujóga með Auði á Facebook</h3></a>
</div>
</section>
<!--Mobile footer-->
<section class="mfooter-container">
<div class="mfooter-contact">
    <h3>Jógasetrið</h3>
    <p>Skipholt 50C</p>
    <p>jogasetrid&#64;jogasetrid.is</p>
    <p>Sími&#58;&nbsp;778-1000</p>
</div>
<div class="mfooter-logo">
    <img src="images/logo.svg" alt="Jógasetrið logo"/>
</div>
<div class="msocial-media">
    <a href=""><img src="images/facebook-logo.svg" alt="Facebook síða Jógasetursins"></a>
</div>
</section>
`
document.querySelector("footer").innerHTML = footerTemplate; 