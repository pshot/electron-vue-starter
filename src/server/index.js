const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const express_example = require("./routes/express_example");

const app = express();
const port = 3420;

// configure middleware
app.set("port", process.env.port || port); // set express to use this port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(cors());

// Api routing
app.use("/api/express_example", express_example);

// set the app to listen on the port
app.listen(port, () => {
  console.log(`Express running on port: ${port}`);
});
