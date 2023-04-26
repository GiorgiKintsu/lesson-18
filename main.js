let a = prompt("პირველი რიცხვი");
let b = prompt("მეორე რიცხვლი");
let c = prompt("მესამე რიცხვლი");

// let a = 1;
// let b = 2;
// let c = 3;


if (a===b && b===c){
    console.log("სამივე რიცხვი ტოლია");
}else if(a >= b && a >= c){
    console.log(a, "a არის უდიდესი");
}else if(b >= a && b >= c){
    console.log(b, "b არის უდიდესი");
}else if (c >= a && c >= b) {
    console.log(c, "c არის უდიდესი");
}

if (a===b && b===c){
    console.log("");
}else if(a <= b && a <= c){
    console.log(a, "a არის უმცირესი");
}else if(b <= a && b <= c){
    console.log(b, "b არის უმცირესი");
}else if (c <= a && c <= b) {
    console.log(c, "c არის უმცირესი");
}


