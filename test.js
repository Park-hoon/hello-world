var count = localStorage.getItem("count");
money();
document.getElementById("count+").addEventListener('click',addcounting);
document.getElementById("count-").addEventListener('click',subcounting);


if(typeof(count) === "object"){
    count = 0;
}

function addcounting(){
    count++;
    localStorage.setItem("count",count);
    nowcount();
}

function subcounting(){
    if(count>0){
    count--;
    localStorage.setItem("count",count);
    nowcount();
    }
    else{
        alert('0번째 입니다.');
    }
}

function money(){
    var money = 1200000;
    var moneydisplay = document.getElementById('display');
    for(var i = 1; i<7; i++){
        money = Math.ceil(money/2/10000)*10000;
        var count_money = document.createTextNode(i + "회째 : ");
        var nowmoney = document.createTextNode(money);
        var br = document.createElement('br');
        moneydisplay.appendChild(count_money);
        moneydisplay.appendChild(nowmoney);
        moneydisplay.appendChild(br);
    }
    moneydisplay.appendChild(document.createTextNode("7회 이후는 만원!"));
}
document.getElementById('nowcount').appendChild(document.createTextNode(count));


function nowcount(){
    document.getElementById('nowcount').innerHTML="";
    document.getElementById('nowcount').appendChild(document.createTextNode(count));
}
