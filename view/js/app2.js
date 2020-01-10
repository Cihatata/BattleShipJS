var mah = 1; //buttonclickControl
var nus = 1;//buttonclickControl
var yav = 1;//buttonclickControl
var nusretClickControl = 0;//are you Place Sship ?
var yavuzClickControl = 0;// "are you place Ship"
var mahmudiyeClickControl = 0;// "are you place Ship"
//enemyGameCoord
var enemy1 = {x: 0, y: 0, z: 0};
var enemy2 = {x: 0, y: 0};
var enemy3 = {x: 0, y: 0};

var enemyShots = [1, 2, 3, 4, 5, 6, 37];

var myId;

var idControl;

var entireNusret = 0;//how much shot
var entireYavuz = 0;
var entireMahmudiye = 0;

var sendCoord = 0;

var imageControl = 0;
var corNusret = {q: 0, w: 0, e: 0};
var corYavuz = {a: 0, s: 0};
var corMahmudiye = {z: 0, x: 0};
var x = 1;
var remainShip = 7;
var hitShip = 0;
var path;


document.getElementById('nextImage').addEventListener('click', whichImage);

function whichImage() {
    imageControl++;
    console.log(imageControl);
    return imageControl;

}

function imageSrc() {

    var x = imageControl;
    var mod = x % 4;
    //console.log(mod);
    switch (mod) {
        case 0 :
            path = document.getElementById("image1").getAttribute('src');
            break;
        case 1 :
            path = document.getElementById('image2').getAttribute('src');
            break;
        case 2 :
            path = document.getElementById('image3').getAttribute('src');
            break;
        case 3:
            path = document.getElementById('image4').getAttribute('src');
            break;

    }
}

function start() {
    var playerName = document.getElementById("namInput").value;
    // console.log(playerName);
    document.getElementById('molly').innerHTML = playerName;
    var x = imageControl;
    var mod = x % 4;
    //console.log(mod);
    switch (mod) {
        case 0 :
            path = document.getElementById("image1").getAttribute('src');
            break;
        case 1 :
            path = document.getElementById('image2').getAttribute('src');
            break;
        case 2 :
            path = document.getElementById('image3').getAttribute('src');
            break;
        case 3:
            path = document.getElementById('image4').getAttribute('src');
            break;

    }
    document.getElementById('myImg').src = path;
    document.getElementById("howToPlay").style.display = 'none';
    document.getElementById("card").style.display = 'block';
    document.getElementById('banner').style.zIndex = -2;
}

document.getElementById('nusret').addEventListener('click', nusretClick);
document.getElementById('yavuz').addEventListener('click', yavuzClick);
document.getElementById('mahmudiye').addEventListener('click', mahmudiyeClick);

function nusretClick() {
    nus++;
    return nus;
}

function yavuzClick() {
    yav++;
    //console.log(yav);
    return yav;
}

