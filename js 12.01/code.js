
// 2 1
// function changeSize() {
//     let elem = document.getElementById("elem");
//     elem.style.width = "400px";
//     elem.style.height = "300px";
// }

// 2 2
// function getDimensions() {
//     let elem = document.getElementById("elem");
//     let width = elem.offsetWidth;
//     let height = elem.offsetHeight;
//     alert("Ширина: " + width + ", Высота: " + height);
// }

// 2 3
// function getFontSize() {
//     let elem = document.getElementById("elem");
//     let fontSize = window.getComputedStyle(elem).getPropertyValue("font-size");
//     fontSize = parseFloat(fontSize);
//     alert("Размер шрифта: " + fontSize);
// }

// 3 1
// Ошибка в коде заключается в том, что свойство elem.style.fontSize возвращает строку, а не числовое значение. При попытке выполнить операцию сложения elem.style.fontSize + 2, происходит конкатенация строк, а не сложение чисел.
// Чтобы исправить ошибку, нужно преобразовать значение elem.style.fontSize из строки в число, выполнить операцию сложения и присвоить результат обратно свойству elem.style.fontSize.

// 3 2
// Ошибка в коде заключается в том, что свойство elem.style.fontSize возвращает строку, а не числовое значение. При попытке выполнить операцию сложения elem.style.fontSize + 2, происходит конкатенация строк, а не сложение чисел.
// Кроме того, в данном коде используется функция parseInt, которая преобразует строку в целое число. Однако, в данном случае, значение elem.style.fontSize уже является числом с единицами измерения (например, "16px"), поэтому использование parseInt не имеет смысла и может привести к некорректным результатам.
// Чтобы исправить ошибку, нужно выполнить следующие действия:
// 1. Извлечь числовое значение из строки elem.style.fontSize, удалив единицы измерения "px". Для этого можно использовать метод parseFloat.
// 2. Выполнить операцию сложения числа с 2.
// 3. Присвоить полученное значение обратно свойству elem.style.fontSize.

// 3 3
// Ошибка в коде заключается в том, что свойство elem.style.fontSize возвращает строку, а не числовое значение. При попытке выполнить операцию сложения parseInt(elem.style.fontSize) + 2, происходит конкатенация строк, а не сложение чисел.
// Кроме того, в данном коде используется функция parseInt, которая преобразует строку в целое число. Однако, в данном случае, значение elem.style.fontSize уже является числом с единицами измерения (например, "2.5em"), поэтому использование parseInt не имеет смысла и может привести к некорректным результатам.
// Чтобы исправить ошибку, нужно выполнить следующие действия:
// 1. Извлечь числовое значение из строки elem.style.fontSize, удалив единицы измерения "em". Для этого можно использовать метод parseFloat.
// 2. Выполнить операцию сложения числа с 2.
// 3. Присвоить полученное значение обратно свойству elem.style.fontSize.

// 3 4
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let width = parseInt(elem.style.width) + 50;
//     let height = parseInt(elem.style.height) + 50;
//     elem.style.width = width + 'px';
//     elem.style.height = height + 'px';
// });

// 3 5
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//   let width = parseInt(elem.style.width);
//   let height = parseInt(elem.style.height);
//   width *= 1.1;
//   height *= 1.1;
//   elem.style.width = width + 'px';
//   elem.style.height = height + 'px';
// });

// 4 1
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let borderStyle = elem.style.border;
//     let borderWidth = parseInt(elem.style.borderWidth);
//     let borderColor = elem.style.borderColor;
//     console.log('Толщина границы:', borderWidth);
//     console.log('Тип границы:', borderStyle);
//     console.log('Цвет границы:', borderColor);
// });

// 5 1
// let elem = document.getElementById('elem');
// let hideBtn = document.getElementById('hideBtn');
// let showBtn = document.getElementById('showBtn');
// hideBtn.addEventListener('click', function() {
//     elem.style.display = 'none';
// });
// showBtn.addEventListener('click', function() {
//     elem.style.display = 'block';
// });

// 5 2
// let elem = document.getElementById('elem');
// let redBtn = document.getElementById('redBtn');
// let resetBtn = document.getElementById('resetBtn');
// redBtn.addEventListener('click', function() {
//     elem.style.backgroundColor = 'red';
// });
// resetBtn.addEventListener('click', function() {
//     elem.style.backgroundColor = '';
// });

