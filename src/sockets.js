import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNoTes = async () => {
      const notes = await Note.find();
      //console.log(notes);
      io.emit("loadnotes", notes);
    };

    emitNoTes();

    socket.on("newnote", async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();

      console.log(savedNote);
    });
  });
};
