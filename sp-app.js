		// let items = ["woda", "chleb", "aha"];
		// let main = document.getElementById("main")

		// items.map((item, index)=>{
		// 	var elemDiv = document.createElement('div');
		// 	elemDiv.innerHTML = item
		// 	main.appendChild(elemDiv);
		// 	return 1
		// })
		// console.log(2);

		// fetch("https://dog.ceo/api/breeds/image/random").then(function(response) {
		// 	return response.json()
		// }).then(function(data) {
		// 	console.log(data)
		// 	var img = document.createElement('img');
		// 	img.src = data.message
		// 	main.appendChild(img);
		// })

//slider



// const carouselslide = document.querySelector('.photo-slides');
// const carouselImages = document.querySelectorAll('.slides');

// //Buttons

// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// //Counter

// let counter = 1;
// const size = carouselImages[0].clientwidth;
// carouselslide.style.transform = 'translat-ex(' + (-size * counter) + 'px)';

// //Button Listeners

// nextBtn.addEventlistener('click', () => {
//     carouselslide.style.transition = "transform 0.4s ease-in-out";
//     counter++;
//     carouselslide.style.transform = 'translatex(' + (-size counter) + 'px)';
// });

// prevBtn. addEventlistener('click', () => {
//     carouselslide.style.transition = "transform e.4s ease-in-out";
//     counter--;
//     carouselslide.style.transform = 'translateX(' + (-size counter) + 'px)';
// });

// carouselslide.addEventListener(transitionend', () => {
//     if (carouselImages[counter].id === 'lastClone') {
//        carouselSlide.style.transition = "none";
//        counter = carouselImages.length - 2;
//        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     if (carouselImages[counter].id === 'firstClone') {
//        carouselslide.style.transition = "none";
//        counter = carouselImages.length - counter;
//         carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// });