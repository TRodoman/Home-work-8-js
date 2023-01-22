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
  let g = document.getElementById("canv").getContext("2d");

  g.translate(40, 40);

  for (let i = 0; i < 10; i++) {
    g.save();
    for (let j = 0; j < 10; j++) {
      g.fillStyle = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`;

      g.beginPath();
      g.arc(10, 10, 20, 0, Math.PI * 2, true);
      g.closePath();
      g.fill();
      g.translate(40, 0);
    }
    g.restore();
    g.translate(0, 40);
  }
  document.getElementById('canv').onclick = function() {
    let node = document.querySelector('canvas');
    node.parentNode.removeChild(node);
  }
}

