
# 🔥 MindStrike Guess and Conquer - Number Guessing Combat Game

Welcome to **MindStrike Guess and Conquer**, a number-guessing-based combat game! Fight your way through multiple enemies, level up, and use your strategic options to attack, defend, or heal. 

## Live Link
```
https://farhan0140.github.io/MindStrike-Guess-and-Conquer/
```
## 📦 Features
- 🎯 Attack by guessing numbers between 1–100
- 🛡️ Defend against enemy attacks (limited uses)
- 💊 Heal yourself (limited uses, with increasing power per level)
- 🎨 Dynamic level progression with changing enemies, health bars, and backgrounds
- 🖼️ Preloaded images for smooth transitions between enemies
- 🎮 Win and lose states with navigation to win.html or lost.html


## 🕹️ Gameplay Mechanics
#### Attack
    - Random number between 1–100 is generated.
    - Player enters their guess.
    - Accuracy determines how much damage is dealt to the enemy.
    - Enemy also attacks back with its own guess.

#### Defend
    - Uses up one defend count.
    - Reduces damage from enemy and reflects it back.
    - Cannot be used after defend_times reaches 0.

#### Heal
    - Uses up one heal count.
    - Player must guess again; accuracy determines healing power.
    - Higher levels increase base healing power.



## 🧠 Logic Summary
    - Both player and enemy health are represented using progress bars and ariaValueNow
    - Level increases on enemy defeat and triggers:
        - New enemy image and name
        - New health pool
        - Updated background visuals
    - Game ends when:
        - Player health reaches 0 → redirects to lost.html
        - Player defeats level 10 → redirects to win.html


## 🧙 Level Progression

Each level introduces a new enemy with an image and increased difficulty.

| Level | Enemy Name             | Max HP |
|-------|------------------------|--------|
| 1     | Tutorial               | 50     |
| 2     | Nightfang the Harbinger| 100    |
| 3     | Crimson Seraphim      | 200    |
| 4     | Nocthare              | 300    |
| 5     | Voidflare the Abyss   | 400    |
| 6     | Voidflame             | 500    |
| 7     | Bloodshade            | 600    |
| 8     | Seraphmortis          | 700    |
| 9     | Nyxion                | 800    |
| 10    | Abyssus               | 1000   |



## 🖼️ Image Preloading
Images are preloaded using:
<br>
```
const preloadedImages = {};
const imagePaths = {
    2: 'Images/2.jpg',
    ...
    10: 'Images/10.jpg'
};
```

## 📁 File Structure
```
.
├── index.html
├── style.css
├── game.js
├── win.html
├── lost.html
└── Images/
    ├── 2.jpg
    ├── 3.jpg
    └── ...

```

## 🎮 Winning & Losing

- You win a level if the enemy's HP drops to 0.
- You lose if your HP reaches 0.
- Level 10 win redirects to `win.html`.
- Losing redirects to `lost.html`.

## 🛠️ Requirements

- A browser supporting ES6 JavaScript.
- HTML structure with required element IDs (`player-life`, `enemy-life`, `massage`, etc.).

## ✅ How to Play

1. Enter a number and click **Save**.
2. Choose an action: Attack, Defend, or Heal.
3. Watch how well you performed and react.
4. Progress through all 10 levels to beat the game.

Happy battling! ⚔️

## ⭐ **Star This Repository!**
If you enjoy this game 😑, don't forget to **star** it!
