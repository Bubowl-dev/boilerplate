#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Captura o parâmetro passado. Ex: "yarn page servicos"
const [, , pageName] = process.argv;

// Função para converter "pintura-nova" => "PinturaNova"
const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

// Valida se o usuário passou o nome da página
if (!pageName) {
  console.error("Uso: yarn page <nome-da-pagina>");
  console.error("Exemplo: yarn page servicos ou yarn page pintura-nova");
  process.exit(1);
}

// Define caminhos base
const basePathApp = "./src/app";
const basePathTemplates = "./src/templates";

// Define caminho completo da pasta da página (ex: ./src/app/pintura-nova)
const appFolderPath = path.join(basePathApp, pageName);

// Define caminho completo da pasta do template (ex: ./src/templates/pintura-nova)
const templatesFolderPath = path.join(basePathTemplates, pageName);

// Converte o nome para PascalCase (ex: pintura-nova => PinturaNova)
const pageNamePascal = toPascalCase(pageName);

// Conteúdo do arquivo dentro de `src/app/<pageName>/index.tsx`
const appIndexContent = `import { type Metadata } from "next";
import { type ReactNode } from "react";
import { ${pageNamePascal}Template } from "@/templates/${pageName}";

export const metadata: Metadata = {
  title: "Fiber web - Creative Webseiten",
  description: "Creative Webseiten Effektives Marketing Smarte KI Lösungen",
};

const ${pageNamePascal} = (): ReactNode => {
  return <${pageNamePascal}Template />;
};

export default ${pageNamePascal};
`;

// Conteúdo do arquivo dentro de `src/templates/<pageName>/index.tsx`
const templateIndexContent = `"use client";

import { type FC } from "react";

export const ${pageNamePascal}Template: FC = () => {
  return <></>;
};
`;

// Cria a pasta em src/app/<pageName>
fs.mkdirSync(appFolderPath, { recursive: true });

// Cria o index.tsx dentro de src/app/<pageName>
fs.writeFileSync(path.join(appFolderPath, "index.tsx"), appIndexContent);

// Cria a pasta em src/templates/<pageName>
fs.mkdirSync(templatesFolderPath, { recursive: true });

// Cria o index.tsx dentro de src/templates/<pageName>
fs.writeFileSync(path.join(templatesFolderPath, "index.tsx"), templateIndexContent);

console.log(`Página '${pageName}' criada com sucesso!`);
console.log(`- Pasta: ${appFolderPath}`);
console.log(`- Template: ${templatesFolderPath}`);
