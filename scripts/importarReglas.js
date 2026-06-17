const fs = require("fs");

console.log("Importador preparado");

const reglas = [];

fs.writeFileSync(
  "./public/rulebook2025.json",
  JSON.stringify(reglas, null, 2)
);

console.log("JSON generado");
