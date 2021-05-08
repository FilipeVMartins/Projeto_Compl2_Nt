
class Carousel {
	constructor() {
        // slide starts at first image
		this.pointer = 0;
        // indexes the found carousel items to be displayed
		this.slidesList = document.querySelectorAll('main .page-content section.carousel div.slideshow-content div.slide');
        // create dots nodes
        this.addDots();
        // indexes the created nodes in a list
        this.dotsList = document.querySelectorAll('main .page-content section.carousel div.pointer div.dot');

        // carousel first display
        this.displaySlide();
	}

    // dafault value starts at index 0
	displaySlide(newpointer=this.pointer) {
        // hides the actual item before changing the pointer atr
        this.slidesList[this.pointer].style.display = 'none'
        // remove active style actual active dot
        this.dotsList[this.pointer].classList.remove('active');

        // change the pointer
        this.pointer = newpointer;

        // displays the given item after changing the pointer atr
        this.slidesList[this.pointer].style.display = 'block'
        // add active style to the new dot
        this.dotsList[this.pointer].classList.add('active');
	}

    // changes the pointer to the next carousel item
    nextButton(){
        // if the next pointer index is <= than length-1 it represents the index correspond to na existing value inside slidesList.
        if (this.pointer+1 <= this.slidesList.length-1){
            // apply style to a new pointer
            this.displaySlide(this.pointer+1);

        // else, the next index will be bigger than existing elements indexes in the list, then set pointer back to index 0
        } else {
            // apply style to a new pointer
            this.displaySlide(0);
        }
    };

    // changes the pointer to the previous carousel item
    previousButton(){
        // if the next pointer-1 is bigger than 0, then there is a previous slide to go
        if (this.pointer-1 >= 0){
            // apply style to a new pointer
            this.displaySlide(this.pointer-1);

        // else, the pointer is less than 0, then it will be set to the last existing index of the slidesList
        } else {
            // apply style to a new pointer
            this.displaySlide(this.slidesList.length-1);
        }
    };

    // writes each dot with a onclick function that recieves its respective pointer as parameter 
    addDots(){
        // start dot elements variable
        let dotElem;
        // select the pointer element
        let pointerElem = document.querySelector('main .page-content section.carousel div.pointer');

        // loop trough existing slides
        this.slidesList.forEach((elem, index) => {

            // for each slide create a dot element
            dotElem = document.createElement("div");
            dotElem.className = 'dot';

            // changes the pointer after clicking a dot.
            dotElem.setAttribute('onClick', `carousel1.displaySlide(${index})` )

            // append the created dot to the pointer
            pointerElem.appendChild(dotElem);
        });
    };
}

window.onload = function() {
    
    // back to top function
    document.querySelector('.footer .backtotop .backtotop-wrapper').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    });

    // carousel object
    carousel1 = new Carousel();
};