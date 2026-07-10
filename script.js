var demonios = [
  "Dark",
  "Evil",
  "Devil",
  "Black",
  "White",
  "Street",
  "Nightmare",
  "Dragão",
  "Irmão",
  "Mau",
  "Malvado",
  "Hater",
];

var objectos = [
  "Maxxing",
  "Bomba",
  "Hater",
  "Kick",
  "Demon",
  "Cabrão",
  "Sapato",
  "Brother",
  "Meia",
  "Carro",
  "Prato",
  "Menino",
  "Cavalo",
  "Garoto",
  "Snaita",
  "Sapatilha",
  "Jarda",
  "Visceral",
  "Fabinho",
  "Amiguinho",
  "Grooming",
  "Miúdo",
  "Blhef",
];

var nameHistory = [];

function generateName(triple) {
  if (triple) {
    return String.format(
      "{0} {1} {2}",
      demonios[Math.round(Math.random() * (demonios.length - 1))],
      demonios[Math.round(Math.random() * (demonios.length - 1))],
      objectos[Math.round(Math.random() * (objectos.length - 1))],
    );
  }
  return String.format(
    "{0} {1}",
    demonios[Math.round(Math.random() * (demonios.length - 1))],
    objectos[Math.round(Math.random() * (objectos.length - 1))],
  );
}

function AskQuestion() {
  var current = document.getElementById("lblAnswer").innerText;
  if (current && current.trim() !== "") {
    nameHistory.unshift(current);
    if (nameHistory.length > 2) nameHistory.pop();
  }

  var isTriple = document.getElementById("tripleMode").checked;
  document.getElementById("lblAnswer").innerText = generateName(isTriple);

  var h1 = document.getElementById("history1");
  var h2 = document.getElementById("history2");
  var label = document.getElementById("historyLabel");
  h1.innerText = nameHistory[0] || "";
  h2.innerText = nameHistory[1] || "";
  label.style.display = nameHistory.length > 0 ? "" : "none";
}

function resetAnswer() {
  document.getElementById("lblAnswer").innerText = "...";
}
