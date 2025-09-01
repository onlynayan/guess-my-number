# Guess My Number! 🎯

## Description
This is a simple yet engaging web-based number guessing game built using **vanilla HTML, CSS, and JavaScript**. The game randomly generates a secret number between **1 and 20**, and the player must guess it by entering numbers into an input field. Based on the guess, the game provides feedback (e.g., “Too High!” or “Too Low!”) and updates the score. If the player guesses correctly, the background changes to green, the secret number is revealed, and the highscore is updated if applicable. The game can be reset at any time using the **“Again!”** button.

The project demonstrates fundamental web development concepts, with a strong focus on **JavaScript for logic** and **DOM manipulation** for dynamic UI updates. It’s a great beginner-friendly project to showcase **event handling**, **conditional logic**, and **real-time user interactions**—without any external libraries or frameworks.

---

## Features
- **Random Number Generation:** A new secret number is generated each game.
- **Real-Time Feedback:** Messages and score updates via DOM changes.
- **Score and Highscore Tracking:** Starts at 20; decreases with wrong guesses; updates highscore within the session.
- **Win/Lose States:** Visual changes on win (green background, wider number box) and lose (score to 0).
- **Reset Functionality:** Restores the game to initial state with one click.
- **Responsive Design:** Basic layout that works on desktop and mobile (using flexbox and viewport meta).
- **Retro Aesthetic:** Pixelated “Press Start 2P” font for a fun, arcade-like feel.

---

## How I Used JavaScript and DOM Manipulation

This project heavily relies on **vanilla JavaScript** for game logic and **DOM (Document Object Model) manipulation** to update the UI dynamically without page reloads. No frameworks like React or jQuery were used, making it a pure demonstration of core JS skills. Below are the key aspects, with code snippets from `script.js`.

### 1) Setup and Variables

Global variables track the game state:

```js
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
```

- **`secretNumber`**: Generated randomly using `Math.random()` and `Math.trunc()` for an integer between **1 and 20**.  
- **`score`** and **`highScore`**: Manage game progress and records.

A helper function for cleaner DOM updates:

```js
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
```

This uses `querySelector` to target the `.message` element and update its `textContent` property, avoiding repetitive code.

---

### 2) Event Listeners for User Interactions

JavaScript adds interactivity via event listeners on buttons:

```js
document.querySelector('.check').addEventListener('click', function () {
  // Game logic here
});
```

The `'click'` event on the **“Check!”** button triggers the core game logic.

Similarly for the **“Again!”** button:

```js
document.querySelector('.again').addEventListener('click', function () {
  // Reset logic here
});
```

---

### 3) DOM Manipulation in Action

**Getting User Input:**

```js
const guess = Number(document.querySelector('.guess').value);
```
Uses `querySelector` to get the input field’s value, then converts it to a number.

**Conditional Logic and Feedback:**

- If no guess:
  ```js
  displayMessage('🚫 No Number!');
  ```

- If correct:
  ```js
  displayMessage('🍾 Correct Number!');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  ```
  Updates text content, background color, and element width directly via the `style` property. Also updates the **highscore** if applicable.

- If wrong:
  ```js
  displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
  score--;
  document.querySelector('.score').textContent = score;
  ```
  Uses a ternary operator for the feedback message; decrements `score` and updates the `.score` element’s text.

- On loss: sets score to 0 and shows the lose message.

**Resetting the Game:**

```js
score = 20;
secretNumber = Math.trunc(Math.random() * 20 + 1);
displayMessage('Start guessing...');
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
```
Regenerates the secret number and resets DOM elements (text, values, styles) to their initial state.

---

### 4) Highscore Update

On a win, the game checks whether the current score beats the highscore and updates the DOM accordingly:

```js
if (score > highScore) {
  highScore = score;
  document.querySelector('.highscore').textContent = highScore;
}
```

This is a simple conditional with a DOM update for persistence within the browser session.

---

## Installation and Usage

**Clone the repository:**
```bash
git clone https://github.com/onlynayan/guess-my-number.git
cd guess-my-number
```

**Run locally:**
- Simply open `index.html` in your web browser (no server needed), **or**
- Serve the folder with a lightweight HTTP server:
  ```bash
  # Python 3
  python -m http.server 5500
  # Visit http://localhost:5500
  ```

**Play the game:**
1. Enter a number (1–20) and click **“Check!”**.  
2. Guess until you win or lose.  
3. Click **“Again!”** to restart.

---

## Technologies Used
- **HTML5:** Structure and elements (input, buttons, sections).
- **CSS3:** Styling, layout (flexbox, absolute positioning), and fonts (Google Fonts: “Press Start 2P”).
- **JavaScript (ES6):** Logic, events, and DOM manipulation.

---

## Code Structure
```
index.html   # Main structure with header, input, buttons, and display areas
style.css    # Layout, colors, and retro styling
script.js    # All JavaScript logic (linked at the end of index.html)
```

---

## License
MIT — feel free to learn from and adapt this project.
