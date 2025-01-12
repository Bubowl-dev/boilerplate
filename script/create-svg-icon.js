#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const [, , newFolder] = process.argv;
const basePath = "./src/components/svgs";

// Função para converter "logo-icon" em "LogoIcon"
const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

if (!newFolder) {
  console.error("Erro: favor informar o nome do ícone (ex: logo-icon).");
  process.exit(1);
}

// Caminho completo até a pasta do ícone
const fullPath = path.join(basePath, newFolder);

// Converte para PascalCase
const folderNamePascalCase = toPascalCase(newFolder);

// Conteúdo do arquivo index.tsx
// Ajuste conforme sua preferência de estrutura, por exemplo colocar <path ... /> e etc.
const iconContent = `import React from "react";

export const ${folderNamePascalCase}Icon = ({ ...props }: React.SVGProps<SVGSVGElement>) => (

);

export default ${folderNamePascalCase}Icon;
`;

// Cria a pasta recursivamente
fs.mkdirSync(fullPath, { recursive: true });

// Cria o arquivo index.tsx
fs.writeFileSync(path.join(fullPath, "index.tsx"), iconContent);

console.log(`Ícone ${newFolder} criado com sucesso!`);
