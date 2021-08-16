/* все переменные */
/* переменные для переплавки */
let Copper_img = document.getElementById("Copper-img");
let diamong_img = document.getElementById("diamong-img");
let gold_img = document.getElementById("gold-img");
let iron_img = document.getElementById("iron-img");


/* переменные для печки */
let stove_button = document.getElementById("stove_button");
let popUp_stove = document.getElementById("popUp_stove");
let flag_stove = 1;


/* переменные текста */
var Copper_indicator_txt = document.getElementById("Copper_indicator_txt");
var diamong_indicator_txt = document.getElementById("diamong_indicator_txt");
var gold_indicator_txt = document.getElementById("gold_indicator_txt");
var iron_indicator_txt = document.getElementById("iron_indicator_txt");


/* все функции */
/* печка ↓ */
function stove() {
    stove_button.addEventListener("click", function() {
        if (flag_stove == 1) {
            popUp_stove.style.display = "inline";
            flag_stove -= 1;
        } else {
            popUp_stove.style.display = "none";
            flag_stove += 1;
        }
    });
}
/* печка ↑ */


/* обновление всех переменных */
function update_3() {
    /* обновление руд */
    window.copper_ore_TXT.textContent = "меди : " + window.copper_ore_count;
    window.diamong_ore_TXT.textContent = "алмазов : " + window.diamong_ore_count;
    window.gold_ore_TXT.textContent = "золото : " + window.gold_ore_count;
    window.iron_ore_TXT.textContent = "железо : " + window.iron_ore_count;
    window.coat_ore_TXT.textContent = "угля : " + window.coat_ore_count;

    /* обновление слитков */
    diamong_indicator_txt.textContent = "Алмазных слитков : " + window.diamong_ingot;
    Copper_indicator_txt.textContent = "Медных слитков : " + window.copper_ingot;
    gold_indicator_txt.textContent = "Золотых слитков : " + window.gold_ingot;
    iron_indicator_txt.textContent = "Железных слитков : " + window.iron_ingot;
}


/* переплавка медной руды в слиток */
function function_copper_ingot() {
    Copper_img.addEventListener("click", function() {
        if (window.copper_ore_count >= 1 && window.coat_ore_count >= 1) {
            function copper_ingot_stove() {
                window.copper_ingot += 1 * window.copper_ingot_multiplier;
                update_3();
            }

            window.copper_ore_count -= 1;
            window.coat_ore_count -= 1;
            update_3();
            setTimeout(copper_ingot_stove, 1000);
        }
    });
}


/* переплавка алмазной руды в слиток */
function function_diamong_ingot() {
    diamong_img.addEventListener("click", function() {
        if (window.diamong_ore_count >= 1 && window.coat_ore_count >= 1) {
            function diamong_ingot_stove() {
                window.diamong_ingot += 1 * window.diamong_ingot_multiplier;
                update_3();
            }

            window.diamong_ore_count -= 1;
            window.coat_ore_count -= 1;
            update_3();
            setTimeout(diamong_ingot_stove, 5000);
        }
    });
}


/* переплавка золотой руды в слиток */
function function_gold_ingot() {
    gold_img.addEventListener("click", function() {
        if (window.gold_ore_count >= 1 && window.coat_ore_count >= 1) {
            function gold_ingot_stove() {
                window.gold_ingot += 1 * window.gold_ingot_multiplier;
                update_3();
            }

            window.gold_ore_count -= 1;
            window.coat_ore_count -= 1;
            update_3();
            setTimeout(gold_ingot_stove, 3000);
        }
    });
}


/* переплавка железной руды в слиток */
function function_iron_ingot() {
    iron_img.addEventListener("click", function() {
        if (window.iron_ore_count >= 1 && window.coat_ore_count >= 1) {
            function iron_ingot_stove() {
                window.iron_ingot += 1 * window.iron_ingot_multiplier;
                update_3();
            }

            window.iron_ore_count -= 1;
            window.coat_ore_count -= 1;
            update_3();
            setTimeout(iron_ingot_stove, 2000);
        }
    });
}


/* вызов всех функции */
function_copper_ingot();
function_diamong_ingot();
function_gold_ingot();
function_iron_ingot();
stove();