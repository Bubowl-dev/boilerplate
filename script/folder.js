#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer").default;

function toPascalCase(str) {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

async function main() {
  // node ./script/folder.js atoms teste
  const [, , baseFolder, newFolder] = process.argv;
  if (!baseFolder || !newFolder) {
    console.log(
      "Uso correto: node ./script/folder.js <pastaBase> <nomeComponente>\nExemplo: node ./script/folder.js atoms teste",
    );
    process.exit(1);
  }

  // Prompt interativo
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "wantsAnimation",
      message: "Vai ter animação? (y/n)",
      default: false,
    },
    {
      type: "confirm",
      name: "wantsProps",
      message: "Vai ter props? (y/n)",
      default: false,
    },
    {
      type: "confirm",
      name: "wantsConstants",
      message: "Vai ter constantes? (y/n)",
      default: false,
    },
  ]);

  const basePath = "./src/components";
  const fullPath = path.join(basePath, baseFolder, newFolder);
  fs.mkdirSync(fullPath, { recursive: true });

  const folderNamePascalCase = toPascalCase(newFolder);

  // ---------------------------
  // Cria "styles.ts" (obrigatório)
  // ---------------------------
  const stylesContent = `import styled from "styled-components";

export const ${folderNamePascalCase} = styled.div\`\`;
`;
  fs.writeFileSync(path.join(fullPath, "styles.ts"), stylesContent);

  // ---------------------------
  // Cria arquivos opcionais
  // ---------------------------
  if (answers.wantsAnimation) {
    // Conteúdo padrão do animation.ts
    const animationContent = `import gsap from "gsap";
import { useEffect, useRef } from "react";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      // Aqui você pode colocar sua animação
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};
`;
    fs.writeFileSync(path.join(fullPath, "animation.ts"), animationContent);
  }

  if (answers.wantsProps) {
    const propsContent = `export interface ${folderNamePascalCase}Props {
  // Adicione suas props aqui
}
`;
    fs.writeFileSync(path.join(fullPath, "props.ts"), propsContent);
  }

  if (answers.wantsConstants) {
    const constantsContent = `export default {
  test: "Algum valor de teste",
};
`;
    fs.writeFileSync(path.join(fullPath, "constants.tsx"), constantsContent);
  }

  // ---------------------------
  // Montar o conteúdo do "index.tsx"
  // ---------------------------

  // 1. Montamos os imports dinamicamente
  const imports = [];
  imports.push(`import * as S from "./styles";`); // sempre
  if (answers.wantsAnimation) {
    imports.push(`import useAnimation from "./animation";`);
  }
  if (answers.wantsConstants) {
    imports.push(`import C from "./constants";`);
  }
  // Se quiser props, importa React e o tipo
  if (answers.wantsProps) {
    imports.push(`import type { ${folderNamePascalCase}Props } from "./props";`);
    imports.push(`import { FC } from "react";`);
  }

  // 2. Definir a assinatura do componente
  let componentSignature = `export const ${folderNamePascalCase} = () => {`;
  if (answers.wantsProps) {
    // Se quer props, vira FC<Props>
    componentSignature = `export const ${folderNamePascalCase}: FC<${folderNamePascalCase}Props> = ({}) => {`;
  }

  // 3. Definir o corpo do componente (linhas dentro da função)
  const bodyLines = [];

  // Se tiver animação, chama useAnimation e desestrutura
  if (answers.wantsAnimation) {
    bodyLines.push(`const { sectionRef } = useAnimation();
      `);
  }

  // Se tiver constants, queremos usar {C.test}, senão vamos usar o nome do componente ou algo fixo
  const contentInside = answers.wantsConstants ? "{C.test}" : folderNamePascalCase;

  // Se tiver animação, passamos `ref={sectionRef}` no componente
  const refAttr = answers.wantsAnimation ? " ref={sectionRef}" : "";

  bodyLines.push(`return <S.${folderNamePascalCase}${refAttr}></S.${folderNamePascalCase}>;`);

  // 4. Montar tudo em uma única string
  const indexContent = `
${imports.join("\n")}

${componentSignature}
  ${bodyLines.join("\n  ")}
};
`.trimStart();

  // ---------------------------
  // Escreve "index.tsx"
  // ---------------------------
  fs.writeFileSync(path.join(fullPath, "index.tsx"), indexContent);

  console.log(`\nComponente "${folderNamePascalCase}" criado com sucesso em "${fullPath}"!`);
}

main().catch(console.error);
