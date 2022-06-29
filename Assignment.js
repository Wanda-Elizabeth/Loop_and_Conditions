function multiples(){
    for (i=1;i<=100;i++){
        if (i%3==0 && i%5==0){
            console.log("FizzBuzz")
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else
        console.log(i)
    }
}
multiples()

function addition(){
    let sum=0
    for(a=1;a<1000;a++){
        if(a%3==0 && a%5==0){
            sum+=a  
        }
    }
    console.log(sum)
}
addition()


function oddeven(){
    for(t=0;t<=20;t++){
        if(t%2==0){
            console.log(t,"is even")
        }
        else
        console.log(t,"is odd")
    }
}
oddeven()

let num = [-2, 4,-5, 6,0]
largest=0
for (x=0;x<=num.length;x++){
    if(num[x]>largest){
        largest=num[x]
    }
}
console.log(largest)


let d=10;
let y=40;
if(d>y){
    console.log(d)
}
else
console.log(y)

function leapyear(){
    for(y=2000;y<=2022;y++){
        if(y%4==0 && y%100!=0 || y%400==0 ){
            console.log(y,"it is a leap year")
        }
    }
}
leapyear()