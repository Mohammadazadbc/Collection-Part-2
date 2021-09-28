const btns = document.querySelectorAll('.btn');
const allCards = document.querySelectorAll('.cards')
const players = document.querySelectorAll('.players')


for(let i =0; i<btns.length; i++){
    btns[i].addEventListener('click',(e)=>{
        e.preventDefault();


        const filter = e.target.dataset.filter;

        allCards.forEach((card)=>{
            if(filter === 'all'){
                card.style.display="block"
            }
            else{
                if(card.classList.contains(filter)){
                    card.style.display="block"
                }
                else{
                    card.style.display ="none"
                }


            }
           
        })
    })
}




const searchSport = document.getElementById('search')
const SportName = document.querySelectorAll('.name');

searchSport.addEventListener("keyup", filterSport);


function filterSport(e) {
    const text = e.target.value.toLowerCase();
    // console.log(sportName[0]);
    SportName.forEach(function(sport) {
        const item = sport.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            sport.parentElement.parentElement.style.display = "block"
        } else {
            sport.parentElement.parentElement.style.display = "none"
        }
    })
}