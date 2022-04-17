//values

const gamescreen = document.querySelector("#gamescreen");
const startscreen = document.querySelector("#startscreen");
const start = document.querySelector("#startbutton");
const instr = document.querySelector("#inst");
const stats = document.querySelector("#stat");
const backtomainpage = document.querySelector("#backtomainpage");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const roundplayer1 = document.querySelector("#roundplayer1");
const roundplayer2 = document.querySelector("#roundplayer2");
const gamerules = document.querySelector("#gamerules");
let player1name = "Első játékos";
let player2name = "Második játékos";
let reset = document.querySelector("#reset");
const namebutton = document.querySelector("#namebutton");
const closerules = document.querySelector("#closerules");
let displayp1 = document.getElementById("displayplayer1name");
let displayp2 = document.getElementById("displayplayer2name");
const wehaveawinner = document.getElementById("wehaveawinner");
const winningtext = document.getElementById("winningtext");
let winnername = document.getElementById("winnername");
let winningimage = document.getElementById("winningimage");
const bannerArray = [
  "imgs/banner1.png",
  "imgs/overlay1.png",
  "imgs/overlay2.png",
  "imgs/overlay 3.png",
  "imgs/overlay 4.png",
  "imgs/overlay 5.png",
  "imgs/overlay 6.png",
  "imgs/overlay 7.png",
  "imgs/overlay 8.png",
];
const banner = document.querySelector("#banner");
const A1 = document.querySelector(".A1");
const A2 = document.querySelector(".A2");
const A3 = document.querySelector(".A3");
const A4 = document.querySelector(".A4");
const B1 = document.querySelector(".B1");
const B2 = document.querySelector(".B2");
const B3 = document.querySelector(".B3");
const B4 = document.querySelector(".B4");
const C1 = document.querySelector(".C1");
const C2 = document.querySelector(".C2");
const C3 = document.querySelector(".C3");
const C4 = document.querySelector(".C4");
const D1 = document.querySelector(".D1");
const D2 = document.querySelector(".D2");
const D3 = document.querySelector(".D3");
const D4 = document.querySelector(".D4");
const tria = document.querySelector("#tria");
const circ = document.querySelector("#circ");
const cros = document.querySelector("#cros");
const squa = document.querySelector("#squa");
const choice = [tria, circ, cros, squa];
const winningcombo = ["triangle", "square", "circle", "cross"];
const row1 = [A1, A2, A3, A4];
const row2 = [B1, B2, B3, B4];
const row3 = [C1, C2, C3, C4];
const row4 = [D1, D2, D3, D4];
const col1 = [A1, B1, C1, D1];
const col2 = [A2, B2, C2, D2];
const col3 = [A3, B3, C3, D3];
const col4 = [A4, B4, C4, D4];
const q1 = [A3, A4, B3, B4];
const q2 = [C3, C4, D3, D4];
const q3 = [C1, C2, D1, D2];
const q4 = [A1, A2, B1, B2];
let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let qu1 = 0;
let qu2 = 0;
let qu3 = 0;
let qu4 = 0;
let OTc = 2;
let PTc = 2;
let OCic = 2;
let PCic = 2;
let OCrc = 2;
let PCrc = 2;
let OSc = 2;
let PSc = 2;
let sel; //a kiválssztott bábu értéke
let selectedform;
let gameboardselected;
let token;
let gameresumed;
let PCrosscount = document.querySelector("#PCrc");
let OCrosscount = document.querySelector("#OCrc");
let PSquacount = document.querySelector("#PSc");
let OSquacount = document.querySelector("#OSc");
let PTricount = document.querySelector("#PTc");
let OTricount = document.querySelector("#OTc");
let PCircount = document.querySelector("#PCic");
let OCircount = document.querySelector("#OCic");

