function times(){
    var checkTime = new Date();
    const hour =  checkTime.getHours();
    const min = checkTime.getMinutes();
    const sec = checkTime.getSeconds();
    
    
    document.getElementById("realTime").innerHTML = hour + " : " + min + " : " +sec;
    
    }
    
    setInterval(times,1000);