const express = require("express");
const categories = require("./Data/categories.json");
const news = require("./Data/news.json");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://peaceful-meerkat-286468.netlify.app",
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Dragon if Flay!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    res.send(categoryNews);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
