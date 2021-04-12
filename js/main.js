




class Carousel {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	display() {
	}


    previous(){

    };
    next(){

    };

    countItems(){
        
    }

    addDots(){

    };
    



}



window.onload = function() {
    
    document.querySelector('.footer .backtotop .backtotop-wrapper').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    });


    carousel1 = new Carousel();


  };