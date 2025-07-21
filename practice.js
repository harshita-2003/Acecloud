//Basic JS Practice
var tweet = prompt("Enter the text")
alert("characters you have written" + tweet.length + ". Remaining characters : " + (140-tweet.length))



var name = prompt("Enter your name");
var start = name.slice(0,1)
var end = name.slice(1,name.length)

alert( "Hello " + start.toUpperCase() + end)




function getMilk(bottles) {
    alert("Bringing " + bottles + " bottles of milk")
}

getMilk(5)

console.log(Math.floor(1.6))







function getMilk(money) {
    var perbottleprice = 1.5
    var count = calBottles(money,perbottleprice);
    console.log("buy" + count + "bottles of milk")

    return rem(money,perbottleprice)
}

function calBottles(money, perbottleprice){
    return Math.floor(money/perbottleprice)
}

function rem(money, perbottleprice) {
    return money % perbottleprice
}

getMilk(5)







var n = Math.floor(Math.random()*10);
console.log(n)

prompt("1")
prompt ("2")
alert("love percentage is : " + Math.floor((Math.random()*1000 +1)))


ARRAYS
var arr = ["harshita","Annie","Frank","John"]
console.log(arr.includes("harshia"))

var outputs = [];
var count = 1
    
function fizzbuzz(){
    outputs.push(count);
    count++;
}
console.log(outputs)