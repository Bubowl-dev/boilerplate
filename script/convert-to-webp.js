const fs = require("fs");
const sharp = require("sharp");
const path = require("path");

const directory = "./public/";

function convertToWebp(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error("Erro ao acessar o diretório", err);
      return;
    }

    entries.forEach((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        convertToWebp(entryPath);
      } else {
        if (/\.(jpe?g|png)$/i.test(entry.name)) {
          const outputFilePath = path.join(directory, `${path.parse(entry.name).name}.webp`);

          sharp(entryPath)
            .toFile(outputFilePath)
            .then(() => console.log(`${entry.name} convertido para WEBP`))
            .catch((err) => console.error("Erro ao converter arquivo", entry.name, err));
        }
      }
    });
  });
}

convertToWebp(directory);
