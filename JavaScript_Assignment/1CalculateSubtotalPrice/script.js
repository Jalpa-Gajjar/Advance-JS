let remove = document.getElementById('remove');
let tr1 = document.getElementById('tr1');
let tr2 = document.getElementById('tr2');
var tprice=document.querySelectorAll(".tprice");
var inp=document.querySelectorAll(".inp");
var curPrice=document.querySelectorAll(".curPrice");
var total=document.querySelector('.total');

let cprice=parseFloat(curPrice[0].innerHTML);
quntity=parseFloat(inp[0].value);
tprice[0].innerHTML=(quntity)* (cprice);

cprice=parseFloat(curPrice[1].innerHTML);
quntity=parseFloat(inp[1].value);
tprice[1].innerHTML=(quntity)* (cprice);

x=parseFloat(tprice[0].innerHTML);
y=parseFloat(tprice[1].innerHTML);
a=x+y;
total.innerHTML=`${a}`;
console.log( );
function remove(item) {
    item.style.display = 'none';
}