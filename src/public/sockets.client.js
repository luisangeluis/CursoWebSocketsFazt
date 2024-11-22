const socket = io();

export const loadNotes = async () => {
  socket.on("loadnotes", (data) => {
    console.log(data);
  });
};

export const saveNote = (title, description) => {
  socket.emit("newnote", { title, description });
};
