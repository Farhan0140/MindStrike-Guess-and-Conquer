

const preloadedImages = {};

const imagePaths = {
    2: 'Images/2.jpg',
    3: 'Images/3.jpg',
    4: 'Images/4.jpg',
    5: 'Images/5.jpg',
    6: 'Images/6.jpg',
    7: 'Images/7.jpg',
    8: 'Images/8.jpg',
    9: 'Images/9.jpg',
    10: 'Images/10.jpg'
};


for (const level in imagePaths) {

    const img = new Image();
    img.src = imagePaths[level];
    preloadedImages[level] = img;

}



let defend_times = 10;
let heal_times = 10;


const attack = document.getElementById("attack");
const defend = document.getElementById("defend");
const heal = document.getElementById("heal");
const inputDiv = document.getElementById("input-div");
const save_btn = document.getElementById("Save");
const massage = document.getElementById("massage");

const player_life = document.getElementById("player-life");
const enemy_life = document.getElementById("enemy-life");


let latestCallback = null;

save_btn.addEventListener("click", () => {
    const num = document.getElementById("guessed-number");
    let num_1 = parseInt(num.value);
    num.value = '';
    console.log(num_1);

    if (isNaN(num_1) || num_1 > 100 || num_1 <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    inputDiv.style.visibility = "hidden";

    if(defend_times > 0) {
        document.getElementById("defend").disabled  = false;
    }
    if(heal_times > 0) {
        document.getElementById("heal").disabled  = false;
    }

    document.getElementById("attack").disabled  = false;
        
    if (latestCallback) {
        latestCallback(num_1);  
        latestCallback = null;
    }
    
    
});

 

function call_fun(callback) {
    latestCallback = callback;
    inputDiv.hidden = false;
    inputDiv.style.visibility = "visible";
};



let level = 1;



attack.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * 100) + 1;
    console.log(rand);

    let track_enemy_accuracy;

    call_fun((val) => {
        call(rand, (val) => {
            let current_player_life = player_life.ariaValueNow;
                
            if(level == 1) {
                if(val >= 10) {
                    current_player_life -= 10;
                    track_enemy_accuracy = 10;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 2) {
                if(val >= 20) {
                    current_player_life -= 20;
                    track_enemy_accuracy = 20;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 3) {
                if(val >= 30) {
                    current_player_life -= 30;
                    track_enemy_accuracy = 30;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 4) {
                if(val >= 40) {
                    current_player_life -= 40;
                    track_enemy_accuracy = 40;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 5) {
                if(val >= 50) {
                    current_player_life -= 50;
                    track_enemy_accuracy = 50;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 6) {
                if(val >= 60) {
                    current_player_life -= 60;
                    track_enemy_accuracy = 60;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 7) {
                if(val >= 70) {
                    current_player_life -= 70;
                    track_enemy_accuracy = 70;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 8) {
                if(val >= 80) {
                    current_player_life -= 100;
                    track_enemy_accuracy = 100;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 9) {
                if(val >= 90) {
                    current_player_life -= 100;
                    track_enemy_accuracy = 100;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else {
                current_player_life -= val;
                track_enemy_accuracy = val;
            }

            player_life.ariaValueNow = current_player_life;

            if(player_life.ariaValueNow <= 0) {
                player_life.style.width = `${0}%`;
                window.location.replace("lost.html");
            } else {
                const x = Math.floor((player_life.ariaValueNow / player_life.ariaValueMax) * 100);
                player_life.style.width = `${x}%`;
                player_life.innerText = player_life.ariaValueNow;
            }

            document.getElementById("player").style.backgroundColor = 'rgb(250, 158, 158)';
        });

        let player_diff = Math.abs(rand - val);
        let player_accuracy = Math.round( (1 - (player_diff / 100)) * 100 );
        let current_enemy_life = enemy_life.ariaValueNow;
        
        current_enemy_life -= player_accuracy;
        
        enemy_life.ariaValueNow = current_enemy_life;

        if(enemy_life.ariaValueNow <= 0) {

            enemy_life.style.width = `${0}%`;
            massage.innerText = `You Won Level ${level}\n`;
            level++;

            document.getElementById("level-track").innerText = level;

            if(level == 1) {

                
                enemy_life.ariaValueMax = 50;
                enemy_life.ariaValueNow = 50;
                enemy_life.innerText = "50";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                document.getElementById("enemy").style.backgroundColor = 'rgb(235, 235, 235)';
                
                
            } else if(level == 2) {
                
                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[2];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/2.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Nightfang the Harbinger';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "Black Ops One";
                body.style.background = " linear-gradient(135deg, #000000, #1a000f, #2b001a)";

                document.getElementById("input-div").style.background = "linear-gradient(to bottom right,rgb(104, 33, 33),rgb(42, 0, 42))";
                document.getElementById("enemy").style.background = "linear-gradient(to bottom right,rgb(104, 33, 33),rgb(42, 0, 42))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff0033";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff0033, 0 0 10px #99001a, 0 0 15px #660011';
                }
                
                enemy_life.ariaValueMax = 100;
                enemy_life.ariaValueNow = 100;
                enemy_life.innerText = "100";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 3) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[3];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/3.jpg';
                }
                
                document.getElementById('enemy-name').innerText = 'Crimson Seraphim';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Cinzel', serif";
                body.style.background = " linear-gradient(145deg, #0a0000, #1e0a0a, #3c0d0d, #fff0f0) ";

                document.getElementById("input-div").style.background = " linear-gradient(145deg,rgb(27, 0, 0),rgb(51, 14, 14),rgb(81, 20, 20),rgb(247, 204, 204)) ";
                document.getElementById("enemy").style.background = "linear-gradient(145deg,rgb(27, 0, 0),rgb(51, 14, 14),rgb(81, 20, 20),rgb(247, 204, 204)) ";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff1a1a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff1a1a,0 0 10px #b30000,0 0 15px #ff4d4d';
                }

                enemy_life.ariaValueMax = 200;
                enemy_life.ariaValueNow = 200;
                enemy_life.innerText = "200";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
            } else if(level == 4) {

                
                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[4];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/4.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Nocthare';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Cinzel Decorative', sans-serif"
                body.style.background = " linear-gradient(160deg, #0d0d0d, #1a120f, #261b19, #3a1f1f) ";

                document.getElementById("input-div").style.background = " linear-gradient(160deg, #0d0d0d,rgb(57, 38, 32),rgb(61, 43, 40),rgb(79, 42, 42)) ";
                document.getElementById("enemy").style.background = "linear-gradient(160deg, #0d0d0d,rgb(57, 38, 32),rgb(61, 43, 40),rgb(79, 42, 42)) ";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff2a2a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff2a2a,0 0 10px #cc0000,0 0 15px #00e6e6, 0 0 20px #00ffff';
                }
                
                enemy_life.ariaValueMax = 300;
                enemy_life.ariaValueNow = 300;
                enemy_life.innerText = "300";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 5) {
                
                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[5];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/5.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Voidflare the Abyss Reaver';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "Audiowide";
                body.style.background = " linear-gradient(135deg, #05010f, #0b1a2e, #110033)";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(13, 3, 38),rgb(14, 43, 81),rgb(24, 0, 70))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(13, 3, 38),rgb(14, 43, 81),rgb(24, 0, 70))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#00ccff";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #00ccff, 0 0 10px #6600cc, 0 0 15px #ff00cc';
                }

                enemy_life.ariaValueMax = 400;
                enemy_life.ariaValueNow = 400;
                enemy_life.innerText = "400";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 6) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[6];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/6.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Voidflame';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Orbitron', sans-serif";
                body.style.background = " linear-gradient(135deg, #0f0f0f, #1a0033, #330066) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg, #0f0f0f,rgb(41, 3, 78),rgb(69, 2, 136))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg, #0f0f0f,rgb(41, 3, 78),rgb(69, 2, 136))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#d1b3ff";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #8e2eff,0 0 10px #8e2eff,0 0 20px #c16fff,0 0 40px #d580ff';
                }

                enemy_life.ariaValueMax = 500;
                enemy_life.ariaValueNow = 500;
                enemy_life.innerText = "500";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 7) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[7];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/7.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Bloodshade';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Cinzel', serif";
                body.style.background = " linear-gradient(135deg, #0a0a0a, #1b1b1b, #2a0000) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(46, 46, 46),rgb(59, 0, 0))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(46, 46, 46),rgb(59, 0, 0))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff4d4d";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 4px #ff1a1a, 0 0 8px #cc0000, 0 0 16px #ff3333, 0 0 24px #ff0000';
                }

                enemy_life.ariaValueMax = 600;
                enemy_life.ariaValueNow = 600;
                enemy_life.innerText = "600";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 8) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[8];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/8.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Seraphmortis';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'UnifrakturCook', cursive";
                body.style.background = " linear-gradient(135deg, #0d0d0d, #1a1a2e, #260000) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(36, 36, 65),rgb(50, 0, 0))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(36, 36, 65),rgb(50, 0, 0))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff1a1a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 4px #ff0000, 0 0 10px #cc0000, 0 0 20px #ff4d4d, 0 0 30px #ff6666';
                }

                enemy_life.ariaValueMax = 700;
                enemy_life.ariaValueNow = 700;
                enemy_life.innerText = "700";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 9) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[9];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/9.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Nyxion';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Orbitron', sans-serif";
                body.style.background = " linear-gradient(135deg, #020202, #0d0d3a, #001f3f) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(20, 20, 20),rgb(17, 17, 80),rgb(0, 37, 73))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(20, 20, 20),rgb(17, 17, 80),rgb(0, 37, 73))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#00ccff";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 6px #00e6ff, 0 0 12px #0088cc, 0 0 20px #00bfff, 0 0 30px #00ffff';
                }

                enemy_life.ariaValueMax = 800;
                enemy_life.ariaValueNow = 800;
                enemy_life.innerText = "800";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 10) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[10];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/10.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Abyssus';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Teko', sans-serif";
                body.style.background = " linear-gradient(135deg, #0a0a0a, #1a0000, #330000) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(23, 23, 23),rgb(41, 0, 0),rgb(71, 0, 0))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(23, 23, 23),rgb(41, 0, 0),rgb(71, 0, 0))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff1a1a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff1a1a, 0 0 10px #b30000, 0 0 20px #660000, 0 0 30px #ff0000';
                }

                enemy_life.ariaValueMax = 1000;
                enemy_life.ariaValueNow = 1000;
                enemy_life.innerText = "1000";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else {
                window.location.replace("win.html");
                return;
            }

            
        } else {
            
            const x = Math.floor((enemy_life.ariaValueNow / enemy_life.ariaValueMax) * 100);
            enemy_life.style.width = `${x}%`;
            enemy_life.innerText = enemy_life.ariaValueNow;
            massage.innerText = `You Attack enemy with power ${player_accuracy} (-_-) Enemy Attack you with power ${track_enemy_accuracy}`;

            document.getElementById("enemy").style.backgroundColor = 'rgb(250, 158, 158)';
        }
        
        
    });

    document.getElementById("defend").disabled  = true;
    document.getElementById("heal").disabled  = true;

    document.getElementById("player").style.border = "none";
    document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';

});


