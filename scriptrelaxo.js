document.addEventListener("DOMContentLoaded", () => {
  console.log("js works");
  alert("Welcome, this is Snorlax. He is a bit lazy, so you have to take care of him! Dont let the bars go to zero, or he might die!")
  startTimer();
});

// Variablen und Elemente
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let levelbar = document.getElementById("loadingbar");
let levelbar1 = document.getElementById("healthbar");
let levelbar2 = document.getElementById("feedbar");
let levelbar3 = document.getElementById("sleepbar");
let rlcard = document.getElementById("relaxocontainer");
let heading = document.getElementById("heading");
let image = document.getElementById("image");
let icon1 = document.getElementById("icon1");
let stats = document.getElementById("status");
let modeui = document.getElementById("modeui");
let mode = document.getElementById("mode");
let strengths = document.getElementById("a");
let intellegences = document.getElementById("b");
let agilitys = document.getElementById("c");
let durabilitys = document.getElementById("d");

const boostContainer = document.createElement("div");
boostContainer.id = "boostContainer";
document.body.appendChild(boostContainer);

// Globale Variablen
let xp = 0;
let level = 0;
let width = 0;
let width1 = 100;
let width2 = 100;
let width3 = 100;
let HP = 10000;

let strength = 0;
let intellgence = 0;
let agility = 0;
let durability = 0;

// Event-Listener für Stats und Mode
stats.addEventListener("click", function () {
  modeui.style.display = "grid";
  document.getElementById("e").textContent = strength;
  document.getElementById("f").textContent = intellgence;
  document.getElementById("g").textContent = agility;
  document.getElementById("h").textContent = durability;
  stats.style.backgroundColor = "rgb(61, 61, 61)";
  stats.style.color = "rgb(202, 203, 204)";
  mode.style.backgroundColor = "rgb(202, 203, 204)";
  mode.style.color = "rgb(61, 61, 61)";
});

mode.addEventListener("click", function () {
  modeui.style.display = "none";
  stats.style.backgroundColor = "rgb(202, 203, 204)";
  stats.style.color = "rgb(61, 61, 61)";
  mode.style.backgroundColor = "rgb(61, 61, 61)";
  mode.style.color = "rgb(202, 203, 204)";
});

// Timer-Funktionen
let currenttime = 0;
let timerstart = false;
let timer;
let hasshrunk = false;
let hasshruk2 = false;
let hasIncreasedWidth1 = false;

function startTimer() {
  if (!timerstart) {
    timerstart = true;
    timer = setInterval(() => {
      currenttime++;
      saveProgress();

      if (currenttime >= 120*60 && !hasshrunk) {
        shrinkBars();
        hasshrunk = true;
        Reset();
      }


        // Überprüfe, ob eine der Bars auf 0 gefallen ist
      if (width1 <= 0 || width2 <= 0 || width3 <= 0) {
          alert("One bar has shrunked, Snorlax dies.");
          window.close(); // Schließt das aktuelle Browserfenster
          localStorage.clear()
      }

      // Wenn width2 ODER width3 unter 50% sind, verringere width1
      if ((width2 <= 50 || width3 <= 50) && width1 > 0 && !hasshruk2) {
        width1 = Math.max(width1 - 20, 0);
        levelbar1.style.width = width1 + "%";
        levelbar1.style.transition = "width 2s ease-in-out";
        hasshruk2 = true;
        hasIncreasedWidth1 = false;
      }

      // Wenn width2 und width3 über 50% sind, erhöhe width1 (nur einmal)
      if (width2 > 50 && width3 > 50 && !hasIncreasedWidth1) {
        width1 = Math.min(width1 + 40, 100);
        levelbar1.style.width = width1 + "%";
        levelbar1.style.transition = "width 2s ease-in-out";
        hasIncreasedWidth1 = true;
        hasshruk2 = false;
      }

      // Begrenze die Werte auf maximal 100 und minimal 0
      width1 = Math.min(Math.max(width1, 0), 100);
      width2 = Math.min(Math.max(width2, 0), 100);
      width3 = Math.min(Math.max(width3, 0), 100);

      console.log("Timer läuft:", currenttime);
    }, 1000);
  }
}

