// const pi=3.14;
// let r=2;
// let area=pi*r*r;
// console.log(area);

// let a = parseInt(prompt("Enter first number"))
// let b = parseInt(prompt("Enter second number"))
// console.log(a+b)

                                                                        // swapping

// let a= parseInt(prompt("Enter first number"))
// let b= parseInt(prompt("Enter second  number"))
// let temp = a;
// temp=a;
// a = b;
// b= temp;
// console.log(a);
// console.log(b);
                                                                // positive and negative


// let a=parseInt(prompt("Enter a number"))
// if(a>0){
//     console.log("no. is +ve")
// }
// else{
//     console.log("no. is -ve")
// }

                                                                      // even and odd

// let a=parseInt(prompt("enter a number"))
// if(a%2==0){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }

                                                           //ladder if else
                                                                   

// let a= parseInt(prompt("enter amount"))
// if(a>100 && a<=500){
//     console.log("Toffee")
// }
// else if(a>501 && a<900){
//     console.log("Gift")
// }
// else if(a>901 && a<2000){
//     console.log("film")
// }
// else{
//     console.log("ghar pe raho")
// }
                                                                // age input 

// let age= parseInt(prompt("enter your age"))

// if(age>=18){
//    let inn = parseInt(prompt("press 1 for indian"))
//    if(inn==1){
//     alert("eligible")
//    }
//    else{
//     alert("not eligible")
//    }
// }
// else{
//     alert("underage")
// }

                                                                //function
// function fun(){
//     alert("function is working")
// }

// fun()

// function fun(){  // function declaration 
//     let a= 90
//     let b=90                          // function defination
//     console.log(a+b)
// }

// fun() // function calling



                                             // types of user defined functions
                              //without parameters and no return value
// function fun(){
//     const a =parseInt(prompt("Enter first no."))
//     const b =parseInt(prompt("Enter second no.")) 
// }
// fun()

                                //without parameters and with return value

// function king(){
//     const a =parseInt(prompt("Enter 1st no."))
//     const b =parseInt(prompt("Enter 2nd no."))

//     return a+b;
// }
// let c= king()
// alert(c)

                            // with parameter and with return value

// function boss(a){
//     return a*a
// }
// let c= boss(2)
// console.log(c+5)


                                                //DOM

// let a = document.getElementById("marv")
// // console.log(a)
// a.innerHTML="iron man"

// let b= document.getElementById("run")
// b.innerHTML="<h1>go to gym to get fit</h1>"

                                            //get element by class
                            
// let b = document.getElementsByClassName("head2")
// b[2].innerHTML="cloud"
// b[2].style.backgroundColor="yellow"

//                                             //get element by class

// let c = document.getElementsByTagName("li")
// c[2].innerHTML="out"

                                        // list even odd change 
// let d = ['home','home', 'home', 'home', 'home','home','home', 'home', 'home','home']
// let list = document.getElementsByTagName('li')

// for(let i=0; i<10 ; i++){
//     if(i%2!=0){ 
//         list[i].style.backgroundColor ="red"
//     }
// }
                          
                                        //img change using javascript

// let im = document.getElementById("im")
// im.src= "ai-generated-8771567_1920.jpg"

                                    //styling using css in javascript
// let r = document.getElementById('king')
// r.style.backgroundColor = "red"
// r.style.color = "white"
// r.style.textAlign = "center"

// let b= document.body
// console.log(b);

// let c= document.head
// console.log(c)

let newEl = document.createElement('h1')
console.log(newEl);

let newText = document.createTextNode('king')
console.log(newText);

newEl.appendChild(newText)
console.log(newEl)

let di = document.getElementById('main')
di.appendChild(newEl)

let newEl2 = document.createElement('p')
console.log(newEl2);

let newText2 = document.createTextNode('hiiii.....!!!!!!')
console.log(newText2)

newEl2.appendChild(newText2)
console.log(newEl2)

let a = document.body
a.appendChild(newEl2)

newEl2.style.backgroundColor = 'blue'
