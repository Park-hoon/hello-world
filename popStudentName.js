document.getElementById("pop").addEventListener('click',callName);
document.getElementById("popRandom").addEventListener('click',randomStd);
document.getElementById("delPop").addEventListener('click',delPop);
document.getElementById("delPopRandom").addEventListener('click',delPopRandom);

var grade1 = {  
        1:"김가은, 김나윤, 김예원, 박주희, 박지후, 서현진, 이규린, 이주아, 전채희, 정지호, 최미래, 한유진, 홍은서, 공정우, 김경남, 김민재, 김예완, 김은찬, 김준서, 김태윤, , 박상혁, 박현우, 안연호, 유정훈, 이승범, 이혜성, 정승연, 조은성, 주보근, 최재민",
        2:"김가인, 김다인, 김하솜, 남서윤, 민서현, 박서은, 서예람, 성선명, 안예솔, 이지우, 정다인, 정은재, 황다경, 강현우, 곽준형, 김도훈, 김상원, 김재훈, 김준우, 노강현, 박준서, 박찬진, 유진호, 이도율, 이승범, 전새결, 정진호, 조정혁, 주용환, 최연호, 최현민",
        3:"강서현, 강태희, 권수민, 김희연, 류경담, 박다연, 서은영, 양혜원, 이하윤, 정지승, 차주은, 최윤정, 김관우, 김도은, , 김예준, 김정구, 김찬희, 박시윤, 박찬희, 신재하, 윤민준, 이문형, 이연후, 전세훈, 정민제, 조문찬, 조준상, 표승호, 홍수민, 황태영",
        4:"강승희, 길하경, 문채은, 박시은, 박지영, 여지연, 정서인, 정지연, 최가언, 한명희, 허수빈, 홍윤서, 김시온, 김용재, 김정훈, 김태겸, 나영채, 박민서, 박지윤, 박하랑, 서한결, 심민규, 윤서준, 이성찬, 이요셉, 이현승, 전준형, 조승현, 조현수, , "
        }
var grade3 = {
        2:"김민솔, 김지윤, 남다현, 신재희, 이가연, 이다솜, 이수현, 이유미, 전지수, 최보라, 최연정, 허주영, 황지영, 김권우, 김대연, 김시호, 박지승, 배효준, 송명우, 신민섭, 신상현, 윤예랑, 이민제, 이성민, 이재준, 이주표, 최소망",
        3:"고지원, 문수빈, 박소현, 변다혜, 신세미, 우정인, 이재이, 이주연, 정예린, 조혜빈, 최지우, 홍민서, 황다윤, 강원재, 권태윤, 김기연, 김석현, 김성호, 김해환, 김혜성, 나민서, 류주환, 양준규, 원승연, 윤성원, 은정원, 홍선기, 박시후"
}

function callName(){
    var classNum = document.getElementById("classNum").value;
    var stdNum = parseInt(document.getElementById("stdNum").value)-1;
    var grade = document.getElementById("grade").value;
    if(grade == 1){
        var std = grade1[classNum].split(", ");
    }
    else if(grade == 3){
        var std = grade3[classNum].split(", ");
    }
    console.log(std[stdNum]);
    if(std[stdNum] != undefined && std[stdNum] !=""){
        delPop();
        document.getElementById('display').append(std[stdNum]);
    }
}
function randomStd(){
    delPopRandom();
    var classNum = document.getElementById("classNum").value;
    var stdNum = Math.ceil(Math.random()*31);
    var grade = document.getElementById("grade").value;
    if(grade == 1){
        var std = grade1[classNum].split(", ");    
    }
    else if(grade == 3){
        var std = grade3[classNum].split(", ");
    }
    if(std[stdNum] !== undefined && std[stdNum] !=""){
        document.getElementById('randomDisplay').append(std[stdNum]);
    }else{
        randomStd()
    }
}
function delPop(){
    document.getElementById("display").innerHTML = ""
}
function delPopRandom(){
    document.getElementById("randomDisplay").innerHTML = ""
}
