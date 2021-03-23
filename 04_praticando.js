alert("Vamos Eliminar os Brothers");
alert("selecione os Brothersque você quer que fiquem na casa")

let p1 = "Juliete";
let p2 = "Caio";
let p3 = "Arthur";
let p4 = "Sarah";
let p5 = "Thais";
let p6 = "Vih tube";
let p7 = "Camila";
let p8 = "Carla";
let p9 = "Fiuk";
let p10 = "Gilberto";
let p11 = "João";
let p12 = "pocah";

const num1 = 1;
const num2 = 2;

let select = []


let res1 = prompt(Digite ${num1} para ${p1} ou ${num2} para ${p2})
if (res1 == num1) {
  alert(p1 + " foi escolhido")
  select.push(p1)
} else {
  alert(p2 + " foi escolhido")
  select.push(p2)
}
let res2 = prompt(Digite ${num1} para ${p3} ou ${num2} para ${p4})
if (res2 == num1) {
  alert(p3 + " foi escolhido")
  select.push(p3)
} else {
  alert(p4 + " foi escolhido")
  select.push(p4)
}
let res3 = prompt(Digite ${num1} para ${p5} ou ${num2} para ${p6})
if (res3 == num1) {
  alert(p5 + " foi escolhido")
  select.push(p5)
} else {
  alert(p6 + " foi escolhido")
  select.push(p6)
}
let res4 = prompt(Digite ${num1} para ${p7} ou ${num2} para ${p8})
if (res4 == num1) {
  alert(p7 + " foi escolhido")
  select.push(p7)
} else {
  alert(p8 + " foi escolhido")
  select.push(p8)
}
let res5 = prompt(Digite ${num1} para ${p9} ou ${num2} para ${p10})
if (res5 == num1) {
  alert(p9 + " foi escolhido")
  select.push(p9)
} else {
  alert(p10 + " foi escolhido")
  select.push(p10)
}
let res6 = prompt(Digite ${num1} para ${p11} ou ${num2} para ${p12})
if (res6 == num1) {
  alert(p11 + " foi escolhido")
  select.push(p11)
} else {
  alert(p12 + " foi escolhido")
  select.push(p12)
}
alert('os Brothers que ficaram foram: ' + select)
alert ('hora de selecionar os finalistas')
let finalistas = []

let res7 = prompt(Digite ${num1} para ${select[0]} ou ${num2} para ${select[1]})

if (res7 == num1) {
  alert (${select[0]} foi escolhido)
  finalistas.push(select[0])
} else {
  alert (${select[1]} foi escolhido)
  finalistas.push(select[1])
}
let res8 = prompt(Digite ${num1} para ${select[2]} ou ${num2} para${select[3]})

if (res8 == num1) {
  alert (${select[2]} foi escolhido)
  finalistas.push(select[2])
} else {
  alert (${select[3]} foi escolhido)
  finalistas.push(select[3])
}
let res9 = prompt(Digite ${num1} para ${select[4]} ou ${num2} para ${select[5]})

if (res9 == num1) {
  alert (${select[4]} foi escolhido)
  finalistas.push(select[4])
} else {
  alert (${select[5]} foi escolhido)
  finalistas.push(select[5])
}
alert(os finalistas são: ${finalistas})
let ganhador = prompt(Digite 1 para ${finalistas[0]}, digite 2 para ${finalistas[1]} ou digite 3 para ${
  finalistas[2]})
if (ganhador == 1) {
  ganhador = finalistas[0]
} else if (ganhador == 2) {
  ganhador = finalistas[1]
} else if (ganhador == 3) {
  ganhador = finalistas[2]
}
alert(O ganhador é ${ganhador})
