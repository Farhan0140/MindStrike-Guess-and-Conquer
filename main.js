
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



attack.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * 100) + 1;

    call_fun((val) => {
        let player_diff = Math.abs(rand - val);
        let player_accuracy = Math.round( (1 - (player_diff / 100)) * 100 );
        let current_enemy_life = enemy_life.ariaValueNow;
        
        current_enemy_life -= player_accuracy;

        enemy_life.ariaValueNow = current_enemy_life;

        if(enemy_life.ariaValueNow <= 0) {
            enemy_life.style.width = `${0}%`;
            window.location.replace("win.html");
            return;
        } else {
            const x = Math.floor((enemy_life.ariaValueNow / enemy_life.ariaValueMax) * 100);
            enemy_life.style.width = `${x}%`;
            enemy_life.innerText = enemy_life.ariaValueNow;
            massage.innerText = `You Attack enemy with power ${player_accuracy}`;
        }


        call(rand, (val) => {
            let current_player_life = player_life.ariaValueNow;
            current_player_life -= val;

            player_life.ariaValueNow = current_player_life;

            if(player_life.ariaValueNow <= 0) {
                player_life.style.width = `${0}%`;
                window.location.replace("lost.html");
            } else {
                const x = Math.floor((player_life.ariaValueNow / player_life.ariaValueMax) * 100);
                player_life.style.width = `${x}%`;
                player_life.innerText = player_life.ariaValueNow;
                massage.innerText += ` (-_-) Enemy Attack you with power ${val}`;
            }
        });
        
    });
    

});


function call(rand, callback) {
    const enemy_guessed_number = Math.floor(Math.random() * 100) + 1;
    let enemy_diff = Math.abs(rand - enemy_guessed_number);
    let enemy_accuracy = Math.round( (1 - (enemy_diff / 100)) * 100 );

    callback(enemy_accuracy);
};


defend.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * 100) + 1;

    call(rand, (val) => {
        massage.innerText = `You Defend Enemy's Attack (-_-) Enemy Attack you with power ${val}`;   
    });
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

    });

    if(heal_times <= 0) {
        document.getElementById("heal").disabled  = true;
    }
});
