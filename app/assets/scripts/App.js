import '../styles/styles.css'
import ScrollManager from './modules/ScrollManager'
import Cursor from './modules/Cursor'

new ScrollManager()
new Cursor()
    // Flipping Cargs by Shahid Shaikh from CodePen.io
var flipCheck = 0;

function rotateCards() {
    if (flipCheck === 0) {

        document.getElementById("front-1").classList.add("showGreen");
        document.getElementById("back-1").classList.add("showRed");

        flipCheck = 1;

        setTimeout(function() {
            document.getElementById("front-2").classList.add("showGreen");
            document.getElementById("back-2").classList.add("showRed");

            setTimeout(function() {
                document.getElementById("front-3").classList.add("showGreen");
                document.getElementById("back-3").classList.add("showRed");

            }, 1000);
        }, 1000);
    } else {

        document.getElementById("front-1").classList.remove("showGreen");
        document.getElementById("back-1").classList.remove("showRed");

        flipCheck = 0;

        setTimeout(function() {

            document.getElementById("front-2").classList.remove("showGreen");
            document.getElementById("back-2").classList.remove("showRed");

            setTimeout(function() {
                document.getElementById("front-3").classList.remove("showGreen");
                document.getElementById("back-3").classList.remove("showRed");
            }, 1000);
        }, 1000);
    }
}

setInterval(rotateCards, 5000); // Time in milliseconds

// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}