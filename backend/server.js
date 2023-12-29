const PORT = process.env.PORT || 8080;


const app = require("./app");

function listener() {
    console.log(`Listening on Port ${PORT}!`);
}

app.listen(PORT, listener);