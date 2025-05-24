
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
    inputDiv.style.visibility = "hidden";
    
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

    let track_enemy_accuracy;

    call_fun((val) => {
        call(rand, (val) => {
            let current_player_life = player_life.ariaValueNow;
                
            if(level == 1) {
                if(val >= 20) {
                    current_player_life -= 20;
                    track_enemy_accuracy = 20;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 2) {
                if(val >= 40) {
                    current_player_life -= 40;
                    track_enemy_accuracy = 40;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 3) {
                if(val >= 60) {
                    current_player_life -= 60;
                    track_enemy_accuracy = 60;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
            } else if(level == 4) {
                if(val >= 100) {
                    current_player_life -= 100;
                    track_enemy_accuracy = 100;
                } else {
                    current_player_life -= val;
                    track_enemy_accuracy = val;
                }
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
                
                document.getElementById('enemy-img').src = 'Images/image.jpg';
                enemy_life.ariaValueMax = 100;
                enemy_life.ariaValueNow = 100;
                enemy_life.innerText = "100";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                document.getElementById("enemy").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 3) {
                
                document.getElementById('enemy-img').src = 'Images/Kargalgan1.jpg';
                enemy_life.ariaValueMax = 200;
                enemy_life.ariaValueNow = 200;
                enemy_life.innerText = "200";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                document.getElementById("enemy").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 3) {
                
                enemy_life.ariaValueMax = 300;
                enemy_life.ariaValueNow = 300;
                enemy_life.innerText = "300";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                document.getElementById("enemy").style.backgroundColor = 'rgb(235, 235, 235)';
                
            } else if(level == 4) {
                
                enemy_life.ariaValueMax = 500;
                enemy_life.ariaValueNow = 500;
                enemy_life.innerText = "500";
                enemy_life.style.width = "100%";

                document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
                document.getElementById("enemy").style.backgroundColor = 'rgb(235, 235, 235)';
                
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

    document.getElementById("player").style.border = "none";
    document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';

});


function call(rand, callback) {
    const enemy_guessed_number = Math.floor(Math.random() * 100) + 1;
    let enemy_diff = Math.abs(rand - enemy_guessed_number);
    let enemy_accuracy = Math.round( (1 - (enemy_diff / 100)) * 100 );

    callback(enemy_accuracy);
};


let defend_times = 5;


defend.addEventListener("click", () => {
    defend_times--;
    document.getElementById("defend-cnt").innerText = defend_times;

    const rand = Math.floor(Math.random() * 100) + 1;

    call(rand, (val) => {
        massage.innerText = `You Defend Enemy's Attack (-_-) Enemy Attack you with power ${val}`;
        document.getElementById("player").style.border = "3px dashed black";
    });

    if(defend_times <= 0) {
        document.getElementById("defend").disabled  = true;
    }
    document.getElementById("player").style.backgroundColor = 'rgb(235, 235, 235)';
});


let heal_times = 3;

heal.addEventListener("click", () => {
    heal_times--;
    document.getElementById("heal-cnt").innerText = heal_times;

    const rand = Math.floor(Math.random() * 100) + 1;

    call_fun((val) => {

        let player_diff = Math.abs(rand - val);
        let player_accuracy = Math.round( (1 - (player_diff / 100)) * 100 );
        console.log(player_accuracy);
        
        let current_player_life = parseInt(player_life.ariaValueNow);
        console.log("c-b " + current_player_life);

        current_player_life += player_accuracy;
        console.log("c-a " + current_player_life);
        
        if(current_player_life >= player_life.ariaValueMax) {
            player_life.style.width = `${100}%`;
            player_life.ariaValueNow = player_life.ariaValueMax;
            player_life.innerText = player_life.ariaValueNow;
            massage.innerText = `You healed ${player_accuracy}`;
        } else {
            player_life.ariaValueNow = current_player_life;
            const x = Math.floor((player_life.ariaValueNow / player_life.ariaValueMax) * 100);
            player_life.style.width = `${x}%`;
            massage.innerText = `You healed ${player_accuracy}`;
            player_life.innerText = player_life.ariaValueNow;
        }

        document.getElementById("player").style.backgroundColor = 'rgb(169, 255, 174)';

    });

    if(heal_times <= 0) {
        document.getElementById("heal").disabled  = true;
    };

    document.getElementById("player").style.border = "none";
});
