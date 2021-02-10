const express = require("express");
const mathRouter = require("./routes/router");
const colors = require("colors");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use("/math", mathRouter);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res, next) => res.status(404).render("error"));

app.listen(8080, () => {
  /*let rn = Math.floor(Math.random() * 100);
  let arn = Math.abs(rn);
  console.log('the abs of '+rn+' is:', arn);*/
  colors.setTheme({
    silly: "rainbow",
    input: "grey",
    verbose: "cyan",
    prompt: "grey",
    info: "green",
    data: "grey",
    help: "cyan",
    warn: "yellow",
    debug: "blue",
    error: "red",
  });
  console.log("server started".underline.debug);
});
