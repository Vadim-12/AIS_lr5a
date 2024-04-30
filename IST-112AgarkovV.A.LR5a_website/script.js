const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

let lastColorIndex;

function getRandomColor() {
	const randomIndex = Number(Math.random() * (colors.length - 1)).toFixed();
	if (randomIndex === lastColorIndex) {
		return getRandomColor();
	} else {
		console.log(randomIndex);
		lastColorIndex = randomIndex;
		return colors[randomIndex];
	}
}

setInterval(() => {
	const newColor = getRandomColor();
	console.log(newColor);
	document.body.style.background = newColor;
}, 5);
