let holes = document.querySelectorAll('.hole');
let resultNumber = document.querySelector('.result_number');

// присваиваем переменной html-код с картинкой
const goblin = `<img class="goblin" src="img/goblin.png"></img>`

// массив с индексами
let arrIndex = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// переменная для массива
let index;

function addGoblin() {
	// перемешиваем массив
	arrIndex.sort(() => Math.random() - 0.5);
	// получаем первое число из массива из записываем его во внешнюю переменную, если число повторяется, берем следующее из массива
	if (index === arrIndex[0]) {
		index = index[1];
	} else {
		index = arrIndex[0];
	}
	console.log(index);
	// вставляем гоблина в HTML
	holes[index].insertAdjacentHTML('beforeend', goblin);
	// создаем новую переменную (наш созданный гоблин)
	let removeGoblin = document.querySelector('.goblin');
	// массив с вариациями время на удаление 'гоблина'
	const removeTime = [500, 750, 1000];
	// удаляем 'гоблина' с рандомным временем из предложенных
	setTimeout(() => removeGoblin.remove(), removeTime[Math.floor(Math.random() * removeTime.length)]);
}

function start() {
	setInterval(() => addGoblin(), 1300);
}
start();
