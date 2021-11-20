$(document).ready(setup);
let id=0;
let count=0;
let score;
var name;
function setup(){
$('#button').show();
}

function start(){
id=1;
$('#button').hide();
$('#poem1').show();
$('#font1').hide();
$('#font2').hide();
$('#font3').hide();
$('#buttonAI').show();
$('#buttonHuman').show();
}

function buttonAI(){

id=id+1;
alert("Great you got it!");
if(id==2){

$('#poem1').hide();
$('#poem2').show();


}
else if(id==3){
$('#poem2').hide();
$('#poem3').show();

}

else{
$('#poem3').hide();
$('#lyrics').show();
}

if(id==5){
$('#lyrics').hide();
$('#buttonAI').hide();
$('#buttonHuman').hide();
displayScore();
}
}

function wrong(){
count=count+1;

alert("oops! You got the wrong one, try again!");
}


function displayScore(){
score=100-count*25;

$('#finaltext').text("Your Score:"+score);
$('#title').text("You see the difference now, dont you?");
}