// 6 1 ////
// document.getElementById('borderButton').addEventListener('click', function() {
//     let elem = document.getElementById('elem');
//     elem.style.cssText = 
//         width: 100px;
//         height: 100px;
//         margin: 10px auto;
//         color: red;
//     ;
//     let computedStyle = window.getComputedStyle(elem, null);
//     let borderStyle = computedStyle.getPropertyValue('border-style');
//     let borderColor = computedStyle.getPropertyValue('border-color');
//     let borderWidth = computedStyle.getPropertyValue('border-width');
//     alert('Border Style: ' + borderStyle + '\nBorder Color: ' + borderColor + '\nBorder Width: ' + borderWidth);
// });

// 8 1
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let width = elem.offsetWidth;
//     let height = elem.offsetHeight;
//     console.log('Ширина:', width);
//     console.log('Высота:', height);
// });

// 8 2
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let width = elem.offsetWidth * 2;
//     let height = elem.offsetHeight * 2;
//     elem.style.width = width + 'px';
//     elem.style.height = height + 'px';
// });

// 9 1
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     let fontSize = parseInt(getComputedStyle(elem).fontSize);
//     console.log('Размер шрифта:', fontSize);
// });

// 10 1
// let paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++) {
//     let number = parseInt(paragraphs[i].textContent);
//     if (number % 2 === 0) {
//         paragraphs[i].style.color = 'red';
//     } else {
//         paragraphs[i].style.color = 'green';
//     }
// }

// 11 1
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function() {
//     if (elem.style.color === 'red') {
//         elem.style.color = 'black';
//     } else {
//         elem.style.color = 'red';
//     }
// });

// 12 1
// let input = document.getElementById('input');
// input.addEventListener('blur', function() {
//     let value = input.value;
//     if (value.length <= 9) {
//         input.style.border = '2px solid green';
//     } else {
//         input.style.border = '2px solid red';
//     }
// });

// 13 1
// let input = document.getElementById('input');
// input.addEventListener('blur', function() {
//   let value = parseInt(input.value);
//   if (value < 10) {
//     input.style.border = '2px solid green';
//   } else if (value >= 10 && value <= 20) {
//     input.style.border = '2px solid yellow';
//   } else {
//     input.style.border = '2px solid red';
//   }
// });


// 15 1 16 1 17 1 18 1
// let elem = document.querySelector('#elem');
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     console.log(elem.clientWidth);
//     console.log(elem.clientHeight);
//     console.log(elem.offsetWidth);
//     console.log(elem.offsetHeight);
//     console.log(elem.scrollWidth);
//     console.log(elem.scrollHeight);
// });

// 17 2
// button.addEventListener("click", function() {
//     console.log(elem.offsetWidt - elem.clientWidth);
//     console.log(elem.offsetHeight - elem.clientHeight);
// });

// 18 2
// button.addEventListener("click", function() {
//     console.log(elem.scrollWidth - elem.offsetWidth);
//     console.log(elem.scrollHeight - elem.offsetHeight);
// });

// 19 1 19 3
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(getTotalScrollHeight());
// });

// 19 2
// button.addEventListener("click", function() {
//     if (elem.scrollTop > 0) {
//         console.log("прокручен");
//     } else {
//         console.log("не прокручен");
//     }
// });

// 19 4
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(elem.scrollHeight - getTotalScrollHeight());
// });

// 19 5
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(elem.scrollHeight - (elem.offsetHeight + getTotalScrollHeight()));
// });

// 20 1
// button.addEventListener("click", function() {
//     elem.scrollTop = 100;
//     elem.scrollLeft = 50;
// });

// 20 2
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollTop + 50;
// });

// 20 3
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollTop - elem.scrollTop;
// });

// 20 4
// button.addEventListener("click", function() {
//     element.scrollTop = element.scrollHeight;
// });

// 21 1
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });

// 21 2
// button.addEventListener("click", function() {
// if (isScrolledToBottom) {
//     console.log("прокручен до конца по вертикали");
// } else {
//     console.log("не прокручен до конца по вертикали");
// }

// 22 1
// button.addEventListener("click", function() {
//     elem.style.height = elem.scrollHeight + 'px';
// });


// 24 1
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     let windowWidth = window.innerWidth;
//     let windowHeight = window.innerHeight;
//     console.log("Ширина: " + windowWidth + "px");
//     console.log("Высота: " + windowHeight + "px");
// });

// 24 2
// button.addEventListener("click", function() {
//     let hasVerticalScrollbar = document.documentElement.scrollHeight > window.innerHeight;
//     console.log("Вертикальная прокрутка: " + (hasVerticalScrollbar ? "есть" : "нет"));
// });

