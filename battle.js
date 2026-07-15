var battleHistory = [];
var currentNames = ["", ""];
var battleLocked = false;

function nextBattle() {
  battleLocked = false;
  currentNames = [generateName(false), generateName(false)];
  document.getElementById("name1").innerText = currentNames[0];
  document.getElementById("name2").innerText = currentNames[1];

  var card1 = document.getElementById("card1");
  var card2 = document.getElementById("card2");
  card1.className = "name-card";
  card2.className = "name-card";
}

function pickWinner(index) {
  if (battleLocked) return;
  battleLocked = true;

  var winner = currentNames[index];
  var loser = currentNames[1 - index];

  var winCard = document.getElementById("card" + (index + 1));
  var loseCard = document.getElementById("card" + (2 - index));

  winCard.className = "name-card winner";
  loseCard.className = "name-card loser";

  battleHistory.unshift({ winner: winner, loser: loser });
  if (battleHistory.length > 3) battleHistory.pop();

  updateBattleHistory();

  setTimeout(nextBattle, 1100);
}

function updateBattleHistory() {
  var label = document.getElementById("battleHistoryLabel");
  var list = document.getElementById("battleHistoryList");

  label.style.display = battleHistory.length > 0 ? "" : "none";

  list.innerHTML = battleHistory
    .map(function (b) {
      return (
        '<div class="battle-record">' +
        '<span class="battle-record-winner">' +
        b.winner +
        "</span>" +
        '<span class="battle-record-vs"> vs </span>' +
        '<span class="battle-record-loser">' +
        b.loser +
        "</span>" +
        "</div>"
      );
    })
    .join("");
}

nextBattle();
