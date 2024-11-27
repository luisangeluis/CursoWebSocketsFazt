import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNoTes = async () => {
      const notes = await Note.find();
      io.emit("server:loadnotes", notes);
    };

    emitNoTes();

    socket.on("client:newnote", async (data) => {
      const newNote = new Note(data);
      const savedNote = await newNote.save();

      //socket.emit en el caso de abajo manda los cambios solo a la ventana que le envió el dato
      io.emit("server:newnote", savedNote);
    });

    socket.on("client:deleteNote", async (id) => {
      await Note.findByIdAndDelete(id);
      emitNoTes();
    });

    socket.on("client:updateNote",async(note)=>{
      const {_id,...restOfnote} = note;
      const updatedNote = Note.findByIdAndUpdate(_id, restOfnote);

      emitNotes();
    })
  });
};