function call(rand, callback) {
    const enemy_guessed_number = Math.floor(Math.random() * 100) + 1;
    let enemy_diff = Math.abs(rand - enemy_guessed_number);
    let enemy_accuracy = Math.round( (1 - (enemy_diff / 100)) * 100 );

    callback(enemy_accuracy);
};


defend.addEventListener("click", () => {
    defend_times--;
    document.getElementById("defend-cnt").innerText = defend_times;

    const rand = Math.floor(Math.random() * 100) + 1;

    call(rand, (val) => {
        let current_enemy_life = enemy_life.ariaValueNow;
        current_enemy_life -= val;
        
        enemy_life.ariaValueNow = current_enemy_life;

        if(enemy_life.ariaValueNow <= 0) {

            enemy_life.style.width = `${0}%`;
            massage.innerText = `You Won Level ${level}\n`;
            level++;

            document.getElementById("level-track").innerText = level;

            if(level == 1) {

                
                enemy_life.ariaValueMax = 50;
                enemy_life.ariaValueNow = 50;
                enemy_life.innerText = "50";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                document.getElementById("enemy").style.backgroundColor = 'rgb(235, 235, 235)';
                
                
            } else if(level == 2) {
                
                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[2];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/2.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Nightfang the Harbinger';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "Black Ops One";
                body.style.background = " linear-gradient(135deg, #000000, #1a000f, #2b001a)";

                document.getElementById("input-div").style.background = "linear-gradient(to bottom right,rgb(104, 33, 33),rgb(42, 0, 42))";
                document.getElementById("enemy").style.background = "linear-gradient(to bottom right,rgb(104, 33, 33),rgb(42, 0, 42))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff0033";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff0033, 0 0 10px #99001a, 0 0 15px #660011';
                }
                
                enemy_life.ariaValueMax = 100;
                enemy_life.ariaValueNow = 100;
                enemy_life.innerText = "100";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 3) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[3];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/3.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Crimson Seraphim';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Cinzel', serif";
                body.style.background = " linear-gradient(145deg, #0a0000, #1e0a0a, #3c0d0d, #fff0f0) ";

                document.getElementById("input-div").style.background = " linear-gradient(145deg,rgb(27, 0, 0),rgb(51, 14, 14),rgb(81, 20, 20),rgb(247, 204, 204)) ";
                document.getElementById("enemy").style.background = "linear-gradient(145deg,rgb(27, 0, 0),rgb(51, 14, 14),rgb(81, 20, 20),rgb(247, 204, 204)) ";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff1a1a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff1a1a,0 0 10px #b30000,0 0 15px #ff4d4d';
                }

                enemy_life.ariaValueMax = 200;
                enemy_life.ariaValueNow = 200;
                enemy_life.innerText = "200";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
            } else if(level == 4) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[4];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/4.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Nocthare';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Cinzel Decorative', sans-serif"
                body.style.background = " linear-gradient(160deg, #0d0d0d, #1a120f, #261b19, #3a1f1f) ";

                document.getElementById("input-div").style.background = " linear-gradient(160deg, #0d0d0d,rgb(57, 38, 32),rgb(61, 43, 40),rgb(79, 42, 42)) ";
                document.getElementById("enemy").style.background = "linear-gradient(160deg, #0d0d0d,rgb(57, 38, 32),rgb(61, 43, 40),rgb(79, 42, 42)) ";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff2a2a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff2a2a,0 0 10px #cc0000,0 0 15px #00e6e6, 0 0 20px #00ffff';
                }
                
                enemy_life.ariaValueMax = 300;
                enemy_life.ariaValueNow = 300;
                enemy_life.innerText = "300";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 5) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[5];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/5.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Voidflare the Abyss Reaver';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "Audiowide";
                body.style.background = " linear-gradient(135deg, #05010f, #0b1a2e, #110033)";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(13, 3, 38),rgb(14, 43, 81),rgb(24, 0, 70))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(13, 3, 38),rgb(14, 43, 81),rgb(24, 0, 70))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#00ccff";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #00ccff, 0 0 10px #6600cc, 0 0 15px #ff00cc';
                }

                enemy_life.ariaValueMax = 400;
                enemy_life.ariaValueNow = 400;
                enemy_life.innerText = "400";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 6) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[6];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/5.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Voidflame';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Orbitron', sans-serif";
                body.style.background = " linear-gradient(135deg, #0f0f0f, #1a0033, #330066) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg, #0f0f0f,rgb(41, 3, 78),rgb(69, 2, 136))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg, #0f0f0f,rgb(41, 3, 78),rgb(69, 2, 136))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#d1b3ff";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #8e2eff,0 0 10px #8e2eff,0 0 20px #c16fff,0 0 40px #d580ff';
                }

                enemy_life.ariaValueMax = 500;
                enemy_life.ariaValueNow = 500;
                enemy_life.innerText = "500";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 7) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[7];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/7.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Bloodshade';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Cinzel', serif";
                body.style.background = " linear-gradient(135deg, #0a0a0a, #1b1b1b, #2a0000) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(46, 46, 46),rgb(59, 0, 0))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(46, 46, 46),rgb(59, 0, 0))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff4d4d";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 4px #ff1a1a, 0 0 8px #cc0000, 0 0 16px #ff3333, 0 0 24px #ff0000';
                }

                enemy_life.ariaValueMax = 600;
                enemy_life.ariaValueNow = 600;
                enemy_life.innerText = "600";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 8) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[8];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/8.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Seraphmortis';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'UnifrakturCook', cursive";
                body.style.background = " linear-gradient(135deg, #0d0d0d, #1a1a2e, #260000) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(36, 36, 65),rgb(50, 0, 0))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(24, 24, 24),rgb(36, 36, 65),rgb(50, 0, 0))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff1a1a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 4px #ff0000, 0 0 10px #cc0000, 0 0 20px #ff4d4d, 0 0 30px #ff6666';
                }

                enemy_life.ariaValueMax = 700;
                enemy_life.ariaValueNow = 700;
                enemy_life.innerText = "700";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 9) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[9];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/9.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Nyxion';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Orbitron', sans-serif";
                body.style.background = " linear-gradient(135deg, #020202, #0d0d3a, #001f3f) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(20, 20, 20),rgb(17, 17, 80),rgb(0, 37, 73))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(20, 20, 20),rgb(17, 17, 80),rgb(0, 37, 73))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#00ccff";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 6px #00e6ff, 0 0 12px #0088cc, 0 0 20px #00bfff, 0 0 30px #00ffff';
                }

                enemy_life.ariaValueMax = 800;
                enemy_life.ariaValueNow = 800;
                enemy_life.innerText = "800";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 10) {

                const enemyImg = document.getElementById('enemy-img');
                const preloaded = preloadedImages[10];
                
                if (preloaded && preloaded.complete) {
                    enemyImg.src = preloaded.src;
                } else {
                    enemyImg.src = 'Images/10.jpg';
                }

                document.getElementById('enemy-name').innerText = 'Abyssus';
                
                const body = document.querySelector("body");
                body.style.fontFamily = "'Teko', sans-serif";
                body.style.background = " linear-gradient(135deg, #0a0a0a, #1a0000, #330000) ";

                document.getElementById("input-div").style.background = "linear-gradient(135deg,rgb(23, 23, 23),rgb(41, 0, 0),rgb(71, 0, 0))";
                document.getElementById("enemy").style.background = "linear-gradient(135deg,rgb(23, 23, 23),rgb(41, 0, 0),rgb(71, 0, 0))";
                
                let elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.color = "#ff1a1a";
                }
                elements = document.getElementsByClassName('fonts-style');
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.textShadow = '0 0 5px #ff1a1a, 0 0 10px #b30000, 0 0 20px #660000, 0 0 30px #ff0000';
                }

                enemy_life.ariaValueMax = 1000;
                enemy_life.ariaValueNow = 1000;
                enemy_life.innerText = "1000";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else {
                window.location.replace("win.html");
                return;
            }

            
        } else {
            
            const x = Math.floor((enemy_life.ariaValueNow / enemy_life.ariaValueMax) * 100);
            enemy_life.style.width = `${x}%`;
            enemy_life.innerText = enemy_life.ariaValueNow;
            massage.innerText = `You defended the Enemy's Attack ${val} power, and the enemy gets hit by ${val} power`;

            document.getElementById("enemy").style.backgroundColor = 'rgb(250, 158, 158)';
        }

        document.getElementById("player").style.border = "3px dashed white";
    });

    if(defend_times <= 0) {
        document.getElementById("defend").disabled  = true;
    }
    document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
});


