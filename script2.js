
function Mitocondrias() {	
let index_html = document.querySelector('#Index')
let mitocondrias_html = document.querySelector('#Mitocondrias')
let sobre_html = document.querySelector('#sobrehtml')
	index_html.style.display = "none"
	sobre_html.style.display = "none"
mitocondrias_html.style.display = "block"
charge_my_url()
var stateObj = { foo: "bar" };
function change_my_url()
{
   history.pushState(stateObj, "Mittocndrias", "Mitocondrias");
}
var link = document.getElementById('click');
link.addEventListener('click', change_my_url, false);
	
}
function index() {	
let index_html = document.querySelector('#Index')
let mitocondrias_html = document.querySelector('#Mitocondrias')
let sobre_html = document.querySelector('#sobrehtml')
	index_html.style.display = "block"
	sobre_html.style.display = "none"
mitocondrias_html.style.display = "none"
charge_my_url()
var stateObj = { foo: "bar" };
function change_my_url()
{
   history.pushState(stateObj, "Mittocndrias", "Index");
}
var link = document.getElementById('click');
link.addEventListener('click', change_my_url, false);
		
}
function sobre() {	
let index_html = document.querySelector('#Index')
let mitocondrias_html = document.querySelector('#Mitocondrias')
let sobre_html = document.querySelector('#sobrehtml')
	index_html.style.display = "none"
	sobre_html.style.display = "block"
mitocondrias_html.style.display = "none"
charge_my_url()
var stateObj = { foo: "bar" };
function change_my_url()
{
   history.pushState(stateObj, "Mittocndrias", "Sobre");
}
var link = document.getElementById('click');
link.addEventListener('click', change_my_url, false);
		
}
function scrollBanner() {
  scrollPos = window.scrollY;
  var headerText = document.querySelector('.header-paralax h1')
  headerText.style.marginTop = -(scrollPos/3)+"px";
  headerText.style.opacity = 1-(scrollPos/480);
}

window.addEventListener('scroll', scrollBanner);

window.onscroll = function(){
   var top = window.pageYOffset || document.documentElement.scrollTop
   if( top >  848 ) {
 var headerText = document.querySelector('.menu2')
  headerText.style.visibility = "visible";
  headerText.style.opacity = 1;
   }
   else if (top <= 848) {
	  var headerText = document.querySelector('.menu2')  
	     headerText.style.opacity = -2;
	    headerText.style.visibility = "hidden";
   }
}

function quantotestemeu(){
	
var myVar = setInterval(descendo, 50);
  function descendo(){
	document.documentElement.scrollTop += 100
	let top = window.pageYOffset || document.documentElement.scrollTop
  
	if(top > 849) {
		clearInterval(myVar);
		
	}   
  }
	
	
	
}







var a222 = window.document.getElementById('Mywork')

a222.addEventListener('mouseenter', Entrou222)
a222.addEventListener('mouseout', saiu222)



function Entrou222(){

var Img = window.document.getElementById('imgwork')   


a222.style.background = "#ae00ffa1 "
a222.style.border = "2px solid white "
a222.style.transition = "border 1s, background 1s"
var myVar = setInterval(trocaImg, 1);
function trocaImg() {
   Img.src = "setabaixo.png"
   Img.src.transition = "src 10s"
     Img.style.marginLeft = "8%"

clearInterval(myVar);


}
}
function saiu222(){

var Img = window.document.getElementById('imgwork')   

var myVar = setInterval(trocaImg2, 1);
function trocaImg2() {
   Img.src = "setadireta2.png"
     Img.style.marginLeft = "5%"

clearInterval(myVar);
}
a222.style.background = "#c0c0c003"
a222.style.border = "2px solid white "
a222.style.transition = "border 1s, background 1s"

}





/*

window.onload = function() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("scream");
  ctx.drawImage(img, 0, 0,c.width/3,c.height/3);
  
    c.width =  (window.innerWidth);
    c.height = (window.innerHeight);
	
		ctx.clearRect(0,0,c.width,c.height);
		ctx.drawImage(img,0,0,c.width/3,c.height/3);
  

  img.style.display = "none"
}




   <p>Image to use:</p>
<img id="scream" width="220" height="277" src="egito.png" alt="The Scream">

<p>Canvas:</p>
<canvas id="myCanvas" >
Your browser does not support the HTML5 canvas tag.
</canvas>



<p><strong>Note:</strong> The canvas tag is not supported in Internet 
Explorer 8 and earlier versions.</p>
#myCanvas {
	
	
	width:100%;
	height:800px;
	border:1px solid #d3d3d3
	
}
#myCanvas img{
	
	width:48%;
	max-width:50%;

	
	
}
*/



