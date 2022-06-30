// alert("connected")

const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');

const p1button = document.querySelector('#p11button');
const p2button = document.querySelector('#p22button');
const resetbutton = document.querySelector('#reset1');
const playtoselect = document.querySelector('#playto')

let p2score = 0;
let p1score = 0;
let isGameOver = false;
let winningscore = 3;
p1button.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningscore) {
            isGameOver = true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1display.textContent = p1score;
    }
})
p2button.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningscore) {
            isGameOver = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;

        }
        p2display.textContent = p2score;
    }
})
function kunal() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;

    p1display.textContent = 0;
    p2display.textContent = 0;

    p1display.classList.remove('has-text-success', 'has-text-danger');
    p2display.classList.remove('has-text-success', 'has-text-danger');

    p1button.disabled = false;
    p2button.disabled = false;
}
playtoselect.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    kunal();
})
resetbutton.addEventListener('click', kunal)