function shrinkBars() {
  width2 = Math.max(width2 - 20, 0);
  width3 = Math.max(width3 - 10, 0);

  levelbar2.style.width = width2 + "%";
  levelbar3.style.width = width3 + "%";

  levelbar2.style.transition = "width 2s ease-in-out";
  levelbar3.style.transition = "width 2s ease-in-out";

  console.log("Bars shrunk to: " + width2 + "%, " + width3 + "% after " + currenttime + " seconds");
  saveProgress();
}

function Reset() {
  currenttime = 0;
  hasshrunk = false;
  hasshruk2 = false;
  hasIncreasedWidth1 = false;
  console.log("Reset completed");
}

// Hintergrundänderungsfunktionen
function backgroundchange4() {
  let image = document.getElementById("image");
  image.style.opacity = 0;

  setTimeout(() => {
    image.classList.add("sleep");
    image.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    image.style.opacity = 0;
  }, 6500);

  setTimeout(() => {
    image.classList.remove("sleep");
    image.style.opacity = 1;
  }, 7500);
}

function backgroundchange1() {
  let image = document.getElementById("image");
  image.style.opacity = 0;

  setTimeout(() => {
    image.classList.add("eat");
    image.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    image.style.opacity = 0;
  }, 6500);

  setTimeout(() => {
    image.classList.remove("eat");
    image.style.opacity = 1;
  }, 7500);
}

function backgroundchange2() {
  let image = document.getElementById("image");
  image.style.opacity = 0;

  setTimeout(() => {
    image.classList.add("fight");
    image.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    image.style.opacity = 0;
  }, 6500);

  setTimeout(() => {
    image.classList.remove("fight");
    image.style.opacity = 1;
  }, 7500);
}

function backgroundchange3() {
  let image = document.getElementById("image");
  image.style.opacity = 0;

  setTimeout(() => {
    image.classList.add("study");
    image.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    image.style.opacity = 0;
  }, 6500);

  setTimeout(() => {
    image.classList.remove("study");
    image.style.opacity = 1;
  }, 7500);
}

// Partikel-Effekt
function createBoostParticles() {
  const rect = image.getBoundingClientRect();
  boostContainer.style.top = `${rect.top + window.scrollY + rect.height / 2}px`;
  boostContainer.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;

  for (let i = 0; i < 8; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");

    let size = Math.random() * 10 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    let angle = Math.random() * 2 * Math.PI;
    let distance = Math.random() * 100 + 50;

    particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    boostContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1500);
  }
}

// Level-Up-Funktion
function checkLevelUp() {
  document.getElementById("lvl").textContent = "Lv. " + level;

  if (level === 5) {
    document.getElementById("lvl").style.color = "orange";
    createBoostParticles();
    rlcard.classList.add("glow5");
    image.classList.add("lvlup");
  }

  if (level === 10) {
    document.getElementById("lvl").style.color = "red";
    createBoostParticles();
    rlcard.classList.add("glow10");
    image.classList.add("lvlup");
  }

  if (level === 20) {
    document.getElementById("lvl").style.color = "violet";
    createBoostParticles();
    rlcard.classList.add("glow20");
    image.classList.add("lvlup");
  }
}










// Temporärer Reset für alle Buttons (später entfernen)
localStorage.removeItem("button1Data");
localStorage.removeItem("button2Data");
localStorage.removeItem("button3Data");
localStorage.removeItem("button4Data");

