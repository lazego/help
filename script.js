// let a = 6;
// //>= больше или равно, как говорим так и пишем! => так будет ошибка. Равенсво проверяется так ==. Не равно !=
// if (a <= 9) {
//   //true
//   console.log("Yes");
// } else {
//   console.log("else");
// }
const button = document.querySelector("button"); //присваивание константе кнопку
const input = document.querySelector(".age"); //присваивание конст ввод возраста
// ()=> стрелочная функция, сокращение от function()
button.onclick = () => {
  let num = +input.value;
  if (num >= 16 && num < 60) {
    //&& оператор и от 16 и до 60.
    console.log("Welcome");
  } else if (num > 60 && num <= 65) {
    console.log("axaxaxa");
  } else if (num > 66) {
    console.log("lol");
  } else {
    console.log("Доступ запрещен");
  }

  //применяется если слишком много нужно веток
  switch (num) {
    case 15:
      console.log("Еще год потерпи");
      break;
    case 16:
      console.log("Ура, можно!");
    default:
      //Любое другое значение, которое не прописано в условии
      console.log("oook");
  }
};

let b = 10;
console.log(b >= 7 && b < 11); //&& -и ||-или

const b1 = document.querySelector(".b1");
const i1 = document.querySelector(".i1");
let outp = document.querySelector(".outp");
b1.onclick = () => {
  let inp = +i1.value;
  if (inp == 4) {
    document.querySelector(".outp").innerHTML = "true";
  } else {
    document.querySelector(".outp").innerHTML = "false";
  }
};

const b2 = document.querySelector(".b2");
let a21 = 5;
let a22 = 6;
b2.onclick = () => {
  if (a21 < a22) {
    document.querySelector(".outp2").innerHTML = a22;
  } else {
    document.querySelector(".outp2").innerHTML = a21;
  }
};

const a25 = document.querySelector(".a25");
const a23 = document.querySelector(".a23");
const a20 = document.querySelector(".a20");
const a24 = document.querySelector(".a24");
a24.onclick = () => {
  let inp3 = +a25.value;
  let inp4 = +a23.value;
  if (inp3 < inp4) {
    document.querySelector(".a24").innerHTML = inp4;
  } else {
    document.querySelector(".a24").innerHTML = inp3;
  }
};
