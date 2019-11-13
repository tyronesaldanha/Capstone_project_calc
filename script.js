var input=document.getElementById("input");
var result=document.getElementById("result");
var key=document.getElementsByClassName("button_section").addEventListener('click',keyPress);

function keyPress(event)
{
    //Do nothing as field empty and any operators or element other than button is touched
    if(['+','-','/','AC','C','X','%','='].includes(event.target.innerHTML)&&input.value==="" || event.target.tagName!='BUTTON')
    {return;}

    //Number key press
    //if(){}
}