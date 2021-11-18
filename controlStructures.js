//1-three vairiables
let num1=20;
let num2=8;
let num3=2;
//2-compares two values and display large number
if(num1>num2){
    console.log(num1)
}else{
    console.log(num2)
}
//3-display odd or even number
if(num1 % 2==0){
    console.log(num1 + " is even" )
}else{
    console.log(num1 + " is odd")
}
//4-sort from larger to smallest
if(num1>num2&&num1>num3 ){
    if(num2>num3){
        console.log(num1,num2,num3)
    }
    
}else if(num1>num3){
    console.log(num1)
}else if(num2>num3){
    console.log(num2)
}else{
    console.log(num3)
}
//5-
let amount=0;
if(amount==amount){
    console.log("psit")
}else if(amount===amount) {
    console.log("num")
}else{
    console.log(amount)
}
//6-langth username and password
let username="Mohammed"
let password="09334"
if(username.length>6 && password.length>=8){
console.log("login successful")
}else{
    console.log("login failed")
}

//7-display numbers by using for loop
for( let n=20;n>0;n){
    console.log(n)
}
//8-display numbers by using while loop
let m=0;
while(m<=20){
    console.log(m)
    m++;
}
//9-display all even numbers by using for loop
let a;
for(let evn=1;evn<20;evn++){
     if(evn %2 ==0)
     console.log(evn +" is even ")
     else{
        console.log(evn+" is odd ")
     }
    
}
//10-rang
//the task is hard ): or my mind is closed
let stRange=5;
let endRange=8;
let fulRange="";
for( stRange;stRange<=endRange;stRange++){
    fulRange+=stRange
}


//11- start task
for(i=0;i<5;i++){
    for(j=1;j<i;j++){
        console.log("*")
    }
}
