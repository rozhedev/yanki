const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

// * JSON

const json = () => {
    return src(path.json.src);
}

module.exports = json;