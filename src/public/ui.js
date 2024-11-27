import { deleteNote, saveNote } from "./sockets.client.js";

const notesSection = document.querySelector("#notesSection");

const noteUI = (note) => {
  const article = document.createElement("article");

  article.innerHTML = `
    <h2>${note.title}</h2>
    <div>
      <button class="delete" data-id="${note._id}">Delete</button>
      <button class="update" data-note="${note}">Update</button>
    </div>
    <p>${note.description}</p>
  `;

  const btnDelete = article.querySelector(".delete");
  const btnUpdate = article.querySelector(".update");

  btnDelete.addEventListener("click", () => deleteNote(btnDelete.dataset.id));
  btnUpdate.addEventListener("click", () => console.log(btnDelete.dataset.id));

  return article;
};

export const renderNotes = (notes) => {
  notesSection.innerHTML = "";
  notes.forEach((note) => notesSection.append(noteUI(note)));
};

export const appendNote = (note) => {
  notesSection.append(noteUI(note));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const onHandleDeleteNote = () => {
  deleteNote();
};
