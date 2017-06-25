const server = require("../../server");
const connector = require("../../dbConnector/connect");

exports.registerEndpoints = () => {
    server.createEndpointGet("/statistics/modules", (req, res) => {
        connector.getCollection("fileStats")
            .then(data => data.map(i => {
                return {
                date: i.date,
                javascript: i.javascript,
                typescript: i.typescript
                }
            }))
            .then(x => res.send(x));
    });
 };

