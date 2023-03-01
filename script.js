const pinkBtn = document.querySelector(" .pink");
const notepadSpace = document.querySelector(".notepadSpace");

const addNewCard = (color) => {
	const newNote = document.createElement("div");
	newNote.textContent = "your note";
	newNote.classList.add("note");
	notepadSpace.append(newNote);
	newNote.classList.add(`${color}`);
};
// addNewCard("pink");
// pinkBtn.addEventListener("click", addNewCard(pink));
pinkBtn.addEventListener("click", function () {
	addNewCard("pink");
});