// 24 3
// button.addEventListener("click", function() {
//     let hasHorizontalScrollbar = document.documentElement.scrollWidth > window.innerWidth;
//     console.log("Горизонтальная прокрутка: " + (hasHorizontalScrollbar ? "есть" : "нет"));
// });

// 25 1
// button.addEventListener("click", function() {
//     let scrolledHeight = window.pageYOffset;
//     let windowHeight = window.innerHeight;
//     let totalHeight = document.documentElement.scrollHeight;
//     let visibleHeight = windowHeight + scrolledHeight;
//     console.log("Высота с учетом прокрученной части: " + visibleHeight + "px");
// });

// 25 2
// button.addEventListener("click", function() {
//   let scrolledWidth = window.pageXOffset;
//   let windowWidth = window.innerWidth;
//   let totalWidth = document.documentElement.scrollWidth;
//   let visibleWidth = windowWidth + scrolledWidth;
//   console.log("Ширина с учетом прокрученной части: " + visibleWidth + "px");
// });

// 25 3
// button.addEventListener("click", function() {
//     let hiddenHeight = document.documentElement.scrollHeight - window.innerHeight;
//     console.log("Высота спрятанной под прокруткой части: " + hiddenHeight + "px");
// });

// 26 1
// button.addEventListener("click", function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     console.log("Значение прокрутки по вертикали: " + scrollTop + "px");
// });

// 26 2
// button.addEventListener("click", function() {
//     let remainingScroll = document.documentElement.scrollHeight - window.innerHeight - window.pageYOffset;
//     console.log("Оставшаяся прокрутка по вертикали: " + remainingScroll + "px");
// });

// 27 1
// button.addEventListener("click", function() {
//     window.scrollTo(0, 300);
// });

// 27 2
// button.addEventListener("click", function() {
//     window.scrollTo(0, document.documentElement.scrollHeight - window.innerHeight - 100);
// });

// 27 3
// button.addEventListener("click", function() {
//     window.scrollTo(0, 0);
// });

// 27 4
// button.addEventListener("click", function() {
//     window.scrollTo(0, document.documentElement.scrollHeight);
// });

// 28 1
// button.addEventListener("click", function() {
//     window.scrollBy(0, -300);
//  });

// 28 2
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });

// 28 3
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: "smooth"
//     });
// });

// 29 1
// button.addEventListener("click", function() {
//     window.scrollBy(0, 100);
// });

// 29 2
// button.addEventListener("click", function() {
//     window.scrollBy(0, -100);
// });

// 29 3
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: window.pageYOffset + 300,
//         behavior: "smooth"
//     });
// });

// 29 4
// button.addEventListener("click", function() {
//     window.scrollTo({
//         top: window.pageYOffset - 300,
//         behavior: "smooth"
//     });
// });

// 30 1
// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let button3 = document.getElementById("button3");
// let elem = document.getElementById("elem");
// button1.addEventListener("click", function() {
//     elem.scrollIntoView();
// });
// button2.addEventListener("click", function() {
//     elem.scrollIntoView({ behavior: "smooth" });
// });
// button3.addEventListener("click", function() {
//     elem.scrollIntoView({ behavior: "smooth", block: "start" });
// });

// 31 1
// let button = document.getElementById("button");
// window.addEventListener("scroll", function() {
//     let scrolledHeight = window.pageYOffset;
//     let windowHeight = window.innerHeight;
//     let totalHeight = document.documentElement.scrollHeight;
//     if (scrolledHeight + windowHeight >= totalHeight) {
//         console.log("Достигнут конец страницы");
//     }
// });


// 32 1
// let map = new Map;
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
// map.set(arr3, 'data3');
// console.log(map);

// 32 2
// let map = new Map();
// let object1 = { name: "Vika" };
// let object2 = { age: 18 };
// let object3 = { city: "Istra" };
// let arr1 = [1, 2, 3];
// let arr2 = ["a", "b", "c"];
// let arr3 = [true, false];
// map.set(object1, arr1);
// map.set(object2, arr2);
// map.set(object3, arr3);
// console.log(map);

// 35 1
// let map = new Map();
// map.set("key1", "value1");
// map.set("key2", "value2");
// map.set("key3", "value3");
// let keysArray = Array.from(map.keys());
// for (let key of keysArray) {
//     console.log(key);
// }

//35 2
// let map = new Map();
// map.set("key1", "value1");
// map.set("key2", "value2");
// map.set("key3", "value3");
// let entriesArray = Array.from(map.entries());
// for (let [key, value] of entriesArray) {
//     console.log(key + ": " + value);
// }

