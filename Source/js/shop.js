/* все переменные */
/* все переменные кнопки улучшения копание за клик */
let Mine_copper_Upgrade = document.getElementById("Mine_copper_Upgrade");
let Mine_diamong_Upgrade = document.getElementById("Mine_diamong_Upgrade");
let Mine_gold_Upgrade = document.getElementById("Mine_gold_Upgrade");
let Mine_coat_Upgrade = document.getElementById("Mine_coat_Upgrade");
let Mine_Upgrade = document.getElementById("Mine_Upgrade");


/* все переменные улучшения слитков */
let Copper_Upgrade = document.getElementById("Copper_Upgrade");
let Diamong_Upgrade = document.getElementById("Diamong_Upgrade");
let Gold_Upgrade = document.getElementById("Gold_Upgrade");
let Iron_Upgrade = document.getElementById("Iron_Upgrade");


/* information о ценах и магазе */
let information_button = document.getElementById("information_icon");
let popUp_information_store = document.getElementById("popUp_information_store");
let flag_info = 1;


/* все функции */
/* информация о ценах */
function information() {
    information_button.addEventListener("click", function() {
        if (flag_info == 1) {
            popUp_information_store.style.display = "inline";
            flag_info -= 1;
        } else {
            popUp_information_store.style.display = "none";
            flag_info += 1;
        }
    });
}

/* функция каторая показывает сколько сейчас слитков */
function update() {
    window.Copper_indicator_txt.textContent = "Медных слитков : " + window.copper_ingot;
    window.diamong_indicator_txt.textContent = "Алмазных слитков : " + window.diamong_ingot;
    window.gold_indicator_txt.textContent = "Золотых слитков : " + window.gold_ingot;
    window.iron_indicator_txt.textContent = "Железных слитков : " + window.iron_ingot;
    window.coat_ore_TXT.textContent = "угля : " + window.coat_ore_count;
}

/* магазин - кирка медная */
function Mine_Upgrade_copper_store() {
    Mine_copper_Upgrade.addEventListener("click", function() {
        if (window.copper_ingot >= 100 && window.coat_ore_count >= 100) {
            window.copper_ingot -= 100;
            window.coat_ore_count -= 100;

            window.mine_per_click_copper += 1;
            Mine_copper_Upgrade.style.display = "none";
            update();
        }
    });
}

/* магазин - кирка алмазная */
function Mine_Upgrade_diamong_store() {
    Mine_diamong_Upgrade.addEventListener("click", function() {
        if (window.diamong_ingot >= 100 && window.gold_ingot >= 100) {
            window.diamong_ingot -= 100;
            window.gold_ingot -= 100;

            window.mine_per_click_diamong += 1;
            Mine_diamong_Upgrade.style.display = "none";
            update();
        }
    });
}

/* магазин - кирка золотая */
function Mine_Upgrade_gold_store() {
    Mine_gold_Upgrade.addEventListener("click", function() {
        if (window.iron_ingot >= 100 && window.gold_ingot >= 100) {
            window.iron_ingot -= 100;
            window.gold_ingot -= 100;

            window.mine_per_click_gold += 1;
            Mine_gold_Upgrade.style.display = "none";
            update();
        }
    });
}

/* магазин - кирка угольная */
function Mine_Upgrade_coat_store() {
    Mine_coat_Upgrade.addEventListener("click", function() {
        if (window.coat_ore_count >= 200) {
            window.coat_ore_count -= 200;

            window.mine_per_click_coat += 1;
            Mine_coat_Upgrade.style.display = "none";
            update();
        }
    });
}

/* магазин - кирка железная */
function Mine_Upgrade_store() {
    Mine_Upgrade.addEventListener("click", function() {
        if (window.iron_ingot >= 100 && window.coat_ore_count >= 100) {
            window.iron_ingot -= 100;
            window.coat_ore_count -= 100;

            window.mine_per_click_iron += 1;
            Mine_Upgrade.style.display = "none";
            update();
        }
    });
}


/* апгрейд медных слитков + 1 в печке */
function copper_Upgrade_store() {
    Copper_Upgrade.addEventListener("click", function() {
        if (window.copper_ingot >= 200) {
            window.copper_ingot -= 200;
            window.copper_ingot_multiplier += 1;
            Copper_Upgrade.style.display = "none";
            update();
        }
    });
}

/* апгрейд алмазных слитков + 1 в печке */
function diamong_Upgrade_store() {
    Diamong_Upgrade.addEventListener("click", function() {
        if (window.diamong_ingot >= 200) {
            window.diamong_ingot -= 200;
            window.diamong_ingot_multiplier += 1;
            Diamong_Upgrade.style.display = "none";
            update();
        }
    });
}

/* апгрейд золотых слитков + 1 в печке */
function gold_Upgrade_store() {
    Gold_Upgrade.addEventListener("click", function() {
        if (window.gold_ingot >= 200) {
            window.gold_ingot -= 200;
            window.gold_ingot_multiplier += 1;
            Gold_Upgrade.style.display = "none";
            update();
        }
    });
}

/* апгрейд железных слитков + 1 в печке */
function iron_Upgrade_store() {
    Iron_Upgrade.addEventListener("click", function() {
        if (window.iron_ingot >= 200) {
            window.iron_ingot -= 200;
            window.iron_ingot_multiplier += 1;
            Iron_Upgrade.style.display = "none";
            update();
        }
    });
}


/* вызов всех функции */
/* информацих о ценах */
information();

/* вызов всех функции по покупке апгрейдов слитков */
copper_Upgrade_store();
diamong_Upgrade_store();
gold_Upgrade_store();
iron_Upgrade_store();

/* вызов всех функции по добычу руды за клик */
Mine_Upgrade_copper_store();
Mine_Upgrade_diamong_store();
Mine_Upgrade_gold_store();
Mine_Upgrade_coat_store();
Mine_Upgrade_store();