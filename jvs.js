function calc() {
    var firstnum  = Number(document.getElementById("firstnum").value);
    var secondnum = Number(document.getElementById("secondnum").value);
    var op        = document.getElementById("oper");
    var operator  = op.options[op.selectedIndex].text;
    var result    = 0;
        if(operator == "+")
        {
            result = firstnum+secondnum;
        }
        else if(operator == "-")
        {
            result = firstnum-secondnum;
        }
        else if(operator == "*")
        {
            result = firstnum*secondnum;
        }
        else
        {
            result = firstnum/secondnum;
        }
    document.getElementById("result").value=result;
    return false

}

function AC() {
    document.getElementById("firstnum").value="";
    document.getElementById("secondnum").value="";
    document.getElementById("result").value="";
   
}