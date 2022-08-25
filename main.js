Function back(){
//create the images variable to run time values
let images = 3;
//create the directory to pickup the images
lat dir = "img/";
//create the random choice number function used Math.random method
lat randomChoice = (Math.floor(Math.random()*images));
//create tha arrays to create the images callections
let mobile = ['Pic0.jpg','Pic1.jpg','Pic6.jpg'];
//I change background images with setAttribute with media qurey
document.getElementById("header").setAttribute("style","@media (max-width:600px){background-image: url(" + dir + mobile[randomChoice]");");
}");





}
back();