// Button 1
button1.addEventListener("click", function () {
  const now = Date.now();
  const storageKey = "button1Data";

  let buttonData = JSON.parse(localStorage.getItem(storageKey)) || {
    usesLeft: 3,
    resetTime: now + (26*60*60*1000)
  };

  if (now > buttonData.resetTime) {
    buttonData.usesLeft = 3;
    button1.style.backgroundColor = "#04B404";
    buttonData.resetTime = now + (26*60*60*1000);
  }

  if (buttonData.usesLeft === 2) button1.style.backgroundColor = "#777777";
  if (buttonData.usesLeft === 1) button1.style.backgroundColor = "#ABABAB";
  if (buttonData.usesLeft === 0) button1.style.backgroundColor = "#E8E8E8";

  if (buttonData.usesLeft > 0) {
    buttonData.usesLeft--;
    localStorage.setItem(storageKey, JSON.stringify(buttonData));
    const newWidth2 = Math.min(width2 + 100, 100);
    xp += 25;
    width += 25;
    strength += 10;
    durability += 10;
    document.getElementById("e").textContent = strength;
    document.getElementById("f").textContent = intellgence;
    document.getElementById("g").textContent = agility;
    document.getElementById("h").textContent = durability;

    setTimeout(() => {
      width2 = newWidth2;
      levelbar2.style.width = width2 + "%";
      levelbar2.style.transition = "width 2s ease-in-out";
    }, 7000);

    backgroundchange1();

    if (xp >= 125 || width >= 125) {
      level += 1;
      HP *= 2;
      xp = 0;
      width = 0;
      document.getElementById("heading").textContent = "HP " + HP;
      document.getElementById("lvl").textContent = "Lv. " + level;
      checkLevelUp();
      saveProgress();
    }

    levelbar.style.width = width + "%";
    levelbar.style.transition = "width 2s ease-in-out";
    saveProgress();

  } else {
    alert("Button 1: No uses left! new ones in: " + 
          Math.round((buttonData.resetTime - now)/(60*60*1000)) + "h");
  }
});

// Button 2
button2.addEventListener("click", function () {
  const now = Date.now();
  const storageKey = "button2Data";

  let buttonData = JSON.parse(localStorage.getItem(storageKey)) || {
    usesLeft: 2,
    resetTime: now + (26*60*60*1000)
  };

  if (now > buttonData.resetTime) {
    buttonData.usesLeft = 2;
    button2.style.backgroundColor = "#84C5FA";
    buttonData.resetTime = now + (26*60*60*1000);
  }

  if (buttonData.usesLeft === 1) button2.style.backgroundColor = "#ABABAB";
  if (buttonData.usesLeft === 0) button2.style.backgroundColor = "#E8E8E8";

  if (buttonData.usesLeft > 0) {
    buttonData.usesLeft--;
    localStorage.setItem(storageKey, JSON.stringify(buttonData));
   
    width = parseInt(levelbar.style.width) || 0;
    xp += 50;
    width += 50;
    strength += 20;
    intellgence += 5;
    agility += 10;
    durability += 10;
    HP *= 0.9;
    document.getElementById("e").textContent = strength;
    document.getElementById("f").textContent = intellgence;
    document.getElementById("g").textContent = agility;
    document.getElementById("h").textContent = durability;
   

    if (xp >= 125 || width >= 125) {
      level += 1;
      HP *= 2;
      xp = 0;
      width = 0;
      document.getElementById("heading").textContent = "HP " + HP;
      document.getElementById("lvl").textContent = "Lv. " + level;
      checkLevelUp();
      saveProgress();
    }

    setTimeout(() => {
      levelbar.style.width = width + "%";
      levelbar.style.transition = "width 2s ease-in-out";
    }, 7000);

    backgroundchange2();
    saveProgress();

  } else {
    alert("Button 2: No uses left! new ones in: " + 
          Math.round((buttonData.resetTime - now)/(60*60*1000)) + "h");
  }
});

