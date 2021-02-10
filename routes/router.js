const express = require("express");
const Parser = require("../solver/parser");
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.static("public"));

router.get("/", (req, res) => {
  res.redirect("/");
});

router.get("/abs", (req, res) => {
  res.render("abs");
});

router.get("/pow", (req, res) => {
  res.render("pow");
});

router.get("/areab", (req, res) => {
  res.render("areab");
});

router.get("/sizeb", (req, res) => {
  res.render("sizeb");
});

router.get("/box", (req, res) => {
  res.render("box");
});

router.get("/fib", (req, res) => {
  res.render("fib");
});

router.get("/prob", (req, res) => {
  res.render("prob");
});

router.post("/cabs", (req, res) => {
  let n = req.body.n;
  let abs = Math.abs(n);
  let m = `<var>|${n}|</var>`;
  res.render("calculate", { a: abs, m: m });
});

router.post("/cpow", (req, res) => {
  let n = req.body.n;
  let pn = req.body.pn;
  let pow = Math.pow(n, pn);
  let m = `<var>${n}<sup>${pn}</sup></var>`;
  res.render("calculate", { a: pow, m: m });
});

router.post("/careab", (req, res) => {
  let h = req.body.h;
  let w = req.body.w;
  let e = req.body.e;
  let hw = h * w;
  let he = h * e;
  let we = w * e;
  let t = (hw + he + we) * 2;

  let m = `
    التمارين الأولية:<br>
    <b id="a">1.</b> <var>${h} * ${w}</var><br><br>
    <b id="a">2.</b> <var>${h} * ${e}</var><br><br>
    <b id="a">3.</b> <var>${w} * ${e}</var><br><br>

    التمرين الأخير:<br>
    (${hw} + ${he} + ${we}) * 2
  `;
  res.render("calculate", { a: t + " سم2", m: m });
});

router.post("/csizeb", (req, res) => {
  let h = req.body.h;
  let w = req.body.w;
  let e = req.body.e;
  let t = h * w * e;

  let m = `<var>${h} * ${w} * ${e}</var>`;
  res.render("calculate", { a: t + " سم3", m: m });
});

router.post("/cbox", (req, res) => {
  let h = req.body.h;
  let w = req.body.w;
  let d = req.body.d;

  res.render("cbox", { h: h, w: w, d: d });
});

router.post("/cfib", (req, res) => {
  let f = req.body.f;
  const fib = (n) => {
    if (n <= 1) return 1;
    return fib(n - 2) + fib(n - 1);
  };
  let m = `F(${f} - 2) + F(${f} - 1)`;
  res.render("calculate", { a: fib(f), m: m });
});

router.post("/solve", (req, res) => {
  let problem = req.body.problem;
  var parser = new Parser();

  for (let i = 0; i < problem.split("").length; i++) {
    console.log(parser.all(problem.split("")[i]));
  }
  res.send("look at the console");
});

module.exports = router;