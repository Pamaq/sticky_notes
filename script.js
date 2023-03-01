const pinkBtn = document.querySelector(".pink");
const purpleBtn = document.querySelector(".purple");
const blueBtn = document.querySelector(".blue");
const greenBtn = document.querySelector(".green");
const removeAllBtn = document.querySelector(".removeAllBtn");
const notepadSpace = document.querySelector(".notepadSpace");

const addNewCard = (color) => {
	const newNote = document.createElement("div");
	const newRemoveBtn = document.createElement("button");
	newNote.textContent = "your text here";
	newNote.classList.add("note");
	notepadSpace.append(newNote);
	newNote.classList.add(`${color}`);
	newRemoveBtn.textContent = "X";
	newNote.append(newRemoveBtn);
	newRemoveBtn.classList.add("removeAllBtn");
	newRemoveBtn.addEventListener("click", function () {
		newRemoveBtn.parentElement.remove();
	});
};

pinkBtn.addEventListener("click", function () {
	addNewCard("pink");
});
purpleBtn.addEventListener("click", function () {
	addNewCard("purple");
});
blueBtn.addEventListener("click", function () {
	addNewCard("blue");
});
greenBtn.addEventListener("click", function () {
	addNewCard("green");
});
removeAllBtn.addEventListener("click", function () {
	while (notepadSpace.firstChild) {
		notepadSpace.removeChild(notepadSpace.firstChild);
	}
});
