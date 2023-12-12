const http = require("http");
const randomPersonnality = [
  "gay",
  "nul",
  "personne",
  "le con du college",
  "un gros lard",
  "un mangeur de chien"
];

const server = http.createServer((req, res) => {
  const random = Math.floor(Math.random() * randomPersonnality.length);
  const text = "Tu veux savoir ta personnalite? Bah tu es " + randomPersonnality[random] + "."
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(text);
});

const port = 3000;
server.listen(port, () => {
  console.log(`https://cool.words.pcoi94pro.repl.co/`);
});