// 36 1
// let map = new Map();
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let inputs = [input1, input2, input3];
// inputs.forEach(function(input, index) {
//     map.set(input, index + 1);
//     input.addEventListener("click", function() {
//         input.value = map.get(input);
//     });
// });

// 36 2
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let valuesArray = [];
// input1.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         valuesArray.push(input1.value);
//         input1.value = "";
//     }
// });
// input2.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         valuesArray.push(input2.value);
//         input2.value = "";
//     }
// });
// input3.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//         valuesArray.push(input3.value);
//         input3.value = "";
//     }
// });
// input1.addEventListener("blur", function() {
//     console.log(valuesArray);
// });
// input2.addEventListener("blur", function() {
//     console.log(valuesArray);
// });
// input3.addEventListener("blur", function() {
//     console.log(valuesArray);
// });


// 37 1
// let set = new Set();
// set.add("элемент1");
// set.add("элемент2");
// set.add("элемент3");
// set.add("элемент1");
// console.log(set);

// 38 1
// let arr = [1, 2, 3, 1, 3, 4];
// let set = new Set(arr);
// console.log(set);

// 38 2
// let set = new Set([1, 2, 3]);
// set.add(2);
// console.log(set);

// 39 1
// let set = new Set([1, 2, 3]);
// console.log(set.size);

// 39 2
// let set = new Set([1, 2, 3]);
// console.log(set.has(3));
// console.log(set.has(4));

// 40 1
// let set = new Set([1, 2, 3]);
// let sum = 0;
// set.forEach(function(value) {
//     sum += value;
// });
// console.log(sum);

// 41 1
// let set = new Set([1, 2, 3]);
// let array1 = Array.from(set);
// console.log(array1);
// let array2 = [...set];
// console.log(array2);

// 41 2
// let array = [1, 2, 3];
// let set = new Set(array);
// console.log(set);

// 42 1
// function removeDuplicates(array) {
//     let set = new Set(array);
//     return Array.from(set);
// }
// let array = [1, 2, 2, 3, 4, 4];
// let result = removeDuplicates(array);
// console.log(result);

// 43 1
// let paragraphs = document.querySelectorAll("p");
// let button = document.getElementById("button");
// paragraphs.forEach(function(paragraph) {
//     paragraph.addEventListener("click", function() {
//         paragraph.textContent += "!";
//     });
// });
// button.addEventListener("click", function() {
//     paragraphs.forEach(function(paragraph) {
//         paragraph.textContent += "!";
//     });
// });


// 45 1
// let elems = document.querySelectorAll('p');
// console.log(elems.length);
// console.log(elems[0]);
// console.log(elems instanceof Array);
// console.log(Array.isArray(elems));

// 46 1
// let elems = document.querySelectorAll('p');
// console.log(elems.forEach);
// console.log(elems.map);
// console.log(elems.filter);
// console.log(elems.reduce);

// 47 1
// let test = [
//     [1, 2, 3],
//     {a: 1, b: 2, c: 3},
//     [3, 4, 5],
//     {x: 1, y: 2, z: 3},
// ];
// test.forEach(function(item) {
//     if (Array.isArray(item)) {
//        console.log(item + " is an array");
//     } else {
//        console.log(item + " is not an array");
//     }
// });

// 48 1
// let elems = document.querySelectorAll('p');
// let arr1 = Array.from(elems);
// console.log(arr1);
// let arr2 = [...elems];
// console.log(arr2);
// let arr3 = Array.prototype.slice.call(elems);
// console.log(arr3);

// 48 2
// let elems = document.querySelectorAll('p');
// let slicedElems = Array.prototype.slice.call(elems, 1, -1);
// console.log(slicedElems);

// 49 1
// let childNodesType = document.childNodes.constructor.name;
// console.log(childNodesType);

// 49 2
// let childrenType = document.children.constructor.name;
// console.log(childrenType);

// 51 1 52 1
// let sym1 = Symbol('кошка');
// let sym2 = Symbol('песик');
// console.log(sym1, sym2);

// 53 1 2 54 1
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
// obj[sym] = 'text';
// console.log(obj);
// for (let key in obj) {
//     console.log(obj[key]);
// }

// 55 1
// let obj = {};
// let sym = Symbol();
// obj[sym] = function() {
//     console.log('Current time:', new Date());
// };
// console.log(obj[sym]());

