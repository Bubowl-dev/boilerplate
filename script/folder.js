const fs = require("fs");
const path = require("path");

const [, , baseFolder, newFolder] = process.argv;
const basePath = "./src/components";

const fullPath = path.join(basePath, baseFolder, newFolder);

fs.mkdirSync(fullPath, { recursive: true });

const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

const folderNamePascalCase = toPascalCase(newFolder);
const indexContent = `import * as S from "./styles"

export const ${folderNamePascalCase} = () => {
  return <S.${folderNamePascalCase}Container></S.${folderNamePascalCase}Container>;
};
`;

const stylesContent = `import styled from "styled-components";

export const ${folderNamePascalCase}Container = styled.div\`\`;
`;

const propsContent = `export interface ${folderNamePascalCase}Props {}
`;

fs.writeFileSync(path.join(fullPath, "index.tsx"), indexContent);
fs.writeFileSync(path.join(fullPath, "styles.ts"), stylesContent);
fs.writeFileSync(path.join(fullPath, "props.ts"), propsContent);

console.log(`Componente criado com sucesso!  '${newFolder}' e arquivos em '${fullPath}'`);
