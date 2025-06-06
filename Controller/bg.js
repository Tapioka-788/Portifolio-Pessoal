const
	STAR_SIZE = 3,
	STAR_MIN_SCALE = 0.2,
	OVERFLOW_THRESHOLD = 50
const canvas = document.querySelector("canvas"),
	context = canvas.getContext("2d")

let textBlock
function tbUpdate() {
	textBlock = {
		textDisplayed: " ",
		yf: canvas.height / 2,
		yi: canvas.height / 2 - 85, 
	}
	context.font = "6vw helvetica"
	context.fillStyle = "white"
	;(textBlock.textWidth = context.measureText(textBlock.textDisplayed).width),
		(textBlock.xi = canvas.width / 2 - textBlock.textWidth / 2)
	textBlock.xf = textBlock.xi + textBlock.textWidth
}
let scale = 1,
	width,
	height

let stars = []

let pointerX, pointerY

let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 }

let touchInput = false

resize()
step()

window.onresize = resize
canvas.onmousemove = onMouseMove
canvas.ontouchmove = onTouchMove
canvas.ontouchend = onMouseLeave
canvas.onclick = canvasClickHandler
document.onmouseleave = onMouseLeave

function canvasClickHandler(evnt) {
	let xi = canvas.getBoundingClientRect().left
	let yi = canvas.getBoundingClientRect().top
	let xcanv = evnt.clientX - xi
	let ycanv = evnt.clientY - yi
	// console.log(ycanv,'ycanv')
	let nameClicked = !!(
		textBlock.xi < xcanv &&
		textBlock.xf > xcanv &&
		textBlock.yi < ycanv &&
		textBlock.yf > ycanv
	)
	if (nameClicked) {
		placeStar()
		// textBlock.textDisplayed = randomise([
		// 	"Adarsh Singh",
		// 	"Lakki Singh",
		// 	"Lucky Singh",
		// 	"Thakur Lakki",
		// ])
	}
}
// return random element from the input array
function randomise(arr) {
	let n = arr.length
	let i = Math.floor(Math.random() * n)
	return arr[i]
}
function placeStar() {
	for (let x = textBlock.xi; x < textBlock.xf; x += 100) {
		//increase += value to dec. stars
		for (let y = textBlock.yi; y < textBlock.yf; y += 35) {
			stars.push({
				x,
				y,
				z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
			})
		}
	}
}

function recycleStar(star) {
	let direction = "z"

	let vx = Math.abs(velocity.x),
		vy = Math.abs(velocity.y)

	if (vx > 1 || vy > 1) {
		let axis

		if (vx > vy) {
			axis = Math.random() < vx / (vx + vy) ? "h" : "v"
		} else {
			axis = Math.random() < vy / (vx + vy) ? "v" : "h"
		}

		if (axis === "h") {
			direction = velocity.x > 0 ? "l" : "r"
		} else {
			direction = velocity.y > 0 ? "t" : "b"
		}
	}

	star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)

	if (direction === "z") {
		star.z = 0.1
		star.x = Math.random() * width
		star.y = Math.random() * height
	} else if (direction === "l") {
		star.x = -OVERFLOW_THRESHOLD
		star.y = height * Math.random()
	} else if (direction === "r") {
		star.x = width + OVERFLOW_THRESHOLD
		star.y = height * Math.random()
	} else if (direction === "t") {
		star.x = width * Math.random()
		star.y = -OVERFLOW_THRESHOLD
	} else if (direction === "b") {
		star.x = width * Math.random()
		star.y = height + OVERFLOW_THRESHOLD
	}
}

function resize() {
	// scale = window.devicePixelRatio || 1;
	//above line was commented and it became responsive :strange

	width = window.innerWidth * scale
	height = window.innerHeight * scale

	canvas.width = width
	canvas.height = height

	tbUpdate()
	placeStar()
}

function step() {
	context.clearRect(0, 0, width, height)

	update()
	render()

	requestAnimationFrame(step)
}

function update() {
	velocity.tx *= 0.96
	velocity.ty *= 0.96

	velocity.x += (velocity.tx - velocity.x) * 0.8
	velocity.y += (velocity.ty - velocity.y) * 0.8

	stars.forEach(star => {
		star.x += velocity.x * star.z
		star.y += velocity.y * star.z

		star.x += (star.x - width / 2) * velocity.z * star.z
		star.y += (star.y - height / 2) * velocity.z * star.z
		star.z += velocity.z

		// recycle when out of bounds
		if (
			star.x < -OVERFLOW_THRESHOLD ||
			star.x > width + OVERFLOW_THRESHOLD ||
			star.y < -OVERFLOW_THRESHOLD ||
			star.y > height + OVERFLOW_THRESHOLD
		) {
			recycleStar(star)
		}
	})
}

function render() {
	stars.forEach(star => {
		context.beginPath()
		context.lineCap = "round"
		context.lineWidth = STAR_SIZE * star.z * scale
		context.strokeStyle =
			"rgba(255,255,255," + (0.5 + 0.5 * Math.random()) + ")" //dim and bright stars

		context.beginPath()
		context.moveTo(star.x, star.y)

		var tailX = velocity.x * 2,
			tailY = velocity.y * 2

		// stroke() wont work on an invisible line
		if (Math.abs(tailX) < 0.1) tailX = 0.5
		if (Math.abs(tailY) < 0.1) tailY = 0.5

		context.lineTo(star.x + tailX, star.y + tailY)

		context.stroke()
	})

	//write my name

	context.fillText(textBlock.textDisplayed, textBlock.xi, textBlock.yf)
}

function movePointer(x, y) {
	if (typeof pointerX === "number" && typeof pointerY === "number") {
		let ox = x - pointerX,
			oy = y - pointerY

		velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1)
		velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1)
	}

	pointerX = x
	pointerY = y
}

function onMouseMove(event) {
	touchInput = false

	movePointer(event.clientX, event.clientY)
}

function onTouchMove(event) {
	touchInput = true

	movePointer(event.touches[0].clientX, event.touches[0].clientY, true)

	event.preventDefault()
}

function onMouseLeave() {
	pointerX = null
	pointerY = null
}