// Button 3
button3.addEventListener("click", function () {
  const now = Date.now();
  const storageKey = "button3Data";

  let buttonData = JSON.parse(localStorage.getItem(storageKey)) || {
    usesLeft: 2,
    resetTime: now + (26*60*60*1000)
  };

  if (now > buttonData.resetTime) {
    buttonData.usesLeft = 2;
    button3.style.backgroundColor = "#FF9900";
    buttonData.resetTime = now + (26*60*60*1000);
  }

  if (buttonData.usesLeft === 1) button3.style.backgroundColor = "#ABABAB";
  if (buttonData.usesLeft === 0) button3.style.backgroundColor = "#E8E8E8";

  if (buttonData.usesLeft > 0) {
    buttonData.usesLeft--;
    localStorage.setItem(storageKey, JSON.stringify(buttonData));
    
    width = parseInt(levelbar.style.width) || 0;
    xp += 25;
    width += 25;
    intellgence += 50;
    durability += 10;
    

    if (xp >= 125 || width >= 125) {
      level += 1;
      HP *= 2;
      xp = 0;
      width = 0;
      document.getElementById("heading").textContent = "HP " + HP;
      document.getElementById("lvl").textContent = "Lv. " + level;
      checkLevelUp();
      saveProgress();
    }

    setTimeout(() => {
      levelbar.style.width = width + "%";
      levelbar.style.transition = "width 2s ease-in-out";
    }, 7000);

    backgroundchange3();
    saveProgress();

  } else {
    alert("Button 3: No uses left! new ones in: " + 
          Math.round((buttonData.resetTime - now)/(60*60*1000)) + "h");
  }
});

// Button 4
button4.addEventListener("click", function () {
  const now = Date.now();
  const storageKey = "button4Data";

  let buttonData = JSON.parse(localStorage.getItem(storageKey)) || {
    usesLeft: 1,
    resetTime: now + (26*60*60*1000)
  };

  if (now > buttonData.resetTime) {
    buttonData.usesLeft = 1;
    button4.style.backgroundColor = "#521A80";
    buttonData.resetTime = now + (26*60*60*1000);
  }

  if (buttonData.usesLeft === 0) button4.style.backgroundColor = "#E8E8E8";

  if (buttonData.usesLeft > 0) {
    buttonData.usesLeft--;
    localStorage.setItem(storageKey, JSON.stringify(buttonData));
    width = parseInt(levelbar.style.width) || 0;
    width3 = parseInt(levelbar3.style.width) || 0;
    xp += 50;
    width += 50;
    width3 = Math.min(width3 + 100, 100);
    strength += 20;
    intellgence += 1;
    agility += 10;
    durability += 10;
    

    if (xp >= 125 || width >= 125) {
      level += 1;
      HP *= 2;
      xp = 0;
      width = 0;
      document.getElementById("heading").textContent = "HP " + HP;
      document.getElementById("lvl").textContent = "Lv. " + level;
      checkLevelUp();
      saveProgress();
      
    }

    setTimeout(() => {
      levelbar.style.width = width + "%";
      levelbar.style.transition = "width 2s ease-in-out";
      levelbar3.style.width = width3 + "%";
      levelbar3.style.transition = "width 2s ease-in-out";
    }, 7000);

    backgroundchange4();
    saveProgress();

  } else {
    alert("Button 4: No uses left! new ones in: " + 
          Math.round((buttonData.resetTime - now)/(60*60*1000)) + "h");
  }
});








