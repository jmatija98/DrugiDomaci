var endTime = new Date('September 21, 2020 23:59:00').getTime();

var x=setInterval(function(){
    var currentTime=new Date().getTime();
    var timeLeft = endTime - currentTime;
    var days = Math.floor(timeLeft/(1000*60*60*24));
    var hours = Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((timeLeft%(1000*60*60))/(1000*60));
    var seconds=Math.floor((timeLeft%(1000*60))/1000);
    document.getElementById("timer").innerHTML=+days+" dana: "+hours+" sati: "+minutes+" minuta: "+seconds+" sekundi do zatvaranja prijava";
},1000);