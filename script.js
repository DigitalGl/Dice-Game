

const gameInfo = document.querySelector(["data-game-info"]);
const actionBtn = document.querySelector(["data-action-btn"]);
const container = document.querySelector(["data-container"]);

const generateRandomNumber = () => Math.ceil(Math.random() * 6);

actionBtn.addEventListener("click", () => {
    render();
   })

const render = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    container.insertAdjacentHTML("beforeend", `
         <svg class="dice dice-red">
            <use href="sprites.svg#dice-${player1}-icon"></use>
        </svg>
        `)
}