const formt = document.querySelector(".formt");
let formselection = document.querySelector("#formselection");
let gameboard = document.querySelector("#gameboard");
const triangle = document.querySelector("#triangle");
let square = document.querySelectorAll("#square");
let circle = document.querySelectorAll("#circle");
let cross = document.querySelectorAll("#cross");
//booleans
let gameon = true;
let firstround = true;
let player1turn = true;
let player2turn = false;
let placed = false;
let triangleselected = false;
let squareselected = false;
let circleselected = false;
let crossselected = false;

//fejléc
function displayBanner() {}
function rotation() {
  setInterval(() => {
    let num = Math.floor(Math.random() * 9);
    banner.src = bannerArray[num];
  }, 900);
}
window.onload = rotation();

//reset
reset.addEventListener("click", () => {
  for (let i = 0; i < 4; i++) {
    row1[i].classList.remove("triangle", "square", "cross", "circle", "filled");
    row1[i].innerHTML = "";
    row2[i].classList.remove("triangle", "square", "cross", "circle", "filled");
    row2[i].innerHTML = "";
    row3[i].classList.remove("triangle", "square", "cross", "circle", "filled");
    row3[i].innerHTML = "";
    row4[i].classList.remove("triangle", "square", "cross", "circle", "filled");
    row4[i].innerHTML = "";
    wehaveawinner.style.visibility = "hidden";
    startscreen.style.visibility = "visible";
    for (let i = 0; i < 4; i++) {
      choice[i].classList.remove("PUnav");
      choice[i].classList.remove("OUnav");
      choice[i].style.backgroundColor = "rgb(146, 107, 158)";
      choice[i].style.opacity = "100%";
    }
    gamescreen.style.backgroundColor = "rgb(211, 178, 221)";
    OTc = 2;
    PTc = 2;
    OCic = 2;
    PCic = 2;
    OCrc = 2;
    PCrc = 2;
    OSc = 2;
    PSc = 2;
    PTricount.innerHTML = PTc;
OTricount.innerHTML = OTc;
PCircount.innerHTML = PCic;
OCircount.innerHTML = OCic;
PSquacount.innerHTML = PSc;
OSquacount.innerHTML = OSc;
PCrosscount.innerHTML = PCrc;
OCrosscount.innerHTML = OCrc;
  }
});

//név beolvasás
namebutton.addEventListener("click", () => {
  if (player1.value != "") {
    player1name = player1.value;
  } else {
    player1name = "Első játékos";
  }
  if (player2.value != "") {
    player2name = player2.value;
  } else {
    player2name = "Második játékos";
  }
  displayp1.innerHTML = player1name;
  displayp2.innerHTML = player2name;
  roundsign1.innerHTML = player1name;
  roundsign2.innerHTML = player2name;
});

//nevek displayeleése - névválasztás, körjelzés, győztes
displayp1.innerHTML = player1name;
displayp2.innerHTML = player2name;
roundsign1.innerHTML = player1name;
roundsign2.innerHTML = player2name;

//a kezdő visibility értékek

gamescreen.style.visibility = "hidden";
gamerules.style.visibility = "hidden";
roundplayer2.style.visibility = "hidden";
wehaveawinner.style.visibility = "hidden";

//játékszabály megjelenítés
instr.addEventListener("click", () => {
  gamerules.style.visibility = "visible";
});
closerules.addEventListener("click", () => {
  gamerules.style.visibility = "hidden";
});

//START GOMB

start.addEventListener("click", () => {
  startscreen.style.visibility = "hidden";
  gamescreen.style.visibility = "visible";
  gameon = true;
  roundplayer2.style.visibility = "hidden";
  roundplayer1.style.visibility = "visible";
});

