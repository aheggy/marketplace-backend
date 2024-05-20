const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT || 3000;  // Default to port 3000 if PORT is not set

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});
