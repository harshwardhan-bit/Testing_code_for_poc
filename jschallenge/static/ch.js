//java script
function ageInDays(){
    var birthyear = prompt("what year were you born...");
    var currentyear = prompt("what is the current year...");
    var result = (currentyear - birthyear)*365;
    var h1 = document.createElement('h1');
    var ans = document.createTextNode('you are'+' '+result+' '+'day old');
    h1.setAttribute('id', 'result');
    h1.appendChild(ans);
    document.getElementById('result').appendChild(h1);

}

function reset(){
    document.getElementById('result').remove();

}
