var bar=1;
var yav=1;
var mid=1;
var clickControl=1;
var clickControlYavuz=1;
var clickControlMidilli=1;
var halay=1;
var ciftetelli=1;
var zeybek=1;
var corBarbosa={x:0,y:0,z:0};
var corYavuz={x:0,y:0};
var corMidilli={x:0,y:0};
var enemy1={x:0,y:0,z:0};
var enemy2={x:0,y:0};
var enemy3={x:0,y:0};
var entire=0;
var entireYavuz=0;
var entireMidilli=0;
var crash=0;
document.getElementById('barbosa').addEventListener('click',barbosaPick);
document.getElementById('yavuz').addEventListener('click',yavuzPick);
document.getElementById('midilli').addEventListener('click',midilliPick);

//If you select barbosa,other option will be hidden
function notSeeButton(x){
  document.getElementById(x).style.visibility='hidden';

}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function inferiorControl(n,l){
  var counter=0;
  var count=0;

  if(n=='midilli'){
    var elem = document.getElementsByClassName('shot-field')[l];

    var colorField = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    console.log(colorField);
    var temp=colorField.substring(colorField.indexOf('(')+1,colorField.indexOf(')'));
    var temp2=temp.split(',',3);
    console.log(temp2);
    var r=parseInt(temp2[0]);
    var g=parseInt(temp2[1]);
    var b=parseInt(temp2[2]);
    console.log('a'+r);
    var hexColor=rgbToHex(r,g,b);
    console.log(hexColor);
    if(hexColor=='#2f4f4f'){
      console.log('sa');
      return true;
    }
    var elem = document.getElementsByClassName('shot-field')[l-1];

    var colorField = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    console.log(colorField);
    var temp=colorField.substring(colorField.indexOf('(')+1,colorField.indexOf(')'));
    var temp2=temp.split(',',3);
    console.log(temp2);
    var r=parseInt(temp2[0]);
    var g=parseInt(temp2[1]);
    var b=parseInt(temp2[2]);
    console.log('a'+r);
    var hexColor=rgbToHex(r,g,b);
    console.log(hexColor);
    if(hexColor=='#2f4f4f'){
      console.log('sa');
      return true;
    }
  }
  else {
    for(;l<36;l+=6){
      counter++;
      count=0;
      if(n=='barbosa'){
          count=4;
        }
        else if(n=='yavuz') {
          count=3;
        }

          if(counter<count){
            var elem = document.getElementsByClassName('shot-field')[l];

            var colorField = window.getComputedStyle(elem, null).getPropertyValue("background-color");
            console.log(colorField);
            var temp=colorField.substring(colorField.indexOf('(')+1,colorField.indexOf(')'));
            var temp2=temp.split(',',3);
            console.log(temp2);
            var r=parseInt(temp2[0]);
            var g=parseInt(temp2[1]);
            var b=parseInt(temp2[2]);
            console.log('a'+r);
            var hexColor=rgbToHex(r,g,b);
            console.log(hexColor);
            if(hexColor=='#2f4f4f'){
              console.log('sa');
              return true;
            }

          }


    }
  }

}


