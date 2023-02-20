// <script type="text/javascript">
var sec = 1800;
var min = Math.floor(sec / 60);
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.querySelector('#time').innerHTML = min + " left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
        ques_display='score: <span id = "score" >'+localStorage.getItem("score")+'</span>'
        document.querySelector("#questions").innerHTML=ques_display
        // alert("Time out!! :(");
    }
}

var c=0;
function test2()
{

if(document.getElementById('va1').checked)
{
c+=1;
}
 if(document.getElementById('va2').checked)
{
c+=1;
}
 if(document.getElementById('va3').checked)
{
c+=1;
}
 if(document.getElementById('va4').checked)
{
c+=1;
}
 if(document.getElementById('va5').checked)
{
c+=1;
}
if(document.getElementById('va6').checked)
{
c+=1;
}
if(document.getElementById('va7').checked)
{
c+=1;
}
if(document.getElementById('va8').checked)
{
c+=1;
}
if(document.getElementById('va9').checked)
{
c+=1;
}
if(document.getElementById('va10').checked)
{
c+=1;
}
if(document.getElementById('va11').checked)
{
c+=1;
}
if(document.getElementById('va12').checked)
{
c+=1;
}
if(document.getElementById('va13').checked)
{
c+=1;
}
if(document.getElementById('va14').checked)
{
c+=1;
}
if(document.getElementById('va15').checked)
{
c+=1;
}
if(document.getElementById('va16').checked)
{
c+=1;
}
if(document.getElementById('va17').checked)
{
c+=1;
}
if(document.getElementById('va18').checked)
{
c+=1;
}
if(document.getElementById('va19').checked)
{
c+=1;
}
if(document.getElementById('va20').checked)
{
c+=1;
}

console.log(c)
localStorage.setItem("c",c)
}
var d=0
function test3(){
if(document.getElementById('va21').checked)
{
d+=1;
}
if(document.getElementById('va22').checked)
{
d+=1;
}
if(document.getElementById('va23').checked)
{
d+=1;
}
if(document.getElementById('va24').checked)
{
d+=1;
}
if(document.getElementById('va25').checked)
{
d+=1;
}
if(document.getElementById('va26').checked)
{
d+=1;
}
if(document.getElementById('va27').checked)
{
d+=1;
}
if(document.getElementById('va28').checked)
{
d+=1;
}
if(document.getElementById('va29').checked)
{
d+=1;
}
if(document.getElementById('va30').checked)
{
d+=1;
}
if(document.getElementById('va31').checked)
{
d+=1;
}
if(document.getElementById('va32').checked)
{
d+=1;
}
if(document.getElementById('va33').checked)
{
d+=1;
}
if(document.getElementById('va34').checked)
{
d+=1;
}
if(document.getElementById('va35').checked)
{
d+=1;
}
if(document.getElementById('va36').checked)
{
d+=1;
}
if(document.getElementById('va37').checked)
{
d+=1;
}
if(document.getElementById('va38').checked)
{
d+=1;
}
if(document.getElementById('va39').checked)
{
d+=1;
}
if(document.getElementById('va40').checked)
{
d+=1;
}
console.log(d)
// var a=c+d;
// console.log(a)
localStorage.setItem("d",d)
a=parseInt(localStorage.getItem("c"))
b=parseInt(localStorage.getItem("d"))
	sum=a+b
// console.log(Number(localStorage.getItem("c"))+d)
if(sum<20)
document.write("your score is:"+sum +" "+"The minimum score to pass is 20 .Better luck next time");
else
document.write("your score is:"+sum +" "+"Congratulations! You have cleared section A and B.You are now eligible for section C");
}

// </script>