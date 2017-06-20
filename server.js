const express = require("express");
const register = require("./register");

const app = express();


exports.createEndpointGet = (path, handler) => {
    app.get(path, handler);
};

register.register();

app.listen(3000, () => console.log("Server started..."));
