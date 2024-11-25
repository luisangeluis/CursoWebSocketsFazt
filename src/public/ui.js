import { saveNote } from "./sockets.client.js";

const notesSection = document.querySelector("#notesSection");

const noteUI = (note) => {
  const article = document.createElement("article");

  article.innerHTML = `
    <h2>${note.title}</h2>
    <div>
      <button>Update</button>
      <button>Delete</button>
    </div>
    <p>${note.description}</p>
  `;

  return article;
};

export const renderNotes = (notes) =>
  notes.forEach((note) => notesSection.append(noteUI(note)));

export const onHandleSubmit = (e) => {
  e.preventDefault();

  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const appendNote = (note) => {
  notesSection.append(noteUI(note));
};
