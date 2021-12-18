function displayType(character) {
    var characterType = Character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + "universe!");
    document.getElementById("character").innerHTML = character;
}