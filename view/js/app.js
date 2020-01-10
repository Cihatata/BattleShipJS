var uniqGameId = "";
var socket = "";
//Semantic UI
$('#playGame').click(function()  {
    $('.ui.thin.modal')
        .modal('show')
;
})
$('#nextImage').click(function () {
    console.log('girdi/')
    $('.shape').shape('flip right');
});

$('#createGame').click( ()=> {
   //const socket=io.connect('http://localhost:3000');
    $.get("http://127.0.0.1:3000/create",  function (data) {
        if (data) {
            uniqGameId=data.id;
            console.log(data)
            console.log( JSON.stringify(data.id));
            console.log( JSON.stringify(data.link));
            var fiveMinutes = 60 * 1
            display = document.querySelector('#time');
            startTimer(fiveMinutes, display);

        }

    })

})
$('#findGame').click(()=>{
    $('#inputOrId').hide();
})
$('#findButton').click( ()=>{
   let idSearch= $('#idInput').val();
   $.post('http://localhost:3000/search',{gameid: idSearch},(data)=>{
       console.log(data);
       $.get('http://localhost:3000/game' + data,(veri)=>{
           socket = io.connect('http://localhost:3000')
       })
   })

});

function startTimer(duration, display) {
    console.log(duration)
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
    let handle = setInterval(()=>{
        $.post('http://localhost:3000/control',{gameid: uniqGameId }, (data)=>{
            if (data){
                // $.post('http://localhost:3000/game/' + data, (response)=>{
                //
                // })
                window.location.replace('http://localhost:3000/game/' + data)
            }
        })
    }, 10000)

}
    // var handle = setInterval(function () {
    //     var fiveMinutes = 60 * 1,
    //         display = $('#time');
    //     startTimer(fiveMinutes, display)
    //     socket.on("ismatch", (msg) => {
    //         if(msg=='match')
    //             start();
    //         clearInterval(handle);
    //     });
    // }, 10000)



