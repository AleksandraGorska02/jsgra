var numer=Math.floor(Math.random()*5)+1;

var timer1=0;


function ustawslajd(nrslajdu){
clearTimeout(timer1);
numer=nrslajdu-1;
setTimeout("zmienslajd()",500);
}


function zmienslajd(){
    
numer++;if(numer>5)numer=1;

var plik = "<img src=\"slajdy/" + numer + ".png\"/>";

document.getElementById("slider").innerHTML=plik;



timer1=setTimeout("zmienslajd()",5000);

}


