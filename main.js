function bak(){
//create the images variable to run time values
let images = 3;
//create the directory to pickup the images
let dir = "img/";
//create the random choice number function used Math.random method
let randomChoice =(Math.floor(Math.random()*images));
//create tha arrays to create the images callections for mobiles
let mobile = ['Pic0.jpg','Pic1.jpg','Pic6.jpg'];
//create tha arrays to create the images callections for desktop
let desktop = ['Pic3.jpg','Pic5.jpg','Pic7.jpg'];
//define the media qurey 
let win = window.matchMedia("(max-width: 700px)");
//check the media qurey is true & glase
if(win.matches){
//I change background images with setAttribute with media qurey
document.getElementById("header").setAttribute("style","background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7)), url(" + dir + mobile[randomChoice]+");");
}else{
document.getElementById("header").setAttribute("style","background-image:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.7)), url(" + dir + desktop[randomChoice]+")");
} 
}
bak();
