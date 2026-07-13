var words = [
  "Super",
  "Atrasado",
  "Dark",
  "Mega",
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
  "Cope",
  "Coper",
  "Maxxing",
  "Bomba",
  "Kick",
  "Ponta pé",
  "Homem",
  "Man",
  "Woman",
  "Mulher",
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

function getRandomWord(excludeWords) {
  var availableWords = words.filter(function(word) {
    return excludeWords.indexOf(word) === -1;
  });
  return availableWords[Math.round(Math.random() * (availableWords.length - 1))];
}

function generateName(triple) {
  if (triple) {
    var word1 = getRandomWord([]);
    var word2 = getRandomWord([word1]);
    var word3 = getRandomWord([word1, word2]);
    return String.format("{0} {1} {2}", word1, word2, word3);
  }
  var word1 = getRandomWord([]);
  var word2 = getRandomWord([word1]);
  return String.format("{0} {1}", word1, word2);
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
