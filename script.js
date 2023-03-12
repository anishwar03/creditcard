document.querySelector("button").onclick=function(){
    document.querySelector("#header").innerHTML="<img style='position:absolute;bottom:30vh'src='images/icon-complete.svg' >Thank you!<br><span style='color:hsl(279, 6%, 55%)';>'We've added your card details'</span> ";
document.querySelector("#header").style.textAlign="center";
document.querySelector("#header").style.padding="10% 10% ";
document.querySelector("#header").style.fontsize="20px";
};

cno.oninput=changeSpan;
function changeSpan(){
    result.innerHTML=cno.value;
}

//var input = document.getElementById("cno");

name1.oninput=changename;
function changename(){
    name2.innerHTML=name1.value;
}

expdate.oninput=changedate;
function changedate(){
    month.innerHTML=expdate.value;
    
}
year.oninput=changeyr;
function changeyr(){
    yr.innerHTML="/"+year.value;
    
}
cvc.oninput=changecv;
function changecv(){
    cv.innerHTML=cvc.value;
    
}
