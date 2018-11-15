alert(document.head.innerHTML);

var variant = 4;
var elem = document.getElementById('list-header');
elem.innerHTML = '<b>' + elem.textContent + ' ' + variant + '</b>';

var name = "Anastasiia";
document.getElementsByTagName("li")[1].innerHTML = name;

document.getElementsByTagName("ul")[0].style.color = '#555';