heal.addEventListener("click", () => {
    heal_times--;
    document.getElementById("heal-cnt").innerText = heal_times;

    const rand = Math.floor(Math.random() * 100) + 1;

    call_fun((val) => {

        let player_diff = Math.abs(rand - val);
        let player_accuracy = Math.round( (1 - (player_diff / 100)) * 100 );
        
        let current_player_life = parseInt(player_life.ariaValueNow);
        let x = 0;

        if(level == 5) {
            current_player_life += (player_accuracy + 50);
            x = 50;
        } else if(level == 6) {
            current_player_life += (player_accuracy + 150);
            x = 100;
        } else if(level == 7) {
            current_player_life += (player_accuracy + 200);
            x = 200;
        } else if(level == 8) {
            current_player_life += (player_accuracy + 250);
            x = 300;
        } else if(level == 9) {
            current_player_life += (player_accuracy + 300);
            x = 400;
        } else if(level == 10) {
            current_player_life += (player_accuracy + 350);
            x = 500;
        } else {
            current_player_life += player_accuracy;
        }
        
        if(current_player_life >= player_life.ariaValueMax) {
            player_life.style.width = `${100}%`;
            player_life.ariaValueNow = player_life.ariaValueMax;
            player_life.innerText = player_life.ariaValueNow;
            massage.innerText = `You healed ${player_accuracy + x}`;
        } else {
            player_life.ariaValueNow = current_player_life;
            const y = Math.floor((player_life.ariaValueNow / player_life.ariaValueMax) * 100);
            player_life.style.width = `${y}%`;
            massage.innerText = `You healed ${player_accuracy + x}`;
            player_life.innerText = player_life.ariaValueNow;
        }

        document.getElementById("player").style.backgroundColor = 'rgb(169, 255, 174)';

    });

    if(heal_times <= 0) {
        document.getElementById("heal").disabled  = true;
    };

    document.getElementById("player").style.border = "none";
    document.getElementById("attack").disabled  = true;
    document.getElementById("defend").disabled  = true;
    document.getElementById("heal").disabled  = true;
});
