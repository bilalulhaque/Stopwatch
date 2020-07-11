var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;

function timer(){
    msec++;
    if(msec<=9){
        msecHeading.innerHTML='0'+msec;
    }
    else{
        msecHeading.innerHTML=msec;
    }
	if(msec>=100){
        sec++;
        if(sec<=9){
            secHeading.innerHTML='0'+sec;
        }
        else{
            secHeading.innerHTML=sec;
        }
		msec=0;
	}else if(sec>=60){
        min++;
        if(min<=9){
            minHeading.innerHTML='0'+min;
        }
        else{
            minHeading.innerHTML=min;
        }
		sec=0;
    }
}

function start(){
    interval=setInterval(timer,10)
    document.getElementById("start").disabled=true;
}

function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled=false;
}

function reset(){
	min=0+'0';
	sec=0+'0';
	msec=0+'0';
	minHeading.innerHTML=min;
	secHeading.innerHTML=sec;
	msecHeading.innerHTML=msec;
    stop();
}

