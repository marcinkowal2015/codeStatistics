const server = require("../../server");

exports.registerEndpoints = () => {
    server.createEndpointGet("/statistics/modules", (req, res) => {
        res.send({a: 1});
    });
};

