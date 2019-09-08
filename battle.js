var bar=1;
var yav=1;
var mid=1;
var clickControl=1;
var clickControlYavuz=1;
var clickControlMidilli=1;
document.getElementById('barbosa').addEventListener('click',barbosaPick);
document.getElementById('yavuz').addEventListener('click',yavuzPick);
document.getElementById('midilli').addEventListener('click',midilliPick);

//If you select barbosa,other option will be hidden
function barbosaPick(){
   bar++;
   if (bar%2==0) //barbosa click control
   {
        document.getElementById('barbosa').style.color='red';
        document.getElementById('yavuz').style.visibility='hidden';
        document.getElementById("midilli").style.visibility="hidden";
   }
   else {
        document.getElementById('barbosa').style.color='black';
        document.getElementById('yavuz').style.visibility='visible';
        document.getElementById("midilli").style.visibility="visible";

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
       document.getElementById('yavuz').style.color='black';
       document.getElementById('barbosa').style.visibility='visible';
       document.getElementById("midilli").style.visibility="visible";
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
       document.getElementById('midilli').style.color='black';
       document.getElementById('barbosa').style.visibility='visible';
       document.getElementById("yavuz").style.visibility="visible";

  }
}
//onmouseover
function clickField(i){
  if (i<24 && bar%2==0 && clickControl!=2){
    console.log(bar);
    //i put inferior
    //indicate mouseover
    var pickValue=document.getElementsByClassName('shot-field')[i];
    pickValue.style.backgroundColor='#7FFFD4';
    var pickValue1=document.getElementsByClassName('shot-field')[i+6];
    pickValue1.style.backgroundColor='#7FFFD4';
    var pickValue2=document.getElementsByClassName('shot-field')[i+12];
    pickValue2.style.backgroundColor='#7FFFD4';
    document.getElementsByClassName("shot-field")[i].onclick=function() {fix(i)};
    function fix(i){
      //select field and place Ship
      clickControl++;
      var pickValue=document.getElementsByClassName('shot-field')[i];
      pickValue.style.backgroundColor='black';
      var pickValue1=document.getElementsByClassName('shot-field')[i+6];
      pickValue1.style.backgroundColor='black';
      var pickValue2=document.getElementsByClassName('shot-field')[i+12];
      pickValue2.style.backgroundColor='black';

      barbosaPick();
    }

  }

  else if (i<30 && yav%2==0 && clickControlYavuz!=2) {
    var pickValue=document.getElementsByClassName('shot-field')[i];
    pickValue.style.backgroundColor='#7FFFD4';
    var pickValue1=document.getElementsByClassName('shot-field')[i+6];
    pickValue1.style.backgroundColor='#7FFFD4';
    document.getElementsByClassName("shot-field")[i].onclick=function() {fix(i)};
    function fix(i){
      clickControlYavuz++;
      var pickValue=document.getElementsByClassName('shot-field')[i];
      pickValue.style.backgroundColor='black';
      var pickValue1=document.getElementsByClassName('shot-field')[i+6];
      pickValue1.style.backgroundColor='black';


      yavuzPick();

    }

  }
  else if(i!=6 && i!=0 && i!=12 && i!=18 && i!=24 && i!=30 && mid%2==0 && clickControlMidilli!=2){
  var pickValue=document.getElementsByClassName('shot-field')[i];
  pickValue.style.backgroundColor='#7FFFD4';
  var pickValue1=document.getElementsByClassName('shot-field')[i-1];
  pickValue1.style.backgroundColor='#7FFFD4';
  document.getElementsByClassName("shot-field")[i].onclick=function() {fix(i)};
  function fix(i){
    clickControlMidilli++;
    var pickValue=document.getElementsByClassName('shot-field')[i];
    pickValue.style.backgroundColor='black';
    var pickValue1=document.getElementsByClassName('shot-field')[i-1];
    pickValue1.style.backgroundColor='black';


    midilliPick();

  }

}
}
//onmouseout
function unclickField(i){
  //FieldControl Barbosa
  if (i<24 && bar%2==0) {
    if (clickControl%2==1) {
      console.log(clickControl);


        var pickValue=document.getElementsByClassName('shot-field')[i];
        pickValue.style.backgroundColor='#00FF7F';
        var pickValue1=document.getElementsByClassName('shot-field')[i+6];
        pickValue1.style.backgroundColor='#00FF7F';
        var pickValue2=document.getElementsByClassName('shot-field')[i+12];
        pickValue2.style.backgroundColor='#00FF7F';

      }
}
//FieldControl Yavuz
else if(i<30 && yav%2==0) {

  if(clickControlYavuz%2==1){
  var pickValue=document.getElementsByClassName('shot-field')[i];
  pickValue.style.backgroundColor='#00FF7F';
  var pickValue1=document.getElementsByClassName('shot-field')[i+6];
  pickValue1.style.backgroundColor='#00FF7F';
}
}
//FieldControl  Midilli
else if (i!=6 && i!=0 && i!=12 && i!=18 && i!=24 && i!=30 && mid%2==0 ) {

    if(clickControlMidilli%2==1){
      var pickValue=document.getElementsByClassName('shot-field')[i];
      pickValue.style.backgroundColor='#00FF7F';
      var pickValue1=document.getElementsByClassName('shot-field')[i-1];
      pickValue1.style.backgroundColor='#00FF7F';
    }

}
}
