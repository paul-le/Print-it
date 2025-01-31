const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerText = document.querySelector("#banner p");
const bannerImg = document.querySelector(".banner-img");
// const dotsDiv = document.getElementsByClassName(".dots");
// const createSpan = document.createElement('<span class="dot"></span>');

let numberSlide = 0;

console.log(bannerImg);

rightArrow.addEventListener("click", () => {
	numberSlide++;
	if(numberSlide == slides.length){
		numberSlide = 0;
	}
	changeSlide();
});

leftArrow.addEventListener("click", () => {
	numberSlide--;
	if(numberSlide == -1){
		numberSlide = slides.length-1;
	}
	changeSlide();
});

function changeSlide() {
	bannerText.innerHTML = slides[numberSlide].tagLine;
	bannerImg.src = "./assets/images/slideshow/"+slides[numberSlide].image;
	const dots = document.getElementsByClassName("dot");

	for (const dot of dots) {
		dot.classList.remove('dot_selected');
	}
	
	document.getElementsByClassName("dot")[numberSlide].classList.add('dot_selected');
	
}

let slideNb = 0;

// for (let slideNb = 0; slideNb < slides.length; slideNb++){
// 	createSpan();
// }

for (let index = 0; index < slides.length; index++) {
	const newSpan = document.createElement("span");
	newSpan.classList.add("dot");
	document.getElementsByClassName("dots")[0].appendChild(newSpan);
}

document.getElementsByClassName("dot")[numberSlide].classList.add('dot_selected');

// for (numberSlide ; numberSlide < slides.length; numberSlide++){
// 	document.createElement(createSpan);
// }