function barbosaPick(){
   bar++;
   if (bar%2==0) //barbosa click control
   {
        document.getElementById('barbosa').style.color='red';
        document.getElementById('yavuz').style.visibility='hidden';
        document.getElementById("midilli").style.visibility="hidden";
   }
   else {

        document.getElementById('barbosa').style.color='#2F4F4F	';
        if(clickControlYavuz<2){
        document.getElementById('yavuz').style.visibility='visible';
        }
        else {
          document.getElementById('yavuz').style.visibility='hidden';
        }

        if (clickControlMidilli<2) {
        document.getElementById("midilli").style.visibility="visible";
          }
          else {
          document.getElementById("midilli").style.visibility="hidden";

          }
   }

}
//If you select yavuz,other option will be hidden
function yavuzPick(){
  yav++;
  //yavuz click control
  if (yav%2==0) {
       document.getElementById('yavuz').style.color='red';
       document.getElementById('barbosa').style.visibility='hidden';
       document.getElementById("midilli").style.visibility="hidden";
  }
  else {
       document.getElementById('yavuz').style.color='#2F4F4F';
       if(clickControl<2){
       document.getElementById('barbosa').style.visibility='visible';
      }
      else{
        document.getElementById('barbosa').style.visibility='hidden';

      }
      if(clickControlMidilli<2){
       document.getElementById("midilli").style.visibility="visible";
     }
     else {
       document.getElementById("midilli").style.visibility="hidden";

     }
  }
}
//If you select midilli,other option will be hidden
function midilliPick(){
  mid++;
  //midilli click control
  if (mid%2==0) {
       document.getElementById('midilli').style.color='red';
       document.getElementById('barbosa').style.visibility='hidden';
       document.getElementById("yavuz").style.visibility="hidden";
  }
  else {
       document.getElementById('midilli').style.color='#2F4F4F';
       if(clickControl<2){
       document.getElementById('barbosa').style.visibility='visible';
      }
      else {
        document.getElementById("barbosa").style.visibility="hidden";

      }
      if(clickControlYavuz<2){
        document.getElementById("yavuz").style.visibility="visible";
      }
      else {
        document.getElementById("yavuz").style.visibility="hidden";

      }

  }
}
//onmouseover
function clickField(i){

  console.log('hal'+halay);
  if (i<24 && bar%2==0 && clickControl!=2 && halay==1){
    console.log('hal'+halay);
    //i put inferior
    //indicate mouseover
    var l=i;
    if(!inferiorControl('barbosa',l)){
    var pickValue=document.getElementsByClassName('shot-field')[i];
    pickValue.style.backgroundColor='#7FFFD4';
    var pickValue1=document.getElementsByClassName('shot-field')[i+6];
    pickValue1.style.backgroundColor='#7FFFD4';
    var pickValue2=document.getElementsByClassName('shot-field')[i+12];
    pickValue2.style.backgroundColor='#7FFFD4';
    document.getElementsByClassName("shot-field")[i].onclick=function() {fix(i)};
    function fix(i){
      //select field and place Ship
      halay++;
      console.log('hal');
      clickControl++;
      corBarbosa={x:i,y:i+6,z:i+12};
      console.log(corBarbosa);
      var pickValue=document.getElementsByClassName('shot-field')[i];
      pickValue.style.backgroundColor='#2F4F4F';
      var pickValue1=document.getElementsByClassName('shot-field')[i+6];
      pickValue1.style.backgroundColor='#2F4F4F';
      var pickValue2=document.getElementsByClassName('shot-field')[i+12];
      pickValue2.style.backgroundColor='#2F4F4F';
      notSeeButton('barbosa');
      barbosaPick();

    }
  }
  }

  else if (i<30 && yav%2==0 && clickControlYavuz!=2 && ciftetelli==1) {

    var l=i;
      if(!inferiorControl('yavuz',l)){
        var pickValue=document.getElementsByClassName('shot-field')[i];
        pickValue.style.backgroundColor='#7FFFD4';
        var pickValue1=document.getElementsByClassName('shot-field')[i+6];
        pickValue1.style.backgroundColor='#7FFFD4';
        document.getElementsByClassName("shot-field")[i].onclick=function() {fix(i)};
        function fix(i){
          ciftetelli++;
          clickControlYavuz++;
          corYavuz={x:i,y:i+6};
          var pickValue=document.getElementsByClassName('shot-field')[i];
          pickValue.style.backgroundColor='#2F4F4F';
          var pickValue1=document.getElementsByClassName('shot-field')[i+6];
          pickValue1.style.backgroundColor='#2F4F4F';

          notSeeButton('yavuz');
          yavuzPick();

        }
      }

  }
  else if(i!=6 && i!=0 && i!=12 && i!=18 && i!=24 && i!=30 && mid%2==0 && clickControlMidilli!=2 && zeybek==1){
      var l=i;
      if(!inferiorControl('midilli',l)){
            var pickValue=document.getElementsByClassName('shot-field')[i];
            pickValue.style.backgroundColor='#7FFFD4';
            var pickValue1=document.getElementsByClassName('shot-field')[i-1];
            pickValue1.style.backgroundColor='#7FFFD4';
            document.getElementsByClassName("shot-field")[i].onclick=function() {fix(i)};
            function fix(i){
              zeybek++;
              clickControlMidilli++;
              corMidilli={x:i,y:i-1};
              var pickValue=document.getElementsByClassName('shot-field')[i];
              pickValue.style.backgroundColor='#2F4F4F';
              var pickValue1=document.getElementsByClassName('shot-field')[i-1];
              pickValue1.style.backgroundColor='#2F4F4F';

              notSeeButton('midilli');
              midilliPick();

            }
          }

}
}
//onmouseout
function unclickField(i){
  //FieldControl Barbosa
  if (i<24 && bar%2==0) {
    if (clickControl%2==1) {
      console.log(clickControl);
        var l=i;
        if(!inferiorControl('barbosa',l)){
        var pickValue=document.getElementsByClassName('shot-field')[i];
        pickValue.style.backgroundColor='#00FF7F';
        var pickValue1=document.getElementsByClassName('shot-field')[i+6];
        pickValue1.style.backgroundColor='#00FF7F';
        var pickValue2=document.getElementsByClassName('shot-field')[i+12];
        pickValue2.style.backgroundColor='#00FF7F';
      }
      }
}
//FieldControl Yavuz
else if(i<30 && yav%2==0) {

  if(clickControlYavuz%2==1){
    var l=i;
    if(!inferiorControl('yavuz',l)){
      var pickValue=document.getElementsByClassName('shot-field')[i];
      pickValue.style.backgroundColor='#00FF7F';
      var pickValue1=document.getElementsByClassName('shot-field')[i+6];
      pickValue1.style.backgroundColor='#00FF7F';
    }
}
}
//FieldControl  Midilli
else if (i!=6 && i!=0 && i!=12 && i!=18 && i!=24 && i!=30 && mid%2==0 ) {

    if(clickControlMidilli%2==1){
      var l=i;
        if(!inferiorControl('midilli',l)){
          var pickValue=document.getElementsByClassName('shot-field')[i];
          pickValue.style.backgroundColor='#00FF7F';
          var pickValue1=document.getElementsByClassName('shot-field')[i-1];
          pickValue1.style.backgroundColor='#00FF7F';
        }
    }

}
}
function enemyShips(){
    var enemyCoord1 = Math.floor(Math.random() * 24);
    enemy1={x:enemyCoord1,y:enemyCoord1+6,z:enemyCoord1+12};
    console.log(enemy1);
    var enemyCoord2 = Math.floor(Math.random() * 30);
    enemy2={x:enemyCoord2,y:enemyCoord2+6};
    console.log(enemy2);
    var enemyCoord3 = Math.floor(Math.random() * 36);

    if(enemyCoord3%6==0){

      enemy3={x:enemyCoord3+1,y:enemyCoord3};
      console.log(enemy3);
    }else{
      enemy3={x:enemyCoord3,y:enemyCoord3+1};
      console.log(enemy3);
    }
}
function attack(i){

    for (f in enemy1){
      if(enemy1[f]==i){
      //shot
      console.log('girdi'+i);
      document.getElementsByClassName('shot-field')[i+36].style.backgroundImage="url('fire3.png')";
      entire++;
      if(entire>2){
          document.getElementsByClassName('shot-field')[enemy1.x+36].style.backgroundColor="white";
          document.getElementsByClassName('shot-field')[enemy1.y+36].style.backgroundColor="white";
          document.getElementsByClassName('shot-field')[enemy1.z+36].style.backgroundColor="white";
          document.getElementsByClassName('shot-field')[enemy1.x+36].removeEventListener('click',attack);
      }
    }
    else {
      document.getElementsByClassName('shot-field')[i+36].innerHTML='X';

    }
    }
    for(g in enemy2){
      if (enemy2[g]==i) {
        document.getElementsByClassName('shot-field')[i+36].style.backgroundImage="url('fire3.png')";
        entireYavuz++;
        if(entireYavuz>1){
            document.getElementsByClassName('shot-field')[enemy2.x+36].style.backgroundColor='white';
            document.getElementsByClassName('shot-field')[enemy2.y+36].style.backgroundColor='white';

        }
      }
      else{
        document.getElementsByClassName('shot-field')[i+36].innerHTML='X';

      }
    }
    for(h in enemy3){
      if (enemy3[h]==i) {
        document.getElementsByClassName('shot-field')[i+36].style.backgroundImage="url('fire3.png')";
        entireMidilli++;
        if(entireMidilli>1){
            document.getElementsByClassName('shot-field')[enemy3.x+36].style.backgroundColor='white';
            document.getElementsByClassName('shot-field')[enemy3.y+36].style.backgroundColor='white';

        }
      }
      else{
        document.getElementsByClassName('shot-field')[i+36].innerHTML='X';

      }
    }

    pcAttack();

}
function pcAttack(){
    var pcShot = Math.floor(Math.random() * 36);
    for(r in corBarbosa){
      if(corBarbosa[r]==pcShot){
        document.getElementsByClassName('shot-field')[pcShot].style.backgroundImage="url('fire3.png')";
        return pcShot;
      }
      document.getElementsByClassName('shot-field')[pcShot].innerHTML='X';

    }
    for(t in corYavuz){
      if(corYavuz[t]==pcShot){
        document.getElementsByClassName('shot-field')[pcShot].style.backgroundImage="url('fire3.png')";
        return pcShot;
      }
      document.getElementsByClassName('shot-field')[pcShot].innerHTML='X';

    }
    for(y in corMidilli){
      if(corMidilli[y]==pcShot){
        document.getElementsByClassName('shot-field')[pcShot].style.backgroundImage="url('fire3.png')";
        return pcShot;
      }
      document.getElementsByClassName('shot-field')[pcShot].innerHTML='X';

    }

}
