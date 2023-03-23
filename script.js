const pinkBtn = document.querySelector(".pink");
const purpleBtn = document.querySelector(".purple");
const blueBtn = document.querySelector(".blue");
const greenBtn = document.querySelector(".green");
const removeAllBtn = document.querySelector(".removeAllBtn");
const notepadSpace = document.querySelector(".notepadSpace");

if ((notepadSpace.childNodes.length = 0)) {
	const emptyMessage = document.createElement("p");
	emptyMessage.textContent = "Looks like you have no notes right now!";
	notepadSpace.append(emptyMessage);
}
const addNewCard = (color) => {
	const newNote = document.createElement("div");
	const newRemoveBtn = document.createElement("button");
	const noteText = document.createElement("p");
	// const heartBtn = document.createElement("button");
	newNote.classList.add("note");
	notepadSpace.append(newNote);
	newNote.classList.add(`${color}`);
	newRemoveBtn.textContent = "✖️";
	newRemoveBtn.classList.add("removeBtn");
	newRemoveBtn.style.alignSelf = "end";
	newRemoveBtn.classList.add("removeAllBtn");
	newNote.append(newRemoveBtn);
	// newNote.append(heartBtn);
	// heartBtn.textContent = "❤️";
	// heartBtn.addEventListener("click", function () {
	// 	console.log(notesArr);
	// 	newNote = notesArr[0];
	// });
	newRemoveBtn.addEventListener("click", function () {
		newRemoveBtn.parentElement.remove();
	});
	noteText.textContent = "Click this text to write your note ✏️";
	newNote.append(noteText);
	newNote.classList.add("noteText");
	noteText.addEventListener("click", function () {
		let popupText = prompt("Please write your note here:");
		noteText.textContent = `${popupText}`;
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
