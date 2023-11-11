function countDownDay(countdownTo){
        
    var today = new Date();
    var distance = countdownTo - today;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return (days);

}

function countDownTime(countdownTo){
    var today = new Date();
    var distance = countdownTo - today;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return (hours + " h "+ minutes + " m " + seconds + " s ");

}

var btn = document.getElementById('submit');
btn.addEventListener('click', func);

function func() {

    
    var ansday =  document.getElementById("day").value;
    var ansmonth =  document.getElementById("month").value;
    var ansyear =  document.getElementById("year").value;
    var date = ansyear + "-" + ansmonth + "-" + ansday;

    var countdownTo = new Date(date).getTime();

    let day = countDownDay(countdownTo);
    let time = countDownTime(countdownTo);
    document.getElementById("demo").innerHTML = day + "d " + time;  

   
}
