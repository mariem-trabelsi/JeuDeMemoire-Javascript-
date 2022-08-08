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
    var oldSelection=[];
    var nbAffiche=0;
    var ready=true;
    var success=0;
   
    // document.getElementById('bttn').addEventListener('click',fct);

    // function fct(){
    //     var a=document.getElementById('nbreFois').value;
    //     if(a<=0)
    //     {
    //         alert('inapproriate entry !') 
    //         return -1;
    //     } 
    //     else
    //     {
    //         return a;
    //     }
       
    // }
afficherTab();

function afficherTab(){
    var txt="";
    for(var i=0;i<4;i++){

        txt+="<div style='text-align:center;'>";
        for(var j=0;j<4;j++){
          if(tabJeu[i][j] === 0)
          {
          txt+= "<button onClick ='verif(\""+i+"-"+j+"\")' style='border-radius:10px;background:pink;color:white;font-size:larger;height:100px;width:100px;margin:2px 2px'>afficher</button>";
          }
          else
          {
          txt+= "<img src='"+getImage(tabJeu[i][j])+"'  style='border-radius:10px;height:100px;width:100px;margin:2px 2px'>";
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
case 3: imgTxt+='hippo.png';
break;
case 4: imgTxt+='monkey.png';
break;
case 5: imgTxt+='pig.png';
break;
case 6: imgTxt+='penguin.png';
break;
case 7: imgTxt+='panda.png';
break;
case 8: imgTxt+='parrot.png';
break;
default: console.log('cas non pris en compte!!');
}
return imgTxt;
}

function verif(valeur){
    if(ready)
{
    nbAffiche++;

var ligne   =valeur.substr(0,1);
var colonne =valeur.substr(2,1);

tabJeu[ligne][colonne] = tabRes[ligne][colonne];
afficherTab();

 if(nbAffiche>1){
    ready=false;
    setTimeout(()=>{
        if(tabJeu[ligne][colonne] !== tabRes[oldSelection[0]][oldSelection[1]]){
            tabJeu[ligne][colonne] = 0;
            tabJeu [oldSelection[0]][oldSelection[1]] = 0;  
        }
        else {
            success++;
            if(success===8){
                tabJeu=[
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,0,0]
                ];
                afficherTab();
                alert('Excellent !');
                // tabRes= generateTabAleatoire();
            }
        }
        afficherTab();
        ready=true;
        nbAffiche=0;
        oldSelection=[ligne,colonne];

    },500)
   
 }
 else{
oldSelection=[ligne,colonne];
 }
}
}

// function generateTabAleatoire(){
//     var tab=[0,0,0,0,0,0,0,0];
//     for(var i=0;i<8;i++){
         
//             let nbre = Math.floor(Math.random()*8)+1;
//             // if(tab[nbre]) {
//               //je cherche comment regler ce probleme  
            
//                 tab[i]=nbre;
            
            
//     }
//     for(var i=0;i<8;i++)
//     {
//    for(var j=0;j<4;j++){
//     for(var t=0;t<4;t++)
//     {
//         tabResNew[j][t]=tab[i]
//     }
//    }
// }
// return tabResNew;
// }
// console.log();