PTricount.innerHTML = PTc;
OTricount.innerHTML = OTc;
PCircount.innerHTML = PCic;
OCircount.innerHTML = OCic;
PSquacount.innerHTML = PSc;
OSquacount.innerHTML = OSc;
PCrosscount.innerHTML = PCrc;
OCrosscount.innerHTML = OCrc;
//GAMEON
gamescreen.style.backgroundColor = "rgb(211, 178, 221)";
for (let i = 0; i < 4; i++) {
  if (choice[i].classList.contains("PUnav")) {
    choice[i].style.backgroundColor = "rgb(215, 189, 223)";
    choice[i].style.opacity = "50%";
  } else {
    choice[i].style.backgroundColor = "rgb(146, 107, 158)";
    choice[i].style.opacity = "100%";
  }
}
if (gameon == true) {
  //játéktér- bábuválasztás
  formselection.addEventListener("click", (event) => {
    let td = event.target.closest("td");

    if (!td) return;
    if (player1turn == true) {
      if (td.classList.contains("PUnav")) {
        return;
      }
    }
    if (player2turn == true) {
      if (td.classList.contains("OUnav")) {
        return;
      }
    }

    if (!formselection.contains(td)) return;
    selectform(td);
  });
  function selectform(td) {
    if (selectedform) {
      if (player1turn == true && !selectedform.classList.contains("PUnav")) {
        selectedform.style.backgroundColor = "rgb(146, 107, 158)";
      }
      if (player2turn == true && !selectedform.classList.contains("OUnav")) {
        selectedform.style.backgroundColor = "rgb(190, 89, 7)";
      }
      selectedform.classList.remove("selected");
    }

    selectedform = td;
    selectedform.style.backgroundColor = "#cecece";
    selectedform.classList.add("selected");
    selectionexists = true;
  }

  //játéktér-lerakás
  gameboard.addEventListener("click", (event) => {
    let td = event.target.closest("td");
    sel = document.querySelector(".selected");
    if (sel.classList.contains("triangle")) {
      sel = "triangle";
    } else if (sel.classList.contains("circle")) {
      sel = "circle";
    } else if (sel.classList.contains("cross")) {
      sel = "cross";
    } else if (sel.classList.contains("square")) {
      sel = "square";
    }
    if (!td) return;
    if (td.classList.contains(sel)) return;

    if (!gameboard.contains(td)) return;
    selectgame(td);
  });
}
//bábu lerakása - 1kör

