var bar=1;
var yav=1;
var mid=1;
document.getElementById('barbosa').addEventListener('click',barbosaPick);
document.getElementById('yavuz').addEventListener('click',yavuzPick);
document.getElementById('midilli').addEventListener('click',midilliPick);

function barbosaPick(){
   bar++;
   if (bar%2==0) {
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
function yavuzPick(){
  yav++;
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
function midilliPick(){
  mid++;
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

function clickField(i){
  if (i<24 && bar%2==0){
    console.log(bar);
    var pickValue=document.getElementsByClassName('shot-field')[i];
    pickValue.style.backgroundColor='#7FFFD4';
    var pickValue1=document.getElementsByClassName('shot-field')[i+6];
    pickValue1.style.backgroundColor='#7FFFD4';
    var pickValue2=document.getElementsByClassName('shot-field')[i+12];
    pickValue2.style.backgroundColor='#7FFFD4';

  }

  else if (i<30 && yav%2==0) {
    var pickValue=document.getElementsByClassName('shot-field')[i];
    pickValue.style.backgroundColor='#7FFFD4';
    var pickValue1=document.getElementsByClassName('shot-field')[i+6];
    pickValue1.style.backgroundColor='#7FFFD4';

  }
  else if(i!=6 && i!=0 && i!=12 && i!=18 && i!=24 && i!=30 && mid%2==0 ){
  var pickValue=document.getElementsByClassName('shot-field')[i];
  pickValue.style.backgroundColor='#7FFFD4';
  var pickValue1=document.getElementsByClassName('shot-field')[i-1];
  pickValue1.style.backgroundColor='#7FFFD4';

}
}
function unclickField(i){
  if (i<24 && bar%2==0) {

  var pickValue=document.getElementsByClassName('shot-field')[i];
  pickValue.style.backgroundColor='#00FF7F';
  var pickValue1=document.getElementsByClassName('shot-field')[i+6];
  pickValue1.style.backgroundColor='#00FF7F';
  var pickValue2=document.getElementsByClassName('shot-field')[i+12];
  pickValue2.style.backgroundColor='#00FF7F';
}
else if(i<30 && yav%2==0) {
  var pickValue=document.getElementsByClassName('shot-field')[i];
  pickValue.style.backgroundColor='#00FF7F';
  var pickValue1=document.getElementsByClassName('shot-field')[i+6];
  pickValue1.style.backgroundColor='#00FF7F';

}
else if (i!=6 && i!=0 && i!=12 && i!=18 && i!=24 && i!=30 && mid%2==0 ) {
  var pickValue=document.getElementsByClassName('shot-field')[i];
  pickValue.style.backgroundColor='#00FF7F';
  var pickValue1=document.getElementsByClassName('shot-field')[i-1];
  pickValue1.style.backgroundColor='#00FF7F';


}
}
