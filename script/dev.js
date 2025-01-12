#!/usr/bin/env node
/* 
  dev.js
  Exemplo de script que:
    1. Lê o package.json
    2. Checa se o "name" é "boilerplate"
    3. Se for, faz perguntas no terminal e atualiza .env.production
    4. Se não for, roda o "verdadeiro" dev script (ex: next dev)
*/

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

// Biblioteca para prompts no terminal
const prompts = require("prompts");

// Biblioteca para carregar/parciar .env
const dotenv = require("dotenv");

// 1. Ler package.json
const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Função que salva o objeto .env de volta no formato "KEY=VAL"
function saveEnvFile(envObj, filePath) {
  const fileContent = Object.entries(envObj)
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");

  fs.writeFileSync(filePath, fileContent, "utf-8");
}

// Verifica se ainda está como "boilerplate"
if (packageJson.name === "boilerplate") {
  console.log("O nome do projeto ainda está como 'boilerplate'!");
  console.log("Vamos fazer algumas perguntas...");

  // Função assíncrona para rodar o fluxo de perguntas
  async function runSetup() {
    // Pergunta: Qual o novo nome do projeto?
    const { newProjectName } = await prompts({
      type: "text",
      name: "newProjectName",
      message: "Qual o nome do projeto?",
    });

    // Atualiza o package.json com o novo nome
    packageJson.name = newProjectName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`\n✅ package.json atualizado! name: '${newProjectName}'\n`);

    // Carrega .env.production
    const envProductionPath = path.join(process.cwd(), ".env.production");

    // Garante que o arquivo exista (caso não exista, crie vazio)
    if (!fs.existsSync(envProductionPath)) {
      fs.writeFileSync(envProductionPath, "", "utf-8");
    }

    const envConfig = dotenv.parse(fs.readFileSync(envProductionPath, "utf-8"));

    // 2. Verifica se NEXT_PUBLIC_URL contém "fiberweb.ch"
    if (envConfig.NEXT_PUBLIC_URL && envConfig.NEXT_PUBLIC_URL.includes("fiberweb.ch")) {
      // Pergunta se o usuário já sabe a URL final do projeto
      const { finalUrlKnown } = await prompts({
        type: "select",
        name: "finalUrlKnown",
        message: "Já sabe a URL final do projeto?",
        choices: [
          { title: "Sim", value: "yes" },
          { title: "Não", value: "no" },
        ],
      });

      if (finalUrlKnown === "yes") {
        const { newUrl } = await prompts({
          type: "text",
          name: "newUrl",
          message: "Digite a URL final do projeto (ex: https://meusite.com):",
        });

        envConfig.NEXT_PUBLIC_URL = newUrl;
        console.log(`\n✅ NEXT_PUBLIC_URL atualizado para: '${newUrl}'\n`);
      }
    }

    // 3. Se o NEXT_PUBLIC_URL não conter "fiberweb" e
    //    o NEXT_PUBLIC_GOOGLE_SEARCH estiver vazio => pergunte sobre Search Console
    if (
      (!envConfig.NEXT_PUBLIC_URL || !envConfig.NEXT_PUBLIC_URL.includes("fiberweb")) &&
      !envConfig.NEXT_PUBLIC_GOOGLE_SEARCH
    ) {
      const { createdSearchConsole } = await prompts({
        type: "select",
        name: "createdSearchConsole",
        message: "Você já criou este projeto no Google Search Console?",
        choices: [
          { title: "Sim", value: "yes" },
          { title: "Não", value: "no" },
        ],
      });

      if (createdSearchConsole === "no") {
        console.log(
          "\nAbra o link para criar no Search Console:\n" +
            "  https://search.google.com/search-console\n",
        );
        // Aqui você poderia abrir o link automaticamente no navegador,
        // mas isso varia de SO p/ SO. Exemplo (Mac):
        // spawn("open", ["https://search.google.com/search-console"]);
      }
    }

    // 4. Se NEXT_PUBLIC_URL não conter "fiberweb" e
    //    NEXT_PUBLIC_GOOGLE_ANALYTICS estiver vazio => pergunte sobre GA
    if (
      (!envConfig.NEXT_PUBLIC_URL || !envConfig.NEXT_PUBLIC_URL.includes("fiberweb")) &&
      !envConfig.NEXT_PUBLIC_GOOGLE_ANALYTICS
    ) {
      const { createdAnalytics } = await prompts({
        type: "select",
        name: "createdAnalytics",
        message: "Você já criou o projeto no Google Analytics?",
        choices: [
          { title: "Sim", value: "yes" },
          { title: "Não", value: "no" },
        ],
      });

      if (createdAnalytics === "no") {
        console.log(
          "\nAbra o link para criar no Google Analytics:\n" +
            "  https://analytics.google.com/analytics/web/\n",
        );
      }
    }

    // Salva as alterações no .env.production
    saveEnvFile(envConfig, envProductionPath);
    console.log("✅ .env.production atualizado!\n");

    // Ao final, chamamos o script "next dev" (ou outro script que você precise)
    console.log("Iniciando o servidor de desenvolvimento...\n");
    const devProcess = spawn("next", ["dev", "--turbopack"], { stdio: "inherit" });
    devProcess.on("close", (code) => {
      process.exit(code);
    });
  }

  // Executa a função assíncrona
  runSetup();
} else {
  // Se NÃO é boilerplate, apenas roda o dev normal (ex: next dev)
  console.log(`Nome do projeto: ${packageJson.name}`);

  const devProcess = spawn("next", ["dev", "--turbopack"], { stdio: "inherit" });
  devProcess.on("close", (code) => {
    process.exit(code);
  });
}