//
// 56 1 2 3
// let obj = [1, 2, 3];
// let sym = Symbol();
// obj.push(4, 5, 7);
// obj[sym] = function() {
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum += this[i];
//     }
//     return sum;
// };
// console.log(obj[sym]());

// // 57 1
// let obj1 = Symbol.for('test');
// let obj2 = Symbol.for('test');
// obj1.sum = function() {
//     let sum = 0;
//     for (let key in this) {
//         if (typeof this[key] === 'number') {
//             sum += this[key];
//         }
//     }
//     return sum;
// };
// obj2.sum = function() {
//     let sum = 0;
//     for (let key in this) {
//         if (typeof this[key] === 'number') {
//             sum += this[key];
//         }
//     }
//     return sum;
// };
// console.log(obj1.sum());
// console.log(obj2.sum());

// 58 1
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');
// let key1 = Symbol.keyFor(sym1);
// let key2 = Symbol.keyFor(sym2);
// console.log(key1, key2);

// 59 1
// let map = new Map();
// console.log(map.has(Symbol.iterator));

// 59 2
// let set = new Set();
// console.log(set.has(Symbol.iterator));


// 60 1
// - Строки String
// - Коллекции NodeList
// - Генераторы
// - Коллекции HTMLCollection

// 61 1
// let str = 'wiskas';
// console.log(str[Symbol.iterator]);
// let nodeList = document.querySelectorAll('div');
// console.log(nodeList[Symbol.iterator]);
// let htmlCollection = document.getElementsByTagName('div');
// console.log(htmlCollection[Symbol.iterator]);

// 62 1
// let map = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3]
// ]);
// let iterator = map[Symbol.iterator]();  
// let result = iterator.next();
// while (!result.done) {
//     console.log(result.value);
//     result = iterator.next();
// }

// 62 2
// let nodeList = document.querySelectorAll('div');
// let iterator = nodeList[Symbol.iterator]();
// let result = iterator.next();
// while (!result.done) {
//     console.log(result.value);
//     result = iterator.next();
// }

// 62 3
// let htmlCollection = document.getElementsByTagName('div');
// let iterator = htmlCollection[Symbol.iterator]();
// let result = iterator.next();
// while (!result.done) {
//     console.log(result.value);
//     result = iterator.next();
// }

// 63 1
// function* reverseIterator() {
//     let num = 5;
//     while (num >= 1) {
//         yield num;
//         num--;
//     }
// }
// let iter = reverseIterator();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// 64 1
// function* reverseCount() {
//     let num = 10;
//     while (num >= 0) {
//         yield num;
//         num--;
//     }
// }
// let iter = reverseCount();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// 64 2
// function* decreaseNumber(num) {
//     while (num > 0) {
//         yield num;
//         num--;
//     }
// }
// let iter = decreaseNumber(5);  
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next()); 
// console.log(iter.next());
// console.log(iter.next()); 
// console.log(iter.next());
 
// 64 3
// function* decreaseNumberByHalf(num) {
//     while (num > 1) {
//         yield num;
//         num /= 2;
//     }
// }
// let iter = decreaseNumberByHalf(16);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// 64 4
// function* powerOfTwo() {
//     let power = 0;
//     while (true) {
//         yield Math.pow(2, power);
//         power++;
//     }
// }  
// let iter = powerOfTwo();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// 64 5
// function* fibonacci() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }
// let iter = fibonacci();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// 65 1
// function* func() {
//     for (let i = 1; i <= 3; i++) {
//         yield i;
//     }
// }  
// for (let elem of func()) {
//     console.log(elem);
// }  
// for (let elem of func()) {
//     console.log(elem);
// }

// 66 1
// function* iterateObject(obj) {
//     for (let key in obj) {
//         yield [key, obj[key]];
//     }
// }  
// let iter = iterateObject({a: 1, b: 2, c: 3});  
// for (let elem of iter) {
//     console.log(elem);
// }

// 67 1
// let obj = {a: 1, b: 2, c: 3};
// obj[Symbol.iterator] = function* () {
//     for (let key in this) {
//         yield {key: key, val: this[key]};
//     }
// };
// for (let elem of obj) {
//     console.log(elem);
// }

// 68 1 //
// let obj = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//         let current = this.from;
//         let last = this.to;
//         return {
//             next() {
//             if (current <= last) {
//                 return { value: current++, done: false };
//             } else {
//                 return { done: true };
//             }
//             }
//         };
//     }
// };
// for (let num of obj) {
//     console.log(num);
// }

