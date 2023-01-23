// Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
//  При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло".
//  Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинен бути
//  створений і доданий на сторінку за допомогою Javascript
//  При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола.

// function foo1() {
//     alert(`Рисуем круг диаметром ${document.querySelector("input").value}`);

//     let rad = document.querySelector("input").value;

//     let canvas = document.getElementById('circle');

//     let ctx = canvas.getContext('2d');

//     ctx.fillStyle = 'red';

//     ctx.beginPath();

//     ctx.arc(200, 200, rad, 0, Math.PI*2, true);

//     ctx.fill()
// }

// ---------------------------------------------------------------------------------
//  При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл (10*10) випадкового кольору.
//  При натисканні на конкретне коло - це коло повинне зникати, при цьому порожнє місце заповнюватися,
//  тобто всі інші кола зрушуються вліво.


function foo2() {
  const circleClasses = document.querySelectorAll(".circle");
    circleClasses.forEach((el) => {
      el.style.background = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;
    
  });
      
      
  document.querySelector(".container").onclick = function () {

    let parent = document.querySelector('.circle-box');
    let elem = document.querySelector(".circle");

    parent.removeChild(elem);
  };
}