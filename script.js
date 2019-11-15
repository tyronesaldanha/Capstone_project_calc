var input=document.getElementById("input");
var result=document.getElementById("result");
var key=document.querySelector('.button_section').addEventListener('click',keyPress)
var operators=['+','-','/','AC','C','X','%','='];
var numbers=['0','1','2','3','4','5','6','7','8','9','.'];

function keyPress(event)
{
    var btnPress=event.target.innerHTML;
    //Do nothing as field empty and any operators or element other than button is touched
    if(['/','X','+'].includes(btnPress)&&input.value==="" || event.target.tagName!='BUTTON'||"AC"===btnPress)
    {
        input.value="";
        result.innerHTML="";
    }

    if(btnPress != 'C' && btnPress != '=' && btnPress != 'AC')
    {
        if(operators.includes(btnPress) && operators.includes(input.value[input.value.length - 1]))
        {//Changes operator to another if no number after
            input.value = input.value.substring(0, input.value.length - 1) + btnPress;
        }
        else
        {
            input.value=input.value+btnPress;
        }
        eval_expr();
    }
    else if(btnPress==="C")
    {//backspacing input
        input.value=input.value.substring(0,input.value.length - 1);
        eval_expr();
    }
    else if(btnPress==='=')
    {
        input.value=result.innerHTML;
        result.innerHTML="";
    }
}

function eval_expr()
{
    try
    {//regular expression used as eval has issue with X as multiply 
        result.innerHTML = eval(input.value.replace(/X/g,'*'));
        if(result.innerHTML==input.value)
        {//blanks out result field if u type a number and press =
            result.innerHTML="";
        }
    }
    catch(err)
    {
        if(eval(input.value.substring(0, input.value.length - 1).replace(/X/g,'*')) == input.value.substring(0, input.value.length - 1))
        {
            result.innerHTML = "";
        }
    }
    if(input.value.length*80 > window.screen.width){
        input.style.fontSize = "10vh"; 
    }
    else{
        input.style.fontSize = "20vh"; 
    }
    input.focus();
}