// 69 1
// let arr = ['a', 'b', 'c'];
// arr[Symbol.iterator] = function* () {
//     for (let i = 0; i < this.length; i++) {
//         yield this[i];
//     }
// };
// for (let elem of arr) {
//     console.log(elem);
// }


// 69 2
// let set = new Set(['a', 'b', 'c']);
// set[Symbol.iterator] = function* () {
//     let values = Array.from(this);
//     for (let value of values) {
//         yield value;
//     }
// };
// for (let elem of set) {
//     console.log(elem);
// }  


// 70 1
// let map = new Map();
// map.set('key1', 'value1');
// map.set('key2', 'value2');
// map.set('key3', 'value3');
// let iter = map.keys();
// for (let key of iter) {
//     console.log(key);
// }

// 70 2
// let set = new Set();
// set.add('a');
// set.add('b');
// set.add('c');
// let iter = set.keys();
// for (let key of iter) {
//     console.log(key);
// }

// 71 1
// let map = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3]
// ]);
// map[Symbol.iterator] = function* () {
//     let entries = Array.from(this.entries());
//     for (let entry of entries) {
//         yield entry;
//     }
// };  
// for (let elem of map) {
//     console.log(elem);
// }

// 71 2
// let set = new Set();
// set.add('a');
// set.add('b');
// set.add('c');
// let iter = set.entries();
// for (let entry of iter) {
//     console.log(entry);
// }

// 71 3
// let nodeList = document.querySelectorAll('p');
// nodeList[Symbol.iterator] = function* () {
//     for (let i = 0; i < this.length; i++) {
//         yield this[i];
//     }
// };
// for (let elem of nodeList) {
//     console.log(elem);
// }

// 72 1
// итератор, который возвращает значения элементов коллекции