function loadUser() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  
  if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "index.html.html";  
  }

  const progressData = JSON.parse(localStorage.getItem(loggedInUser + "_progress"));
  if (progressData) {
    document.getElementById("lvl").textContent = progressData.level;
    document.getElementById("e").textContent = progressData.e;
    document.getElementById("f").textContent = progressData.f;
    document.getElementById("g").textContent = progressData.g;
    document.getElementById("h").textContent = progressData.h;
    document.getElementById("heading").textContent = progressData.HP;
    document.getElementById("healthbar").style.width = progressData.health;
    document.getElementById("feedbar").style.width = progressData.feed;
    document.getElementById("sleepbar").style.width = progressData.sleep;
    document.getElementById("loadingbar").style.width = progressData.loading;

    HP = parseInt(progressData.HP) || 0;
    strength = parseInt(progressData.e) || 0;
    intellgence = parseInt(progressData.f) || 0;
    agility = parseInt(progressData.g) || 0;
    durability = parseInt(progressData.h) || 0;

    // Button-Daten laden
    if (progressData.button1Data) {
      localStorage.setItem("button1Data", JSON.stringify(progressData.button1Data));
      updateButtonColor(button1, progressData.button1Data.usesLeft, 3, ["#04B404", "#56B26B", "#7DB38A", "#D6F2DF"]);
    }
    if (progressData.button2Data) {
      localStorage.setItem("button2Data", JSON.stringify(progressData.button2Data));
      updateButtonColor(button2, progressData.button2Data.usesLeft, 2, ["#84C5FA", "#B8E2FD", "#D9EAF5"]);
    }
    if (progressData.button3Data) {
      localStorage.setItem("button3Data", JSON.stringify(progressData.button3Data));
      updateButtonColor(button3, progressData.button3Data.usesLeft, 2, ["#FF9900", "#D8BC6D", "#DACFB0"]);
    }
    if (progressData.button4Data) {
      localStorage.setItem("button4Data", JSON.stringify(progressData.button4Data));
      updateButtonColor(button4, progressData.button4Data.usesLeft, 1, ["#521A80", "#CFB6E5"]);
    }
  }
}

// Hilfsfunktion zum Aktualisieren der Button-Farben
function updateButtonColor(button, usesLeft, maxUses, colors) {
  if (usesLeft === maxUses) {
    button.style.backgroundColor = colors[0];
  } else if (usesLeft === maxUses - 1) {
    button.style.backgroundColor = colors[1];
  } else if (usesLeft === maxUses - 2) {
    button.style.backgroundColor = colors[2];
  } else {
    button.style.backgroundColor = colors[colors.length - 1];
  }
}




loadUser();

// Fortschritt speichern, wenn der Benutzer eine Bar ändert
function saveProgress() {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    return;
  }

  const health = document.getElementById("healthbar").style.width;
  const feed = document.getElementById("feedbar").style.width;
  const sleep = document.getElementById("sleepbar").style.width;
  const level = document.getElementById("lvl").textContent;
  const e = document.getElementById("e").textContent;
  const f = document.getElementById("f").textContent;
  const g = document.getElementById("g").textContent;
  const h = document.getElementById("h").textContent;
  const loading = document.getElementById("loadingbar").style.width;
  const HP = document.getElementById("heading").textContent;

  // Button-Daten hinzufügen
  const button1Data = JSON.parse(localStorage.getItem("button1Data")) || { usesLeft: 3, resetTime: Date.now() + (26*60*60*1000) };
  const button2Data = JSON.parse(localStorage.getItem("button2Data")) || { usesLeft: 2, resetTime: Date.now() + (26*60*60*1000) };
  const button3Data = JSON.parse(localStorage.getItem("button3Data")) || { usesLeft: 2, resetTime: Date.now() + (26*60*60*1000) };
  const button4Data = JSON.parse(localStorage.getItem("button4Data")) || { usesLeft: 1, resetTime: Date.now() + (26*60*60*1000) };

  console.log("Speichere Fortschritt:", { 
    health, feed, sleep, level, e, f, g, h, loading, HP,
    button1Data, button2Data, button3Data, button4Data 
  });

  // Fortschritt speichern
  const progressData = { 
    health, feed, sleep, level, loading, HP, e, f, g, h,
    button1Data, button2Data, button3Data, button4Data 
  };
  localStorage.setItem(loggedInUser + "_progress", JSON.stringify(progressData));
  console.log("saved up progress");
}


localStorage.clear();
