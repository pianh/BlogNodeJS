const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const hbs = require("express-handlebars");

const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride("_method"));
// XMLHttpRequest, fetch, axios,
// app.use(morgan('combined'));

//Teamplate engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// console.log(__dirname)
// console.log('PATH: ', path.join(__dirname, 'resources/views') )

// Route init
route(app);

// 127.0.0.1 -localhost
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
