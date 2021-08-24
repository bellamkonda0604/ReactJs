function sum()
{
    var num1,num2,res;
    num1 = Number(document.container.id1.value);
    num2 = Number(document.container.id2.value);
    res = num1+num2;
    document.container.result.value = res;
}
function diff()
{
    var num1,num2,res;
    num1 = Number(document.container.id1.value);
    num2 = Number(document.container.id2.value);
    res = num1-num2;
    document.container.result.value = res;
}
function multiply()
{
    var num1,num2,res;
    num1 = Number(document.container.id1.value);
    num2 = Number(document.container.id2.value);
    res = num1*num2;
    document.container.result.value = res;
}
function divide()
{
    var num1,num2,res;
    num1 = Number(document.container.id1.value);
    num2 = Number(document.container.id2.value);
    res = num1/num2;
    document.container.result.value = res;
}