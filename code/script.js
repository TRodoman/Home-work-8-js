// Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
//  При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло".
//  Дана кнопка повинна бути єдиним контентом у тілі HTML документа, решта контенту повинен бути
//  створений і доданий на сторінку за допомогою Javascript
//  При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола.
//  При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл (10*10) випадкового кольору.
//  При натисканні на конкретне коло - це коло повинне зникати, при цьому порожнє місце заповнюватися,
//  тобто всі інші кола зрушуються вліво.

document.getElementById('circleStart').onclick = function () {
  
  document.body.innerHTML = '';
  
  const input = document.createElement('input');
  document.body.append(input);
  
  
  const button = document.createElement('button');
  button.innerHTML = 'Намалювати ';
  document.body.append(button);
  

  const container = document.createElement('div');
  document.body.append(container);
  
  
  button.onclick = function() {
    
    const diameter = input.value; 
    const containerWidth = diameter * 10;
    container.style.width = containerWidth + 'px';
    
    for(let i = 0; i < 100; i++) {
      renderCircle(container, diameter);
    }
  }
  
};

function renderCircle(container, diameter) {
    const circle = document.createElement('span');
    circle.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
    circle.style.width = diameter + 'px';
    circle.style.height = diameter + 'px';
    circle.style.display = 'inline-block';
    circle.style.borderRadius = '50%';
    container.append(circle);

    circle.onclick = function() {
        circle.remove();
    }
}

