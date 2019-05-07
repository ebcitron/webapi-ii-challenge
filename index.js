const server = require("./server");
const PORT = 6660;
server.listen(PORT, () => console.log(`\n*** API Running on Port ${PORT}! *** \n`));