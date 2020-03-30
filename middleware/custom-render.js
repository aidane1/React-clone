const fs = require("fs");

module.exports = (req, res, next) => {
  res.custom_render = path => {
    fs.readFile(abs_path(path), (err, data_1) => {
      if (err) {
      } else {
      }
      fs.readFile(abs_path("react-clone/react-clone.js"), (err, data_2) => {
        if (err) {
        } else {
        }

        res.send(
          `
			<html>
				<head>
				
				</head>
				<body>
					<div id="container"></div>
				</body>
				<script>
					${data_2}
					${data_1}
				</script>
			</html>
			`
        );
      });
    });
  };
  next();
};
