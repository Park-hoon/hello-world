var count = localStorage.getItem("count");
money();
document.getElementById("count+").addEventListener('click',addcounting);
document.getElementById("count-").addEventListener('click',subcounting);

//css 적용
var id;
makeid();
document.getElementById(id).style.display = 'block';

function makeid(){
    if(count < 7){
        id = count+'p';
    }
    else{
        id = "7p";
    }
}

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
}

function nowcount(){
    document.getElementById('nowcount').innerHTML="";
    document.getElementById('nowcount').appendChild(document.createTextNode(count));
    document.getElementById(id).style.display = 'none';
    makeid();
    document.getElementById(id).style.display = 'block';

}

//돈 출력
function money(){
    var money = 1200000;
    var moneydisplay = document.getElementById('display');
    for(var i = 1; i<7; i++){
        money = Math.ceil(money/2/10000)*10000;
        var p = document.createElement('p');
        p.setAttribute('id', i+'p');
        p.setAttribute('class', 'neon');
        var nowmoney = document.createTextNode(i + "회째 : " + money.toLocaleString() + '원');
        p.appendChild(nowmoney);
        moneydisplay.appendChild(p);
    }
    var p = document.createElement('p');
    var nowmoney = document.createTextNode("7회 이후는 만원!");
    p.setAttribute('id', '7p');
    p.setAttribute('class', 'neon');
    p.appendChild(nowmoney);
    moneydisplay.appendChild(p);
}
document.getElementById('nowcount').appendChild(document.createTextNode(count));
