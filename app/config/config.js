var path = require("path");
module.exports = {
    db: "mongodb://localhost/express-skeleton",
    root: path.normalize(__dirname + "/.."),
    app: {
        name: "express-skeleton"
    }
};
