window.addEventListener('DOMContentLoaded', () => {
    const grilles = Array.from(document.querySelectorAll('.grille'));
    const playerDisplay = document.querySelector('.display-player');
    const tableResetBtn = document.querySelector('#clear');
    const announcer = document.querySelector('.announcer');

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const NoWinner = 'No Winner';
   
    //my grille 
    let Table = ['', '', '', '', '', '', '', '', ''];
    let GameStart = true;
    let ActualPlayer = 'X';

    //all possibilies 
    const CasesForToWinConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultSuccess() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = CasesForToWinConditions[i];
            const a = Table[winCondition[0]];
            const b = Table[winCondition[1]];
            const c = Table[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

    if (roundWon) {
            announce(ActualPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            GameStart = false;
            return;
        }

    if (!Table.includes(''))
        announce(NoWinner);
    }

    let scorePlayerX = 0;
    let scorePlayerO = 0;

    function updateScoreO(val) {
        document.getElementById("counter-label0").innerHTML = val;
    }

    function updateScoreX(val) {
        document.getElementById("counter-labelX").innerHTML = val;
    }
    updateScoreO(scorePlayerO);
    updateScoreX(scorePlayerX);

    function play() {
        var audio = new Audio(
    'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');
            audio.play();
    }

    const announce = (type) => {
        
        switch(type){
            case PLAYERO_WON:
                updateScoreO(++scorePlayerO);
                play();
                announcer.innerHTML = 'For this last round Player <span class="playerO">O</span> Won';               
                break;
            case PLAYERX_WON:
                updateScoreX(++scorePlayerX);
                play();
                announcer.innerHTML = 'For this last round Player <span class="playerX">X</span> Won';
                break;
            case NoWinner:
                announcer.innerText = 'NoWinner';
        }
        announcer.classList.remove('cache');
    };

    const isValidAction = (grille) => {
        if (grille.innerText === 'X' || grille.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateTable =  (index) => {
        Table[index] = ActualPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${ActualPlayer}`);
        ActualPlayer = ActualPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = ActualPlayer;
        playerDisplay.classList.add(`player${ActualPlayer}`);
    }

    const userAction = (grille, index) => {
        if(isValidAction(grille) && GameStart) {
            grille.innerText = ActualPlayer;
            grille.classList.add(`player${ActualPlayer}`);
            updateTable(index);
            handleResultSuccess();
            changePlayer();
        }
    }
    
    const resetTable = () => {
        Table = ['', '', '', '', '', '', '', '', ''];
        GameStart = true;
        announcer.classList.add('cache');

        if (ActualPlayer === 'O') {
            changePlayer();
        }

        grilles.forEach(grille => {
            grille.innerText = '';
            grille.classList.remove('playerX');
            grille.classList.remove('playerO');
        });
    }

    grilles.forEach( (grille, index) => {
        grille.addEventListener('click', () => userAction(grille, index));
    });

    tableResetBtn.addEventListener('click', resetTable);
});