function mahmudiyeClick() {
    mah++;
    //console.log(yav);
    return mah;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function inferiorControl(shipname, c) {
    var counter = 0;
    var count = 0;

    if (shipname == 'mahmudiye') {
        var elem = document.getElementsByClassName('shot-square')[c];

        var colorField = window.getComputedStyle(elem, null).getPropertyValue("background-color");
        //console.log(colorField);
        var temp = colorField.substring(colorField.indexOf('(') + 1, colorField.indexOf(')'));
        var temp2 = temp.split(',', 3);
        console.log(temp2);
        var r = parseInt(temp2[0]);
        var g = parseInt(temp2[1]);
        var b = parseInt(temp2[2]);
        //console.log('a'+r);
        var hexColor = rgbToHex(r, g, b);
        //  console.log(hexColor);
        var compare1 = false;
        if (hexColor == '#2f4f4f') {
            //    console.log('satrue1');
            compare1 = true;
        }
        var elem = document.getElementsByClassName('shot-square')[c - 1];

        var colorField = window.getComputedStyle(elem, null).getPropertyValue("background-color");
        //console.log(colorField);
        var temp = colorField.substring(colorField.indexOf('(') + 1, colorField.indexOf(')'));
        var temp2 = temp.split(',', 3);
        //console.log(temp2);
        var r = parseInt(temp2[0]);
        var g = parseInt(temp2[1]);
        var b = parseInt(temp2[2]);
        //console.log('a'+r);
        var hexColor = rgbToHex(r, g, b);
        console.log(hexColor);
        var compare2 = false;
        if (hexColor == '#2f4f4f') {
            //  console.log('satrue');
            compare2 = true;
        }
        if (compare1 == true || compare2 == true) {
            return true;
        } else {
            return false;
        }
    } else {
        for (; c < 36; c += 6) {
            counter++;
            count = 0;
            if (shipname == 'nusret') {
                count = 4;
            } else if (shipname == 'yavuz') {
                count = 3;
            }

            if (counter < count) {
                var elem = document.getElementsByClassName('shot-square')[c];

                var colorField = window.getComputedStyle(elem, null).getPropertyValue("background-color");
                // console.log(colorField);
                var temp = colorField.substring(colorField.indexOf('(') + 1, colorField.indexOf(')'));
                var temp2 = temp.split(',', 3);
                //console.log(temp2);
                var r = parseInt(temp2[0]);
                var g = parseInt(temp2[1]);
                var b = parseInt(temp2[2]);
                //console.log('a'+r);
                var hexColor = rgbToHex(r, g, b);
                //console.log(hexColor);
                if (hexColor == '#2f4f4f') {
                    //        console.log('sa');
                    return true;
                }

            }


        }
    }

}


function mouseOver(i) { //placeNusret
    if (nus % 2 == 0 && i < 24 && nusretClickControl == 0) {
        var c = i;
        if (!inferiorControl('nusret', c)) {
            // console.log(nus);

            document.getElementsByClassName("shot-square")[i].style.backgroundColor = "red";
            document.getElementsByClassName("shot-square")[i + 6].style.backgroundColor = "red";
            document.getElementsByClassName("shot-square")[i + 12].style.backgroundColor = "red";
            document.getElementsByClassName("shot-square")[i].onclick = function () {
                fix(i)
            };

            function fix(i) {
                if (nusretClickControl == 0) {
                    nusretClickControl++;
                    document.getElementsByClassName("shot-square")[i].style.backgroundColor = "#2f4f4f";
                    document.getElementsByClassName("shot-square")[i + 6].style.backgroundColor = "#2f4f4f";
                    document.getElementsByClassName("shot-square")[i + 12].style.backgroundColor = "#2f4f4f";
                    corNusret = {q: i, w: i + 6, e: i + 12};
                    sendCoord++;
                    // $(document).ready(() => {
                    //
                    //     $.post("http://127.0.0.1:8000/coord",{coordNusret:JSON.stringify(corNusret)}, function (data) {
                    //             console.log(data);
                    //         });
                    //
                    // });
                    nus++;
                    document.getElementById('nusret').style.visibility = 'hidden';
                }
            }
        }
    } else if (yav % 2 == 0 && i < 30 && yavuzClickControl == 0) {
        var c = i;
        if (!inferiorControl('yavuz', c)) {
            document.getElementsByClassName("shot-square")[i].style.backgroundColor = "red";
            document.getElementsByClassName("shot-square")[i + 6].style.backgroundColor = "red";
            document.getElementsByClassName("shot-square")[i].onclick = function () {
                fix(i)
            };

            function fix(i) {
                if (yavuzClickControl == 0) {
                    yavuzClickControl++;
                    document.getElementsByClassName("shot-square")[i].style.backgroundColor = "#2f4f4f";
                    document.getElementsByClassName("shot-square")[i + 6].style.backgroundColor = "#2f4f4f";
                    corYavuz = {a: i, s: i + 6};
                    sendCoord++;
                    // $(document).ready(() => {
                    //
                    //     $.post("http://127.0.0.1:8000/coord",{coordYavuz:JSON.stringify(corYavuz)}, function (data) {
                    //         console.log(data);
                    //     });
                    //
                    // });
                    yav++;
                    document.getElementById('yavuz').style.visibility = 'hidden';
                }
            }
        }
    } else if (i != 6 && i != 0 && i != 12 && i != 18 && i != 24 && i != 30 && mah % 2 == 0 && mahmudiyeClickControl == 0) {
        var c = i;
        if (!inferiorControl('mahmudiye', c)) {
            document.getElementsByClassName("shot-square")[i].style.backgroundColor = "red";
            document.getElementsByClassName("shot-square")[i - 1].style.backgroundColor = "red";
            document.getElementsByClassName("shot-square")[i].onclick = function () {
                fix(i)
            };

            function fix(i) {
                if (mahmudiyeClickControl == 0) {
                    mahmudiyeClickControl++;
                    document.getElementsByClassName("shot-square")[i].style.backgroundColor = "#2f4f4f";
                    document.getElementsByClassName("shot-square")[i - 1].style.backgroundColor = "#2f4f4f";
                    corMahmudiye = {z: i, x: i - 1};
                    sendCoord++;
                    if (sendCoord == 3) {
                        $.extend(true, corNusret, corYavuz, corMahmudiye);
                        $(document).ready(() => {

                            $.post("http://127.0.0.1:8000/coord", {coord: JSON.stringify(corNusret)}, function (data) {
                                console.log(data);

                            });
                            // $.post("http://127.0.0.1:8000/pullImage", function (data) {
                            //     console.log(data);
                            //     document.getElementById('enemyImage').src=data;
                            // });

                            // $.ajax({
                            //     url: "pullImage/",
                            //     type: 'GET',
                            //     dataType: "json",
                            //     success: (data) => {
                            //         //console.log('sa');
                            //         console.log(data);
                            //         data=JSON.stringify(data);
                            //         document.getElementById('enemyImage').src=data;
                            //     }
                            // });
                        });

                    }
                    // $(document).ready(() => {
                    //
                    //     $.post("http://127.0.0.1:8000/coord",{coordMahmudiye:JSON.stringify(corMahmudiye)}, function (data) {
                    //         console.log(data);
                    //     });
                    //
                    // });
                    //      console.log(corMahmudiye);
                    mah++;
                    document.getElementById('mahmudiye').style.visibility = 'hidden';
                }
            }
        }

    }
}

function mouseDown(i) {
    var c = i;
    if (nus % 2 == 0 && i < 24) {
        if (nusretClickControl % 2 == 0) {
            //  console.log(nus + "sa" + yav );
            if (!inferiorControl('nusret', c)) {
                document.getElementsByClassName("shot-square")[i].style.backgroundColor = "#0c85d0";
                document.getElementsByClassName("shot-square")[i + 6].style.backgroundColor = "#0c85d0";
                document.getElementsByClassName("shot-square")[i + 12].style.backgroundColor = "#0c85d0";
            }
        }
    } else if (yav % 2 == 0 && i < 30) {
        var c = i;
        //console.log(yavuzClickControl+"sa");
        if (yavuzClickControl % 2 == 0) {
            //  console.log(nus + "sa" + yav  + "avuz");
            if (!inferiorControl('yavuz', c)) {
                document.getElementsByClassName("shot-square")[i].style.backgroundColor = "#0c85d0";
                document.getElementsByClassName("shot-square")[i + 6].style.backgroundColor = "#0c85d0";
            }
        }
    } else if (mah % 2 == 0 && i != 6 && i != 0 && i != 12 && i != 18 && i != 24 && i != 30) {
        var c = i;
        // console.log(yavuzClickControl+"sa");
        if (mahmudiyeClickControl % 2 == 0) {
            //   console.log(nus + "sa" + yav  + "avuz");
            if (!inferiorControl('mahmudiye', c)) {
                document.getElementsByClassName("shot-square")[i].style.backgroundColor = "#0c85d0";
                document.getElementsByClassName("shot-square")[i - 1].style.backgroundColor = "#0c85d0";
            }
        }
    }
}

// function enemyShips() {
//     var enemyCoord1 = Math.floor(Math.random() * 24);
//     enemy1 = {x: enemyCoord1, y: enemyCoord1 + 6, z: enemyCoord1 + 12};
//     console.log(enemy1);
//     var enemyCoord2 = Math.floor(Math.random() * 30);
//     for (f in enemy1) {
//         if (enemy1[f] == enemyCoord2) {
//             console.log('enemy1if');
//             if (enemyCoord2 % 5 == 0) {
//                 enemyCoord2--;
//                 enemy2 = {x: enemyCoord2, y: enemyCoord2 + 6};
//                 console.log(enemy2);
//             } else {
//                 enemyCoord2++;
//                 enemy2 = {x: enemyCoord2, y: enemyCoord2 + 6};
//                 console.log(enemy2);
//             }
//         } else {
//             enemy2 = {x: enemyCoord2, y: enemyCoord2 + 6};
//             console.log(enemy2);
//             break;
//         }
//     }
//     var enemyCoord3 = Math.floor(Math.random() * 36);
//
//     if (enemyCoord3 % 6 == 0) {
//
//         enemy3 = {x: enemyCoord3 + 1, y: enemyCoord3};
//         console.log(enemy3);
//     } else {
//         enemy3 = {x: enemyCoord3, y: enemyCoord3 + 1};
//         console.log(enemy3);
//     }
// }

function attack(i) {

    $.post("http://127.0.0.1:8000/atack", {input: i}, function (data) {
        if (data) {

        }
    })
}

// setTimeout(pcAttack,2000);

//  for (f in enemy1){
//      if(enemy1[f]+36==i){
//          //shot
//          console.log('girdi'+i);
//          document.getElementsByClassName('shot-square')[i].style.backgroundImage="url('img/flame.png')";
//          entireNusret++;
//          remainShip--;
//          hitShip++;
//          document.getElementById('hit').innerHTML=hitShip;
//          document.getElementById('remain').innerHTML=remainShip;
//
//          if(entireNusret>2){
//              document.getElementsByClassName('shot-square')[enemy1.x+36].style.backgroundColor="white";
//              document.getElementsByClassName('shot-square')[enemy1.y+36].style.backgroundColor="white";
//              document.getElementsByClassName('shot-square')[enemy1.z+36].style.backgroundColor="white";
//          }
//          return ;
//      }
//      else {
//          document.getElementsByClassName('shot-square')[i].style.backgroundImage="url('img/nusret.png')";
//
//      }
//  }
//  for(g in enemy2){
//      if (enemy2[g]+36==i) {
//          document.getElementsByClassName('shot-square')[i].style.backgroundImage="url('img/flame.png')";
//          entireYavuz++;
//          remainShip--;
//          hitShip++;
//          document.getElementById('hit').innerHTML=hitShip;
//          document.getElementById('remain').innerHTML=remainShip;
//          if(entireYavuz>1){
//              document.getElementsByClassName('shot-square')[enemy2.x+36].style.backgroundColor='white';
//              document.getElementsByClassName('shot-square')[enemy2.y+36].style.backgroundColor='white';
//          }
//          return ;
//      }
//      else{
//          document.getElementsByClassName('shot-square')[i].style.backgroundImage="url('img/nusret.png')";
//
//      }
//  }
//  for(h in enemy3){
//      if (enemy3[h]+36==i) {
//          document.getElementsByClassName('shot-square')[i].style.backgroundImage="url('img/flame.png')";
//          entireMahmudiye++;
//          remainShip--;
//          hitShip++;
//          document.getElementById('hit').innerHTML=hitShip;
//          document.getElementById('remain').innerHTML=remainShip;
//          if(entireMahmudiye>1){
//              document.getElementsByClassName('shot-square')[enemy3.x+36].style.backgroundColor='white';
//              document.getElementsByClassName('shot-square')[enemy3.y+36].style.backgroundColor='white';
//
//          }
//          return ;
//      } else{
//          document.getElementsByClassName('shot-square')[i].style.backgroundImage="url('img/nusret.png')";
//
//      }
//  }
//  if(hitShip==7){
//      alert('Victory');
//  }
//  setTimeout(function (){pcAttack()},1000);
//  console.log(enemyShots.length);


// function pcAttack(){
//     var equal=0;
//     var pcShot = Math.floor(Math.random() * 36);
//   //  document.getElementsByClassName('shot-square')[pcShot].style.backgroundColor='yellow';
//
// }
//CountDown
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (seconds == 0 && minutes == 0) {
            //console.log('girdi');
            return;
        }
        if (--timer < 0) {
            timer = duration;

        }

    }, 1000);
    var handle = setInterval(function () {
        var fiveMinutes = 60 * 5,
            display = $('#time');
        startTimer(fiveMinutes, display)
        socket.on("ismatch", (msg) => {
            if(msg=='match')
                start();
                clearInterval(handle);
        });
    }, 10000)

}

//JQUERY AJAX
$(document).ready(() => {
    $('#createId').click(() => {
        let socket = io.connect("http://localhost:3333/creat");
        socket.on("uniqeId", (msg) => {
            idControl=msg;
            console.log('UniqeId ', msg);
            $('#status').html(msg);
        });
    });
});

$(document).ready(() => {
    var input;
    $('#searchId').click(() => {
        input = $('#search').val();
        let socket = io.connect("http://localhost:3333/search");
        socket.emit('searchId',input);
        socket.on('searchId',function (data) {
            if(data=="okey"){
                start();
            }else {
                console.log('Dont Match');
            }
        })
    });
});
document.getElementById('searchId').addEventListener('click', function () {
    document.getElementById('status').style.visibility = 'hidden';
    document.getElementById('test').style.visibility = 'visible';
});
document.getElementById('createId').addEventListener('click', function () {

    var fiveMinutes = 60 * 1;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

    document.getElementById('test').style.visibility = 'hidden';
});

//Fomantic UI

var t = 0;
$('.ui.teal.button').click(function () {
    $('.ui.modal').modal('show');
});
