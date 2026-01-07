let balance = 100;
const cost = 10;
// Note: Replace these emojis with 'image1.png', 'image2.png' etc. if using files
const symbols = ["💎", "🍋", "🍒", "🔔", "⭐", "🍀"];

const spinBtn = document.getElementById('spin-btn');
const balanceEl = document.getElementById('balance');
const reels = [document.getElementById('reel1'), document.getElementById('reel2'), document.getElementById('reel3')];

spinBtn.addEventListener('click', () => {
    if (balance < cost) return;

    balance -= cost;
    balanceEl.innerText = balance;
    spinBtn.disabled = true;
    document.getElementById('status-text').innerText = "Spinning...";

    let counter = 0;
    const maxSpins = 10; // Total duration = 10 * 200ms = 2 seconds

    const interval = setInterval(() => {
        let currentValues = [];
        
        reels.forEach(reel => {
            const rand = symbols[Math.floor(Math.random() * symbols.length)];
            reel.innerText = rand; // Change to reel.innerHTML = `<img src="${rand}">` for images
            currentValues.push(rand);
        });

        counter++;

        if (counter >= maxSpins) {
            clearInterval(interval);
            checkWinner(currentValues);
        }
    }, 200);
});

function checkWinner(results) {
    const [a, b, c] = results;
    let win = 0;

    if (a === b && b === c) {
        win = 100;
        showWin("JACKPOT!", win);
    } else if (a === b || b === c || a === c) {
        win = 20;
        showWin("SMALL WIN!", win);
    } else {
        document.getElementById('status-text').innerText = "Try Again!";
    }

    balance += win;
    balanceEl.innerText = balance;
    
    if (balance >= cost) {
        spinBtn.disabled = false;
    } else {
        document.getElementById('status-text').innerText = "GAME OVER";
    }
}

function showWin(type, amount) {
    document.getElementById('win-type').innerText = type;
    document.getElementById('win-amount').innerText = amount;
    document.getElementById('win-overlay').classList.remove('hidden');
}

function closeWin() {
    document.getElementById('win-overlay').classList.add('hidden');
    document.getElementById('status-text').innerText = "Good Luck!";
}