function selectgame(td) {
  gameboardselected = td;

  if (!gameboardselected.classList.contains("filled")) {
    let toplace = document.querySelector(".selected");
    if (
      toplace.classList.contains("triangle") &&
      !gameboardselected.classList.contains("triangle")
    ) {
      if (player1turn == true) {
        gameboardselected.innerHTML = "<img src='imgs/PTriangle.png'/>";
        PTc = PTc - 1;
        PTricount.innerHTML = PTc;
        if (PTc < 1) {
          toplace.classList.add("PUnav");
        }
      } else {
        gameboardselected.innerHTML = "<img src='imgs/OTriangle.png'/>";
        OTc = OTc - 1;
        if (OTc < 1) {
          toplace.classList.add("OUnav");
        }
      }
      token = "triangle";
      gameboardselected.classList.add("filled", "triangle");
    }
    if (
      toplace.classList.contains("circle") &&
      !gameboardselected.classList.contains("circle")
    ) {
      if (player1turn == true) {
        gameboardselected.innerHTML = "<img src='imgs/PCircle.png'/>";
        PCic = PCic - 1;
        if (PCic < 1) {
          toplace.classList.add("PUnav");
        }
      } else {
        gameboardselected.innerHTML = "<img src='imgs/OCircle.png'/>";
        OCic = OCic - 1;
        if (OCic < 1) {
          toplace.classList.add("OUnav");
        }
      }
      token = "circle";
      gameboardselected.classList.add("filled", "circle");
    }
    if (
      toplace.classList.contains("cross") &&
      !gameboardselected.classList.contains("cross")
    ) {
      if (player1turn == true) {
        gameboardselected.innerHTML = "<img src='imgs/PCross.png'/>";
        PCrc = PCrc - 1;
        if (PCrc < 1) {
          toplace.classList.add("PUnav");
        }
      } else {
        gameboardselected.innerHTML = "<img src='imgs/OCross.png'/>";
        OCrc = OCrc - 1;
        if (OCrc < 1) {
          toplace.classList.add("OUnav");
        }
      }
      token = "cross";
      gameboardselected.classList.add("filled", "cross");
    }
    if (
      toplace.classList.contains("square") &&
      !gameboardselected.classList.contains("square")
    ) {
      if (player1turn == true) {
        gameboardselected.innerHTML = "<img src='imgs/PSquare.png'/>";
        PSc = PSc - 1;
        if (PSc < 1) {
          toplace.classList.add("PUnav");
        }
      } else {
        gameboardselected.innerHTML = "<img src='imgs/OSquare.png'/>";
        OSc = OSc - 1;
        if (OSc < 1) {
          toplace.classList.add("OUnav");
        }
      }
      token = "square";
      gameboardselected.classList.add("filled", "square");
    }
    PTricount.innerHTML = PTc;
    OTricount.innerHTML = OTc;
    PCircount.innerHTML = PCic;
    OCircount.innerHTML = OCic;
    PSquacount.innerHTML = PSc;
    OSquacount.innerHTML = OSc;
    PCrosscount.innerHTML = PCrc;
    OCrosscount.innerHTML = OCrc;
    if (gameboardselected.classList.contains("A1")) {
      for (let i = 0; i < 4; i++) {
        row1[i].classList.add(token);
        col1[i].classList.add(token);
        q4[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("A2")) {
      for (let i = 0; i < 4; i++) {
        row1[i].classList.add(token);
        col2[i].classList.add(token);
        q4[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("A3")) {
      for (let i = 0; i < 4; i++) {
        row1[i].classList.add(token);
        col3[i].classList.add(token);
        q1[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("A4")) {
      for (let i = 0; i < 4; i++) {
        row1[i].classList.add(token);
        col4[i].classList.add(token);
        q1[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("B1")) {
      for (let i = 0; i < 4; i++) {
        row2[i].classList.add(token);
        col1[i].classList.add(token);
        q4[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("B2")) {
      for (let i = 0; i < 4; i++) {
        row2[i].classList.add(token);
        col2[i].classList.add(token);
        q4[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("B3")) {
      for (let i = 0; i < 4; i++) {
        row2[i].classList.add(token);
        col3[i].classList.add(token);
        q1[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("B4")) {
      for (let i = 0; i < 4; i++) {
        row2[i].classList.add(token);
        col4[i].classList.add(token);
        q1[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("C1")) {
      for (let i = 0; i < 4; i++) {
        row3[i].classList.add(token);
        col1[i].classList.add(token);
        q3[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("C2")) {
      for (let i = 0; i < 4; i++) {
        row3[i].classList.add(token);
        col2[i].classList.add(token);
        q3[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("C3")) {
      for (let i = 0; i < 4; i++) {
        row3[i].classList.add(token);
        col3[i].classList.add(token);
        q2[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("C4")) {
      for (let i = 0; i < 4; i++) {
        row3[i].classList.add(token);
        col4[i].classList.add(token);
        q2[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("D1")) {
      for (let i = 0; i < 4; i++) {
        row4[i].classList.add(token);
        col1[i].classList.add(token);
        q3[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("D2")) {
      for (let i = 0; i < 4; i++) {
        row4[i].classList.add(token);
        col2[i].classList.add(token);
        q3[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("D3")) {
      for (let i = 0; i < 4; i++) {
        row4[i].classList.add(token);
        col3[i].classList.add(token);
        q2[i].classList.add(token);
      }
    } else if (gameboardselected.classList.contains("D4")) {
      for (let i = 0; i < 4; i++) {
        row4[i].classList.add(token);
        col4[i].classList.add(token);
        q2[i].classList.add(token);
      }
    }

    for (let i = 0; i < 4; i++) {
      let cList = row1[i].classList;
      if (cList.contains("filled")) {
        r1 = r1 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = row2[i].classList;
      if (cList.contains("filled")) {
        r2 = r2 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = row3[i].classList;
      if (cList.contains("filled")) {
        r3 = r3 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = row4[i].classList;
      if (cList.contains("filled")) {
        r4 = r4 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = col1[i].classList;
      if (cList.contains("filled")) {
        c1 = c1 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = col2[i].classList;
      if (cList.contains("filled")) {
        c2 = c2 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = col3[i].classList;
      if (cList.contains("filled")) {
        c3 = c3 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = col4[i].classList;
      if (cList.contains("filled")) {
        c4 = c4 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = q1[i].classList;
      if (cList.contains("filled")) {
        qu1 = qu1 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = q2[i].classList;
      if (cList.contains("filled")) {
        qu2 = qu2 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = q3[i].classList;
      if (cList.contains("filled")) {
        qu3 = qu3 + 1;
      }
    }
    for (let i = 0; i < 4; i++) {
      let cList = q4[i].classList;
      if (cList.contains("filled")) {
        qu4 = qu4 + 1;
      }
    }

    //winning condition, winnerscreen
    if (
      r1 == 4 ||
      r2 == 4 ||
      r3 == 4 ||
      r4 == 4 ||
      c1 == 4 ||
      c2 == 4 ||
      c3 == 4 ||
      c4 == 4 ||
      qu1 == 4 ||
      qu2 == 4 ||
      qu3 == 4 ||
      qu4 == 4
    ) {
      console.log("gyozelem");
      if (player1turn == true) {
        winnername.innerHTML = player1name;
        wehaveawinner.style.backgroundColor = "rgb(211, 178, 221)";
        winningimage.innerHTML = "<img src='imgs/aP.png'/>";
      } else {
        winnername.innerHTML = player2name;
        wehaveawinner.style.backgroundColor = "rgb(230, 181, 117)";
        winningimage.innerHTML = "<img src='imgs/aO.png'/>";
      }
      gameon = false;
      gamescreen.style.visibility = "hidden";
      roundplayer2.style.visibility = "hidden";
      roundplayer1.style.visibility = "hidden";
      wehaveawinner.style.visibility = "visible";
      player1turn = false;
      player2turn = false;
    }
    console.log(gameboard);
    console.log(r1, r2, r3, r4, c1, c2, c3, c4, qu1, qu2, qu3, qu4);
    r1 = 0;
    r2 = 0;
    (r3 = 0), (r4 = 0);
    c1 = 0;
    c2 = 0;
    c3 = 0;
    c4 = 0;
    qu1 = 0;
    qu2 = 0;
    qu3 = 0;
    qu4 = 0;
    if (player1turn == true) {
      player1turn = false;
      player2turn = true;
    } else {
      player1turn = true;
      player2turn = false;
    }
    for (let i = 0; i < 4; i++) {
      if (player1turn == true && !gameon == false) {
        roundplayer2.style.visibility = "hidden";
        roundplayer1.style.visibility = "visible";
        gamescreen.style.backgroundColor = "rgb(211, 178, 221)";
        if (choice[i].classList.contains("PUnav")) {
          choice[i].style.backgroundColor = "rgb(215, 189, 223)";
          choice[i].style.opacity = "50%";
        } else {
          choice[i].style.backgroundColor = "rgb(146, 107, 158)";
          choice[i].style.opacity = "100%";
        }
      }
      if (player2turn == true && !gameon == false) {
        roundplayer1.style.visibility = "hidden";
        roundplayer2.style.visibility = "visible";
        gamescreen.style.backgroundColor = "rgb(230, 181, 117)";

        if (choice[i].classList.contains("OUnav")) {
          choice[i].style.backgroundColor = "rgb(236, 185, 143)";
          choice[i].style.opacity = "50%";
        } else {
          choice[i].style.backgroundColor = "rgb(190, 89, 7)";
          choice[i].style.opacity = "100%";
        }
      }
    }
    toplace.classList.remove("selected");
  }
}
