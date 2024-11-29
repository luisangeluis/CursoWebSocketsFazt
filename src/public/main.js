import { loadNotes, onNewNote, onSelectedNote } from "./sockets.client.js";
import { appendNote, fillForm, onHandleSubmit, renderNotes } from "./ui.js";

loadNotes(renderNotes);
onNewNote(appendNote);
onSelectedNote(fillForm);

const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", onHandleSubmit);
