// process-video.js (exemplo)

const ffmpegPath = require("ffmpeg-static");
const { exec } = require("child_process");
const fs = require("fs/promises");
const path = require("path");

function runFFmpeg(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject({ error, stderr });
      }
      resolve({ stdout, stderr });
    });
  });
}

async function convertVideo(inputPath, outputPath) {
  // Ajuste aqui para WEBM com VP9+Opus, por exemplo
  const command = `"${ffmpegPath}" -i "${inputPath}" \
    -c:v libvpx-vp9 \
    -b:v 0 \
    -crf 30 \
    -c:a libopus \
    -b:a 128k \
    "${outputPath}" -y`;

  try {
    console.log(`Convertendo para WEBM: ${inputPath}`);
    await runFFmpeg(command);
    console.log(`Vídeo convertido: ${outputPath}`);
  } catch (err) {
    console.error(`Erro convertendo ${inputPath}:`, err);
  }
}

async function processVideos(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      // se for pasta, chama de novo
      await processVideos(entryPath);
    } else {
      // ex.: convertemos qualquer .mp4
      if (/\.(mp4)$/i.test(entry.name)) {
        // gera nome de saída .webm
        const { name } = path.parse(entry.name);
        const outputPath = path.join(directory, `${name}.webm`);

        // checa se já existe
        try {
          await fs.access(outputPath);
          console.log(`Arquivo .webm já existe, pulando: ${outputPath}`);
        } catch {
          // se não existe, converte
          await convertVideo(entryPath, outputPath);
        }
      }
    }
  }
}

async function main() {
  const baseDirectory = "./public/videos";
  try {
    await processVideos(baseDirectory);
    console.log("Conversão para WEBM finalizada!");
  } catch (error) {
    console.error("Erro geral no processamento de vídeos:", error);
  }
}

main();
