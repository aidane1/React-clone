const express = require("express");
const bodyParser = require("body-parser");
const customRender = include("middleware/custom-render");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(customRender);

module.exports = function() {
  // let middlewareBody = middleware();
  // for (var key in middlewareBody) {
  //   app.use(middlewareBody[key]);
  // }

  // app.use(session());

  app.set("view engine", "ejs");

  // if (server_info.config.config_id == "development") {
  // } else {
  //   app.set("trust proxy", 1);
  // }

  // routes.forEach(route => {
  //   app.use(route.path, route.component);
  // });

  // if (server_info.config.config_id == 'production') {
  //   app.use ('/', httpsRedirect ());
  // }

  // const api = include("/app/api/index");

  // const graphapi = include("/app/graphql_api/index");

  // const admin = include("/app/admin/index");

  // const graduation = include("/app/graduation/index");

  // const websockets = include("/app/websockets/index");

  // app.use("/api", api);

  // app.use("/graph-api", graphapi);

  // app.use("/admin", admin);

  app.get("/", async (req, res) => {
	// res.send("Hey!");
	res.custom_render("test-files/example.js");
  });

  // app.use("/graduation", graduation);

  // app.use("/web-sockets", websockets);

  app.listen(server_info.config.node_port, () => {
    console.log("app is listening on port " + server_info.config.node_port);
  });
};
