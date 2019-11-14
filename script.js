var input=document.getElementById("input");
var result=document.getElementById("result");
var key=document.querySelector('.button_section').addEventListener('click',keyPress)
var operators=['+','-','/','AC','C','X','%','='];
var numbers=['0','1','2','3','4','5','6','7','8','9'];
input.value="";
function keyPress(event)
{
    //Do nothing as field empty and any operators or element other than button is touched
    if(operators.includes(event.target.innerHTML)&&input.value==="" || event.target.tagName!='BUTTON'||"AC"===event.target.innerHTML)
    {input.value="";}

    //back to back Number key press
    if(numbers.includes(event.target.innerHTML)&&input.value===""||numbers.includes(event.target.innerHTML)&&input.value!='')
    {
        //console.log(event.target.innerHTML);
        input.value=input.value+event.target.innerHTML;
    }
    //Number and operator key press
    else if(input.value!=''&&operators.includes(event.target.innerHTML)&&"AC"!=event.target.innerHTML&&"="!=event.target.innerHTML)
    {
        input.value=input.value+event.target.innerHTML;
        console.log(input.value)
        while(numbers.includes(input.value[input.value.length - 1]) && operators.includes(input.value[input.value.length - 2]))
        {
            //result.innerHTML=eval('input.value');
            console.log('aint printing');
        }
    }
    else (console.log("some issue in code"))
}