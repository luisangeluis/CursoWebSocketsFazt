import { loadNotes, onNewNote } from "./sockets.client.js";
import { appendNote, onHandleSubmit, renderNotes } from "./ui.js";

loadNotes(renderNotes);
onNewNote(appendNote);

const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", onHandleSubmit);
