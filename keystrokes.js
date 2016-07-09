var keycomb=document.querySelector('#keyoptions');
function keystrokeFn()
{
document.querySelector('#maindoc').style.opacity='0.04';

keycomb.style.visibility="visible";
}

var clBtn=document.querySelector('#closebtn')

clBtn.onclick=function(){
document.querySelector('#maindoc').style.opacity='1.0';
document.querySelector('#keyoptions').style.visibility="hidden";

}

clBtn.onmouseover=function(){
  clBtn.style.opacity='1';
}

clBtn.onmouseout=function(){
  clBtn.style.opacity='0.8'
}
