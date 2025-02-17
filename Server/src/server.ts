import app from './app';
import { server } from "./socket";

const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// Make the program never stops
process.on('uncaughtException', (err: Error) => {
    console.error('Uncaught exception:', err);
});