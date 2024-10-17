const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener("click", flipCard));

let isFlipped = false;
let stop = false;
let firstC, secondC;

function flipCard(){
    if(stop)
        return;

    if(this === firstC)
        return;

    this.classList.add("flip");

    if(isFlipped === false){
        isFlipped = true;
        firstC = this;
        return;
    }

    secondC = this;

    check();
}

function check(){
    if(firstC.dataset.framework === secondC.dataset.framework){
        firstC.removeEventListener('click', flipCard);
        secondC.removeEventListener('click', flipCard);
        reset();
        return;
    }

    stop = true;

    setTimeout(() => {
        firstC.classList.remove('flip');
        secondC.classList.remove('flip');
        reset();
      }, 1500);   
}

function reset() {
    [isFlipped, stop] = [false, false];
    [firstC, secondC] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 16);
        card.style.order = random;
      });
})();

function gameReset(){
    location.reload();
}