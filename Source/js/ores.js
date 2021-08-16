/* все Глобальные переменные */
/* индикаторы */
var copper_ore_TXT = document.getElementById("copper_ore_TXT");
var diamong_ore_TXT = document.getElementById("diamong_ore_TXT");
var gold_ore_TXT = document.getElementById("gold_ore_TXT");
var iron_ore_TXT = document.getElementById("iron_ore_TXT");
var coat_ore_TXT = document.getElementById("coat_ore_TXT");


/* Глобальные счётчики Руд */
var copper_ore_count = 0;
var diamong_ore_count = 0;
var gold_ore_count = 0;
var iron_ore_count = 0;
var coat_ore_count = 0;

/* Глобальные счётчики слитков */
var copper_ingot = 0;
var diamong_ingot = 0;
var gold_ingot = 0;
var iron_ingot = 0;

/* Глобальный счётчик скапованей за раз */
var mine_per_click_copper = 1;
var mine_per_click_diamong = 1;
var mine_per_click_gold = 1;
var mine_per_click_iron = 1;
var mine_per_click_coat = 1;



/* Глобальный счётчик слитков за переплавку */
var copper_ingot_multiplier = 1;
var diamong_ingot_multiplier = 1;
var gold_ingot_multiplier = 1;
var iron_ingot_multiplier = 1;

/* локальные счетчики для того чтоб добычи руды */
const For_mining_copper = 1;
const For_mining_diamong = 10;
const For_mining_gold = 5;
const For_mining_iron = 3;
const For_mining_coal = 2;

/* счётчики */
let copper_ore = 1;
let diamong_ore = 1;
let gold_ore = 1;
let iron_ore = 1;
let coal_ore = 1;


/* функции */
/* обновление всех переменных */
function update_2() {
    copper_ore_TXT.textContent = "меди : " + copper_ore_count;
    diamong_ore_TXT.textContent = "алмазов : " + diamong_ore_count;
    gold_ore_TXT.textContent = "золото : " + gold_ore_count;
    iron_ore_TXT.textContent = "железо : " + iron_ore_count;
    coat_ore_TXT.textContent = "угля : " + coat_ore_count;
}




/* Медная руда */
$('#copper_ore').mouseup(function(event) {
    switch (event.which) {
        case 1:
            if (copper_ore >= For_mining_copper) {
                copper_ore_count += 1 * mine_per_click_diamong;
                copper_ore = 1;
                update_2();
            } else {
                copper_ore += 1;
            }
    }
});


/* Алмазная руда */
$('#diamong_ore').mouseup(function(event) {
    switch (event.which) {
        case 1:
            if (diamong_ore >= For_mining_diamong) {
                diamong_ore_count += 1 * mine_per_click_diamong;
                diamong_ore = 1;
                update_2();
            } else {
                diamong_ore += 1;
            }
    }
});


/* Золотая руда */
$('#gold_ore').mouseup(function(event) {
    switch (event.which) {
        case 1:
            if (gold_ore >= For_mining_gold) {
                gold_ore_count += 1 * mine_per_click_gold;
                gold_ore = 1;
                update_2();
            } else {
                gold_ore += 1;
            }
    }
});


/* Железная руда */
$('#iron_ore').mouseup(function(event) {
    switch (event.which) {
        case 1:
            if (iron_ore >= For_mining_iron) {
                iron_ore_count += 1 * mine_per_click_iron;
                iron_ore = 1;
                update_2();
            } else {
                iron_ore += 1;
            }

    }
});


/* Угольная руда */
$('#coat_ore').mouseup(function(event) {
    switch (event.which) {
        case 1:
            if (coal_ore >= For_mining_coal) {
                coat_ore_count += 1 * mine_per_click_coat;
                coal_ore = 1;
                update_2();
            } else {
                coal_ore += 1;
            }
    }
});