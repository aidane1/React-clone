const path = require("path");

const url = require("url");

global.server_info = {
  config: {
    node_port: 8181
  }
};

global.base_dir = __dirname;
global.abs_path = function(filePath) {
  return path.join(base_dir, filePath);
};

global.include = function(file) {
  return require(abs_path("/" + file));
};

const app = include("/server/server");

app();
