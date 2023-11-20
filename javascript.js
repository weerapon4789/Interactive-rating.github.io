const btn = document.getElementById('btnSubmit');
const score = document.querySelectorAll('.number');
const mainCard = document.querySelector('.card_main');
const thankCard = document.querySelector('.card_thank');
const giveRating = document.getElementById('givenRating');
let rating = '';

document.addEventListener('DOMContentLoaded', () => {
    mainCard.classList.add('show_rating');
    score.forEach((score) => {
        score.addEventListener('click', (e) => {
            let activeScore = document.querySelector('.active_score');
            if (activeScore) {
                activeScore.classList.remove('active_score');
            }
            e.target.classList.add('active_score');
            rating = e.target.dataset.id;
            console.log(rating);
        });
    });

    btn.addEventListener('click', () => {
        if (rating){
            mainCard.classList.remove('show_rating');
            thankCard.classList.add('showThankyou');
            giveRating.innerText = rating;
        }
        console.log(giveRating);
    });
})

