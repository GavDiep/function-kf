// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById("search").addEventListener("click", searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById("input-name").value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === "po" || name === "dragon warrior") {
    // Update page to Po
    updatePage("Po", "po", "Buddy, I am the Dragon Warrior");
  } else if (name === "tigress" || name === "master tigress") {
    // Update page to Tigress
    updatePage("Master Tigress", "tigress", "That was pretty hardcore!");
  } else if (name === "mantis" || name === "master mantis") {
    // Update page to Mantis
    updatePage("Master Mantis", "mantis", "Fear the bug!");
  } else if (name === "monkey" || name === "master monkey") {
    // Update page to Monkey
    updatePage("Master Monkey", "monkey", "We should hang out.");
  } else if (name === "crane" || name === "master crane") {
    // Update page to Crane
    updatePage(
      "Master Crane",
      "crane",
      "You can chain my body, but you will never chain my warrior spirit!"
    );
  } else if (name === "viper" || name === "master viper") {
    // Update page to Viper
    updatePage("Master Viper", "viper", "I don't need to bite to fight!");
  } else if (name === "shifu" || name === "master shifu") {
    // Update page to Master Shifu
    updatePage("Master Shifu", "shifu", "There is now a Level Zero");
  } else if (name === "ping" || name === "mr. ping") {
    // Update page to Mr. Ping
    updatePage(
      "Mr. Ping",
      "mr-ping",
      "We are noodle folk, broth runs through our veins!"
    );
  } else if (name === "soothsayer") {
    updatePage("Soothsayer", "soothsayer", "I see... I see... pain.");
  } else if (name === "kai") {
    updatePage("Kai", "kai", "You must be the Dragon Warrior.");
  } else if (name === "croc" || name === "master croc") {
    updatePage(
      "Master Croc",
      "croc",
      "The only hero in this town is a dead one!"
    );
  } else if (name === "oogway") {
    updatePage(
      "Oogway",
      "oogway",
      "My time has come, you must continue your journey without me."
    );
  } else if (name === "boss wolf" || name === "wolf") {
    updatePage("Boss Wolf", "boss-wolf", "Chew on that, tubby!");
  } else if (name === "shen" || name === "peacock") {
    updatePage("Lord Shen", "shen", "Nothing stands in my way.");
  } else if (name === "tai lung") {
    updatePage("Tai Lung", "tai-lung", "Our battle will be legendary!");
  } else if (name === "storming ox" || name === "ox") {
    updatePage(
      "Storming Ox",
      "storming-ox",
      "Its time to surrender, panda. Kung fu is dead."
    );
  } else {
    // Update page to Question Mark
    updatePage("?????", "question-mark", "Character Not Found");
  }
}

function updatePage(name, img, quote) {
  document.getElementById("character-name").innerHTML = name;
  document.getElementById("main-img").src = `img/${img}.png`;
  document.getElementById("quote").innerHTML = `${quote}`;
}