// 73 1
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function* () {
//         for (let key in this) {
//             yield this[key];
//         }
//     }
// };
// let arr = [...obj];
// console.log(arr);

// 74 1
// let str = '12345';
// let sum = 0;
// for (let digit of str) {
//     sum += Number(digit);
// }
// console.log(sum);

// 75 1
// let num = 12345;
// let sum = [...String(num)].map(Number).reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// 76 1
// let table = document.getElementById('myTable');
// let cells = table.getElementsByTagName('td');
// for (let i = 0; i < cells.length; i++) {
//     cells[i].innerText = i + 1;
// }

// 77 1
// let inputs = document.getElementsByTagName('input');
// for (let input of inputs) {
//     console.log(`Number: ${input.getAttribute('id')}, ID: ${input.id}, Value: ${input.value}`);
// }


// 78 1
// let arr = [1, 2, 3, 'a', 'b', 'c'];
// let a = '[' + arr.map(item => typeof item === 'string' ? "${item}" : item).join(',') + ']';
// console.log(a);

// 78 2
// let obj = {
//     a: 1,
//     b: 2,
//     c: 'eee',
//     d: true,
// };
// let a = Object.keys(obj);
// let b = '{' + a.map(key => "${key}": ${typeof obj[key] === 'string' ? "${obj[key]}" : obj[key]}).join(',') + '}';
// console.log(b);

// 78 3
// let obj = {
//     a: ['a', 'b', 'c',],
//     b: '111',
//     c: 'eee',
// };
// let objKeys = Object.keys(obj);
// let objJSON = '{' + objKeys.map(key => "${key}": ${Array.isArray(obj[key]) ? '[' + obj[key].map(item => typeof item === 'string' ? "${item}" : item).join(',') + ']' : "${obj[key]}"}).join(',') + '}';
// console.log(objJSON);
  
// 79 1
// let a = '[1,2,3,4,5]';
// let arr = JSON.parse(a);
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// 79 2
// let a = {
//     "data1": [1,2,3],
//     "data2": [4,5,6],
//     "data3": [7,8,9]
// };
// let obj = JSON.parse(a);
// let sum = Object.values(obj).flat().reduce((acc, curr) => acc + curr, 0);
// console.log(sum);
  
// 79 3
// let a = '["user1","user2","user3","user4","user5"]';
// let b = JSON.parse(a);
// let ul = document.createElement('ul');
// b.forEach(name => {
//     let li = document.createElement('li');
//     li.textContent = name;
//     ul.appendChild(li);
// });
// document.body.appendChild(ul);

// 79 4
// let a = [
//     {
//         "name": "user1",
//         "age": 25,
//         "salary": 1000
//     },
//     {
//         "name": "user2",
//         "age": 26,
//         "salary": 2000
//     },
//     {
//         "name": "user3",
//         "age": 27,
//         "salary": 3000
//     }
// ];
// let arr = JSON.parse(a);
// let table = '<table><tr><th>Name</th><th>Age</th><th>Salary</th></tr>';
// arr.forEach(worker => {
//     table += <tr><td>${worker.name}</td><td>${worker.age}</td><td>${worker.salary}</td></tr>;
// });
// table += '</table>';
// document.body.innerHTML = table;

// 80 1
// let a = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let jsonString = JSON.stringify(a);
// console.log(jsonString);

// 80 2
// let a = Array.from(document.querySelectorAll('ul li')).map(city => city.textContent);
// let jsonCities = JSON.stringify(a);
// console.log(jsonCities);

// 80 3
// let a = Array.from(document.querySelectorAll('table tr')).slice(1);
// let data = a.map(row => {
//     let [surname, name, patronymic] = row.children;
//     return {
//         surname: surname.textContent,
//         name: name.textContent,
//         patronymic: patronymic.textContent
//     };
// });
// let jsonData = JSON.stringify(data);
// console.log(jsonData);

// 81 1
// let json = '["user1","user2","user3","user4","user5"]';
// let jsonArray = JSON.parse(json);
// jsonArray.push("user6");
// let newJsonString = JSON.stringify(jsonArray);
// console.log(newJsonString);

// 81 2
// let json = '["user1","user2","user3","user4","user5"]';
// let jsonArray = JSON.parse(json);
// jsonArray[1] = "newUser";
// let newJsonString = JSON.stringify(jsonArray);
// console.log(newJsonString);

// 81 3
// let json = [
//     {
//         "name": "user1",
//         "age": 25,
//         "salary": 1000
//     },
//     {
//         "name": "user2",
//         "age": 26,
//         "salary": 2000
//     },
//     {
//         "name": "user3",
//         "age": 27,
//         "salary": 3000
//     }
// ];
// let jsonArray = JSON.parse(json);
// let newEmployee = {
//     "name": "user4",
//     "age": 28,
//     "salary": 4000
// };
// jsonArray.push(newEmployee);
// let newJsonString = JSON.stringify(jsonArray);
// console.log(newJsonString);
  
// 84 1
// localStorage.setItem('number1', 10);
// localStorage.setItem('number2', 20);
// localStorage.setItem('number3', 30);
// let a = 0;
// for (let i = 1; i <= 3; i++) {
//     let key = 'number' + i;
//     let number = parseInt(localStorage.getItem(key));
//     a += number;
// }
// console.log(a);

// 85 1
// if (!localStorage.getItem('lastVisit')) {
//     localStorage.setItem('lastVisit', new Date().getTime());
// } else {
//     let lastVisitTime = parseInt(localStorage.getItem('lastVisit'));
//     let currentTime = new Date().getTime();
//     let timeDifference = currentTime - lastVisitTime;
//     let seconds = Math.floor(timeDifference / 1000);
//     let minutes = Math.floor(seconds / 60);
//     let hours = Math.floor(minutes / 60);
//     console.log(Прошло ${hours} часов, ${minutes % 60} минут, ${seconds % 60} секунд с предыдущего посещения.);
// }

// 85 2
// let birthday = localStorage.getItem('birthday');
// if (birthday) {
//     let today = new Date();
//     let userBirthday = new Date(birthday);
//     if (today.getDate() === userBirthday.getDate() && today.getMonth() === userBirthday.getMonth()) {
//         console.log('С Днем Рождения!');
//     }
// }

// 85 3
// let input = document.querySelector('input');
// input.addEventListener('blur', function() {
//     localStorage.setItem('inputValue', input.value);
// });
// let savedValue = localStorage.getItem('inputValue');
// if (savedValue) {
//     input.value = savedValue;
// }

// 86 1
// if (!localStorage.getItem('ccount')) {
//     localStorage.setItem('ccount', 1);
// } else {
//     let count = parseInt(localStorage.getItem('ccount'));
//     count++;
//     localStorage.setItem('ccount', count);
// }
// let ccount = localStorage.getItem('ccount');
// document.body.innerHTML = <h1>Страница обновлена ${ccount} раз</h1>;

// 87 1
// let a = localStorage.getItem('a');
// if (!a) {
//     a = 0;
// }
// a++;
// if (a === 10) {
//     a = 0;
// }
// localStorage.setItem('a', a);
// document.body.innerHTML = <h1>Страница обновлена ${refreshCount} раз</h1>;

// 88 1
// localStorage.clear();
// console.log(localStorage.getItem('refreshCount')); 

// 89 1
// document.getElementById('countButton').addEventListener('click', function() {
//     let num = localStorage.length;
//     console.log(num);
// });

// 89 2
// document.getElementById('checkButton').addEventListener('click', function() {
//     let num = localStorage.length;
//     console.log(num);
//     if (num > 10) {
//         localStorage.clear();
//         console.log('LocalStorage очищен!');
//     }
// });

// 90 1
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let val = localStorage.getItem(key);
//     console.log(Значение записи с номером ${i}: ${val});
// }

// 91 1
// document.getElementById('showLocalStorageBtn').addEventListener('click', function() {
//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let val = localStorage.getItem(key);
//         console.log(Значение записи с ключом ${key}: ${val});
//     }
// });

// 92 2
// document.getElementById('showKeysBtn').addEventListener('click', function() {
//     let keys = Object.keys(localStorage);
//     for (let key of keys) {
//         console.log(Ключ записи: ${key});
//     }
// });

// document.getElementById('showValuesBtn').addEventListener('click', function() {
//     let values = Object.values(localStorage);
//     for (let value of values) {
//         console.log(Значение записи: ${value});
//     }
// });

// 93 1
// document.getElementById('saveBtn').addEventListener('click', function() {
//     let input1Value = document.getElementById('input1').value;
//     let input2Value = document.getElementById('input2').value;
//     let input3Value = document.getElementById('input3').value;
//     let valuesArray = [input1Value, input2Value, input3Value];
//     localStorage.setItem('inputValues', JSON.stringify(valuesArray));
// });

// 93 2
// let savedValues = JSON.parse(localStorage.getItem('inputValues'));
// if (savedValues) {
//     document.getElementById('input1').value = savedValues[0];
//     document.getElementById('input2').value = savedValues[1];
//     document.getElementById('input3').value = savedValues[2];
// }

// 94 1
// let users = JSON.parse(localStorage.getItem('users')) || [];
// document.getElementById('addUserBtn').addEventListener('click', function() {
//     let surname = document.getElementById('surnameInput').value;
//     let name = document.getElementById('nameInput').value;
//     let age = document.getElementById('ageInput').value;
//     let newUser = {
//         surn: surname,
//         name: name,
//         age: parseInt(age)
//     };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     document.getElementById('surnameInput').value = '';
//     document.getElementById('nameInput').value = '';
//     document.getElementById('ageInput').value = '';
//     alert('Новый пользователь добавлен!');
// });

// 95 1
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// function renderTasks() {
//     let taskList = document.getElementById('taskList');
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         let li = document.createElement('li');
//         li.textContent = task;
//         let deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Удалить';
//         deleteBtn.addEventListener('click', function() {
//             tasks.splice(index, 1);
//             localStorage.setItem('tasks', JSON.stringify(tasks));
//             renderTasks();
//         });
//         li.appendChild(deleteBtn);       
//         taskList.appendChild(li);
//     });
// }
// renderTasks();
// document.getElementById('addTaskBtn').addEventListener('click', function() {
//     let newTask = document.getElementById('newTask').value;
//     tasks.push(newTask);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     renderTasks();
//     document.getElementById('newTask').value = '';
// });

// 95 2
// let notes = JSON.parse(localStorage.getItem('notes')) || [];
// function renderNotes() {
//     let noteList = document.getElementById('noteList');
//     noteList.innerHTML = '';
//     notes.forEach((note, index) => {
//         let li = document.createElement('li');
//         let link = document.createElement('a');
//         link.href = '#';
//         link.textContent = Запись ${index + 1};
//         link.addEventListener('click', function() {
//             document.getElementById('noteEditor').value = note;
//         });
//         li.appendChild(link);
//         noteList.appendChild(li);
//     });
// }
// renderNotes();
// document.getElementById('noteEditor').addEventListener('input', function() {
//     let currentNote = document.getElementById('noteEditor').value;
//     if (currentNote !== '') {
//         notes.push(currentNote);
//         localStorage.setItem('notes', JSON.stringify(notes));
//         renderNotes();
//     }
// });

// // 95 3
// function createSticker() {
//     const content = document.getElementById('new-sticker-content').value;
//     if (content.trim() !== '') {
//         const sticker = document.createElement('div');
//         sticker.className = 'sticker';
//         sticker.textContent = content;       
//         sticker.addEventListener('click', function() {
//             this.remove();
//         });    
//         document.getElementById('stickers-container').appendChild(sticker);
//         document.getElementById('new-sticker-content').value = '';
//     }
// }












