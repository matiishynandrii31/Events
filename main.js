// 1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних").
 // При натисканні alt + A, замість спана зявиться інпут з аналогічним текстом, який тепер ви зможете відредагувати. 
 // Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 
// 2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо 
//мобільну версію, при більшому розмірі сторінки - що ми використовуємо десктоп версію.
// 3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.
// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.

// 5. Створити модальне відкно аналог Алерта але з гарним дизайном. по кліку на кнопку зявляється модальне вікно по центрі 
//екрану(центрування елемента). В модальному вікні має бути текст та кнопка закрити.


//------1------

// let span = document.createElement("span");
// span.innerHTML = "Очікую на ввід даних" ;
// document.body.appendChild(span);
// document.addEventListener('keydown', function(event) {
// 	if (event.code == 'KeyA' && (event.altKey || event.metaKey)) {
// 		span.remove();
// 		span = document.createElement("input");
// 		span.value = "Очікую на ввід даних" ;
// 		document.body.appendChild(span);
//   	}
//   	else if (event.code == 'KeyS' && (event.shiftKey || event.metaKey)) {
// 			let input = document.querySelector("input");
// 			span = document.createElement("span");
// 			span.innerHTML = input.value;
// 			input.remove();
// 			document.body.appendChild(span);
// 		}
// })


//------2------

//  window.addEventListener("resize", () => {
// 	if (window.innerWidth > "600") {
// 		console.log("This is Desktop Version!!!");
// 	}
// 	else {
// 		console.log("This is Mobile Version!!!");
// 	}
// });

//------3------

// let input = document.createElement("input");
// document.body.appendChild(input);
// input.addEventListener('change', () => {
// 	console.log(input.value);
// });

//------4------



// let modalWindow = document.createElement("div");
// document.body.appendChild(modalWindow);
// modalWindow.id = 'myModal';
// let modalContent = document.createElement("div");
// modalWindow.appendChild(modalContent);

// modalWindow.style.cssText = 'display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 400px; background: #999;';

// modalContent.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 20px 50px 20px 20px; overflow: auto;';

// let modal = document.getElementById('myModal');

// document.addEventListener('keydown', function(event) {
// 	if (event.code == 'KeyO' && (event.altKey || event.metaKey)) {
// 		modal.style.display = 'block';
//   	}
//   	else if (event.code == 'KeyC' && (event.altKey || event.metaKey)) {
//   		modal.style.display = 'none';
// 	}
//  })

//------5------

// let modalWindow = document.createElement("div");
// document.body.appendChild(modalWindow);

// let modalContent = document.createElement("div");
// modalContent.innerHTML = 'This is modal window. Written by Andrii Matiishyn.'
// modalWindow.appendChild(modalContent);

// let btnClose = document.createElement("button");
// modalContent.appendChild(btnClose);
// btnClose.innerHTML = 'Close';

// let btnOpen = document.createElement("button");
// document.body.appendChild(btnOpen);
// btnOpen.innerHTML = 'Open';

// modalWindow.style.cssText = 'display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 400px; height: 200px; background: #5852cd;';

// modalContent.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; padding: 60px 50px 20px 20px;';

// btnClose.style.cssText = 'margin-top: 50px; height: 25px; width: 100px; border-radius: 25px; font-weight: bold; cursor: pointer; background: #0e0a5c; color: #fff';

// btnOpen.style.cssText = ' height: 25px; width: 100px; float: left; border-radius: 25px; font-weight: bold; cursor: pointer;';


// btnOpen.onclick = function () {
//     modalWindow.style.display = "block";
// }

// btnClose.onclick = function () {
// 	event.preventDefault();
//     modalWindow.style.display = "none"
// }