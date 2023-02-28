const pinkBtn = document.getElementsByClassName("colorBtn pink");
const notepadSpace = document.getElementsByClassName("notepadSpace");
const addNewCard = (notepadSpace) => {
	const newNote = document.createElement("div");
	document.body.notepadSpace.appendChild(newNote);
	newNote.textContent = "your note";
	newNote.classList.add("note");
	return;
	// newNote.classList.add(`${color}`);
};

pinkBtn.addEventListener("click", addNewCard(notepadSpace));
