const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

// 1) Função para criar WEBP
async function createWebp(directory) {
  // Lê o diretório atual
  const entries = await fs.readdir(directory, { withFileTypes: true });

  // Percorre cada item do diretório
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    // Se for subdiretório, chamamos a mesma função (recursividade)
    if (entry.isDirectory()) {
      await createWebp(entryPath);
    } else {
      // Se for imagem .jpg, .jpeg ou .png
      if (/\.(jpe?g|png)$/i.test(entry.name)) {
        const webpPath = path.join(directory, path.parse(entry.name).name + ".webp");

        // Checa se o .webp já existe
        try {
          await fs.access(webpPath);
          // Se não der erro, significa que webp existe, então pular
        } catch (err) {
          // Se cair aqui, .webp não existe -> converte
          await sharp(entryPath).toFile(webpPath);
          console.log("Criado WEBP:", webpPath);
        }
      }
    }
  }
}

// 2) Função para otimizar os arquivos originais
async function optimizeImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await optimizeImages(entryPath);
    } else {
      // Se for imagem .jpg, .jpeg ou .png
      if (/\.(jpe?g|png)$/i.test(entry.name)) {
        const ext = path.extname(entry.name).toLowerCase();
        let pipeline = sharp(entryPath);

        // Definindo parâmetros de otimização de acordo com a extensão
        if (ext === ".png") {
          pipeline = pipeline.png({ compressionLevel: 9, quality: 80 });
        } else {
          // Se não for .png, consideramos jpg/jpeg
          pipeline = pipeline.jpeg({ quality: 80 });
        }

        try {
          // Lê a imagem, processa e sobrescreve no mesmo caminho
          const buffer = await pipeline.toBuffer();
          await fs.writeFile(entryPath, buffer);
          console.log("Otimizado:", entryPath);
        } catch (err) {
          console.error("Erro ao otimizar arquivo:", entryPath, err);
        }
      }
    }
  }
}

// 3) Função "principal", que executa o fluxo
async function main() {
  const baseDirectory = "./public";

  try {
    // Primeiro cria todas as versões .webp
    console.log("==> Gerando WEBP de todas as imagens...");
    await createWebp(baseDirectory);

    // Depois otimiza os arquivos originais
    console.log("==> Otimizando as imagens originais...");
    await optimizeImages(baseDirectory);

    console.log("Processo finalizado!");
  } catch (error) {
    console.error("Ocorreu um erro geral:", error);
  }
}

// Executa
main();
