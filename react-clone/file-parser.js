let file_parser = path => {
  fs.readFile(abs_path(path), (err, data) => {
    if (err) {
    } else {
    }
	console.log(data);
  });
};
