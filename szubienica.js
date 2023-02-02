var haslo="aiya earendil";
haslo=haslo.toLocaleUpperCase();

var dlugosc=haslo.length;
var ile=0;
var haslo1="";

for(i=0;i<dlugosc;i++){
    if (haslo.charAt(i)==" ") haslo1=haslo1+" ";
    else haslo1=haslo1+"-";
}

function wypiszhaslo(){

document.getElementById("plansza").innerHTML=haslo1;

}
var Tab=new Array(36);

var nr =65;

for(i=0;i<=26;i++){
    
    Tab[i]=String.fromCharCode(nr);
    nr = nr +1;
}

window.onload= start;

function start(){

    var tresc="";

    for(i=0;i<26;i++){
        var element = "lit"+i;
        tresc=tresc+'<div class="litera" onclick="sprawdz('+i+')" id ="'+element+'">'+Tab[i]+'</div>';
        if((i+1)%7==0)tresc=tresc+'<div style="clear:both;"></div>'
    }
    document.getElementById("alfabet").innerHTML=tresc;
    

    wypiszhaslo();
}


String.prototype.zamienznak = function(miejsce,znak){

    if(miejsce>this.length -1) return this.toString();

    else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);


    
}

function sprawdz(nr){

var trafiona=false;

    for(i=0;i<dlugosc;i++){

        if(haslo.charAt(i)==Tab[nr]){

            haslo1=haslo1.zamienznak(i,Tab[nr]);

            trafiona=true;
           
            }

    }

    if (trafiona==false){

      var element="lit"+nr;
        document.getElementById(element).setAttribute("onclick",";");


        ile++;
        var obraz="img/s"+ile+".jpg";
        document.getElementById("szubienica").innerHTML='<img src="'+obraz+'"alt=""/>'



    }

if(haslo==haslo1){
    document.getElementById("alfabet").innerHTML="wyrana";
}

if (ile>=9){
    document.getElementById("alfabet").innerHTML="przegrana";
}

    wypiszhaslo();

}
