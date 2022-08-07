

const divResultat  =document.getElementById("res");
 var tabJeu=[
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    var tabRes=[
        [1,2,7,5],
        [7,8,4,3],
        [5,4,2,6],
        [3,6,8,1]
    ];
    
afficherTab();
function afficherTab(){
   
    var txt="";
    for(var i=0;i<4;i++){

        txt+="<div style='text-align:center;'>";
        for(var j=0;j<4;j++){
            if(tabJeu[i][j]=== 0)
          txt+= "<button style='border-radius:10px;background:pink;color:white;font-size:larger;height:100px;width:100px;margin:2px 2px'>afficher</button>";
          else{
            txt+="<img src='"+getImage(tabJeu[i][j])+"' onClick='verif(\""+i+"-"+j+"\")' style='border-radius:10px;height:100px;width:100px;margin:2px 2px'>"
          }
        }
        txt+= "</div>";
    }
    
    divResultat.innerHTML=txt;
}

function getImage(valeur)
{
imgTxt='./image/';
switch(valeur){
case 1: imgTxt+='elephant.png';
break;
case 2: imgTxt+='giraffe.png';
break;
case 3: imgTxt+='hippo.png'
break;
case 4: imgTxt+='monkey.png'
break;
case 5: imgTxt+='pig.png'
break;
case 6: imgTxt+='penguin.png'
break;
case 7: imgTxt+='panda.png'
break;
case 8: imgTxt+='parrot.png'
break;
default: console.log('cas non pris en compte!!');
}
return imgTxt;
}

function verif(valeur){
var ligne   =valeur.substr(0,1);
var colonne =valeur.substr(2,1);
alert(ligne+" "+colonne);

tabJeu[ligne][colonne] = tabRes[ligne][colonne];
afficherTab();
}