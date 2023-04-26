let text;
let height = prompt("Enter your height in cm");
let weight= prompt("Enter weight in kilograms")
let age=prompt("Enter your age ")
let hi=parseFloat(height)
let wi=parseFloat(weight)
let calc=66.5 + 13.8 * (wi) + 5 * (weight) / 6.8 * age
let p1="Calories needed to be consumed each day "+parseInt(calc)
alert(p1)
let i=7700;
let val=prompt("You want to loose weight or gain weight or exit")
if(val=="loose" || val=="Loose"){
    let l= prompt("how much weight you want to loose")
    let mid= (parseInt(l)*7700)
    let ans=7*calc-mid;
    let l2=parseInt((ans)/7)+" calories must be consumed each day for a week to acheive the weight loss"
    alert(l2)
}
else if(val=="gain" || val=="Gain"){
    let l= prompt("how much weight you want to gain")
    let mid= (parseInt(l)*7700)
    let ans=7*calc+mid;
    let a2=parseInt((ans)/7)+" calories must be consumed each day for a week to acheive the weight gain"
    alert(a2)
}
else{
    alert("thanks for choosing health plus you may now click ok to exit")
}

